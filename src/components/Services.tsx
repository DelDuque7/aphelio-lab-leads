import { MessageSquare, Bot, RotateCcw, PenTool, Palette, ClipboardList } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Automação Instagram/DM",
    description: "Comentário → DM automática → WhatsApp. Captação de leads direto do Instagram sem esforço manual.",
  },
  {
    icon: Bot,
    title: "Chatbot WhatsApp",
    description: "Boas-vindas, perguntas frequentes e qualificação automática de leads no WhatsApp Business.",
  },
  {
    icon: RotateCcw,
    title: "Recuperação de leads",
    description: "Follow-up automático para leads que não responderam. Recupere oportunidades que estavam perdidas.",
  },
  {
    icon: PenTool,
    title: "Social media estratégico",
    description: "Conteúdo educativo, provas sociais e posts de conversão planejados para gerar autoridade e vendas.",
  },
  {
    icon: Palette,
    title: "Branding / Rebranding",
    description: "Identidade visual, padronização de perfil e materiais que transmitem profissionalismo e confiança.",
  },
  {
    icon: ClipboardList,
    title: "Processos comerciais nível 1",
    description: "Organização do atendimento, definição de etapas comerciais e scripts para a equipe converter mais.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-gradient-main relative">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-decorative-circle pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Nossos serviços
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
          Cada serviço é modular — contrate o que faz sentido para o momento do seu negócio.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
