import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-heading text-2xl font-bold text-foreground">
              Aphelio <span className="text-primary">Lab</span>
            </span>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Automação de atendimento, vendas e conteúdo estratégico para negócios locais que querem crescer.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>contato@apheliolab.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="text-primary" />
                <span>@apheliolab</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>[Cidade / Região de atuação]</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aphelio Lab. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
