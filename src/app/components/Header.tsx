import { useState } from "react";
import { 
  ShoppingCart, 
  Heart, 
  Calendar, 
  Package, 
  User, 
  Menu,
  Utensils,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  onCartOpen: () => void;
  onAuthOpen: () => void;
}

export function Header({ onNavigate, activeSection, onCartOpen, onAuthOpen }: HeaderProps) {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Início", icon: null },
    { id: "products", label: "Produtos", icon: ShoppingCart },
    { id: "services", label: "Serviços", icon: Briefcase },
    { id: "recipes", label: "Receitas", icon: Utensils },
    { id: "training", label: "Adestramento", icon: GraduationCap },
    { id: "adoption", label: "Adoção", icon: Heart },
    { id: "donation", label: "Doação", icon: Package },
    { id: "visits", label: "Visitas", icon: Calendar },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-[#fffaf7]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#fffaf7]/70 shadow-[0_8px_30px_rgba(231,111,81,0.06)]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate("home")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#f4b183] text-white shadow-lg shadow-primary/20">
            <Heart className="h-5 w-5 fill-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground">PetLar</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === item.id 
                  ? "text-primary bg-primary/10 shadow-sm ring-1 ring-primary/10" 
                  : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Carrinho */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-11 w-11 rounded-full border border-primary/10 bg-white/80 shadow-sm hover:bg-secondary"
            onClick={onCartOpen}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] rounded-full"
              >
                {totalItems}
              </Badge>
            )}
          </Button>

          {/* Login/Usuário */}
          {user ? (
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Olá, {user.name}
              </span>
              <Button variant="outline" size="sm" onClick={logout}>
                Sair
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={onAuthOpen}
              className="hidden md:flex rounded-full border-primary/20 bg-white/80 px-4 shadow-sm hover:bg-secondary"
            >
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>
          )}

          {/* Menu Mobile */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors hover:bg-secondary/50 text-left ${
                      activeSection === item.id 
                        ? "text-primary bg-secondary/30" 
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    {item.label}
                  </button>
                ))}
                
                <div className="border-t mt-4 pt-4">
                  {user ? (
                    <div className="space-y-2">
                      <p className="px-4 text-sm text-muted-foreground">
                        Olá, {user.name}
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        onClick={() => {
                          logout();
                          setMobileMenuOpen(false);
                        }}
                      >
                        Sair
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="default"
                      className="w-full"
                      onClick={() => {
                        onAuthOpen();
                        setMobileMenuOpen(false);
                      }}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Entrar / Cadastrar
                    </Button>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
