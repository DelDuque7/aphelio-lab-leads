import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

interface LocationState {
  waLink?: string;
  nome?: string;
}

const ThankYou = () => {
  const location = useLocation();
  const state = (location.state as LocationState) || {};
  const waLink =
    state.waLink ||
    "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Aphelio%20Lab";
  const nome = state.nome || "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-main relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-decorative-circle pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-primary" />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {nome ? `Obrigado, ${nome}!` : "Obrigado!"}
          </h1>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Recebemos seus dados. Para agilizar seu diagnóstico, continue a conversa pelo WhatsApp — respondemos em poucos minutos.
          </p>

          <Button variant="hero" size="xl" asChild>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={20} />
              Continuar no WhatsApp
            </a>
          </Button>

          <div className="mt-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Voltar para o site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
