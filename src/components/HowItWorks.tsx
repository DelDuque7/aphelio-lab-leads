import { Search, Settings, Paintbrush, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico e mapeamento do funil",
    description: "Entendemos seu processo atual, onde estão os gargalos e quais automações fazem sentido para o seu negócio.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Implementação das automações",
    description: "Configuramos chatbots, fluxos de DM, WhatsApp e follow-up — ajustados ao seu jeito de atender.",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "Conteúdo e posicionamento",
    description: "Se contratado, criamos a estratégia de conteúdo e ajustamos seu branding para gerar autoridade e conversão.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Otimização contínua",
    description: "Acompanhamos métricas e ajustamos as automações mensalmente para melhorar resultados de forma constante.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Como funciona
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
          Um processo claro, sem complicação e focado em resultado.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <span className="font-heading text-5xl font-bold text-primary/15 absolute -top-2 -left-1">
                {s.step}
              </span>
              <div className="pt-10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-6 max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">Prazos:</span> O cronograma é um período máximo para cada ferramenta ser aplicada — e pode ficar pronto antes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
