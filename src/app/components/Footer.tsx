import { Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-gradient-to-b from-white to-[#fff2ee] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#f4b183] text-white shadow-md shadow-primary/20">
                <Heart className="h-4 w-4 fill-white" />
              </div>
              <span className="text-lg font-semibold text-foreground">PetLar</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Conectando pessoas e pets desde 2020. Nosso compromisso é garantir que cada animal encontre um lar cheio de amor e cuidado.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-foreground">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(11) 98765-4321</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@petlar.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-foreground">Horário de Atendimento</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary/10 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 PetLar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
