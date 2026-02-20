import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-main pt-20">
      {/* Decorative circles */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-decorative-circle pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-[600px] h-[600px] rounded-full bg-decorative-circle pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Seu Instagram até atrai…
            <br />
            <span className="text-primary">mas você perde dinheiro</span>
            <br />
            na demora do atendimento.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Automação de atendimento, vendas e conteúdo estratégico para negócios locais
            que querem parar de perder leads e começar a vender de verdade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="#agendar">Agendar diagnóstico</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a
                href="https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Aphelio%20Lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" size={20} />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Microproof */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Zap size={16} className="text-primary" />
              Resposta em segundos
            </span>
            <span className="divider-accent hidden sm:inline">|</span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              Atendimento 24/7
            </span>
            <span className="divider-accent hidden sm:inline">|</span>
            <span className="flex items-center gap-2">
              <MessageCircle size={16} className="text-primary" />
              Menos leads perdidos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
