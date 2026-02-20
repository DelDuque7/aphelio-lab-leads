import { Bot, TrendingUp, Palette } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "Automação de atendimento e captação",
    description: "Respostas automáticas no DM e WhatsApp que captam leads e qualificam contatos — sem você precisar estar online 24h.",
    result: "Resultado esperado: mais leads respondidos em menos tempo, sem esforço manual.",
  },
  {
    icon: TrendingUp,
    title: "Automação de vendas e follow-up",
    description: "Sequências automáticas que recuperam interessados, enviam lembretes e mantêm o funil ativo — mesmo quando ninguém está olhando.",
    result: "Resultado esperado: menos oportunidades perdidas e mais conversões.",
  },
  {
    icon: Palette,
    title: "Conteúdo + Branding que dá confiança",
    description: "Social media estratégico e identidade visual profissional que transmitem autoridade e geram desejo antes mesmo do primeiro contato.",
    result: "Resultado esperado: perfil que converte visitante em lead qualificado.",
  },
];

const Solution = () => {
  return (
    <section id="solucao" className="py-24 lg:py-32 bg-gradient-main relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-decorative-circle pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          A solução <span className="text-primary">Aphelio Lab</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
          Três pilares que trabalham juntos para transformar seu atendimento, suas vendas e sua presença digital.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {card.description}
              </p>
              <p className="text-sm text-primary font-medium">
                {card.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
