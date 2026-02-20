import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const pains = [
  "Demora pra responder e o cliente some",
  "Você depende de uma pessoa no WhatsApp",
  "Perguntas repetidas o dia todo",
  "Orçamentos travados por falta de follow-up",
  "Instagram bonito, mas sem conversão previsível",
  "Leads entram pelo DM e ninguém dá conta",
  "Você sente que perde vendas por desorganização",
];

const PainPoints = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-decorative-circle pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            O que está acontecendo no seu negócio?
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Se você se identifica com algum desses sintomas, é hora de agir.
          </p>

          <ul className="space-y-5 mb-12">
            {pains.map((pain, i) => (
              <li key={i} className="flex items-start gap-4 text-foreground">
                <AlertTriangle size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-lg">{pain}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#agendar">Quero resolver isso</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
