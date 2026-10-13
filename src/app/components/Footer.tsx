import { Heart, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-[#fffaf7] py-5">
      <div className="mx-auto max-w-[1440px] px-[18px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          <div>
            <div className="mb-5 flex items-center gap-3">
                <img src="/petlar-logo.png" alt="PetLar" className="h-20 w-auto" />
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Conectando pessoas e pets. Nosso compromisso é garantir que cada animal encontre um lar cheio de amor e cuidado.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-foreground">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a className="flex items-center gap-3 hover:text-foreground" href="tel:+5511987654321">
                <Phone className="h-4 w-4 text-primary" />
                <span>(32) 98442-2652</span>
              </a>
              <a className="flex items-center gap-3 hover:text-foreground" href="mailto:contato@petlar.com.br">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@petlar.com.br</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Juiz de Fora, MG</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-foreground">Horário de Atendimento</h3>
            <div className="space-y-2 text-sm leading-6 text-muted-foreground">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary/10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PetLar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
