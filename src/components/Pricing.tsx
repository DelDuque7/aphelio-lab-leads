import { Button } from "@/components/ui/button";
import { Check, X, Star } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    highlight: false,
    forWho: "Para quem quer começar a automatizar o atendimento sem complexidade.",
    includes: [
      "Chatbot WhatsApp (boas-vindas + FAQ)",
      "Automação de DM no Instagram",
      "Suporte por e-mail",
      "Relatório mensal básico",
    ],
    excludes: [
      "Social media",
      "Branding/Rebranding",
      "Follow-up automático avançado",
    ],
    ideal: "Ideal quando você já tem conteúdo, mas perde leads por falta de resposta rápida.",
    price: "Sob diagnóstico",
  },
  {
    name: "Performance",
    highlight: true,
    forWho: "Para quem quer automação completa + conteúdo estratégico.",
    includes: [
      "Tudo do Essencial",
      "Recuperação de leads (follow-up automático)",
      "Social media estratégico",
      "Processos comerciais nível 1",
      "Relatório mensal detalhado",
      "Suporte prioritário",
    ],
    excludes: [
      "Branding/Rebranding completo",
    ],
    ideal: "Ideal quando você quer um sistema completo de captação + conteúdo + automação.",
    price: "Sob diagnóstico",
  },
  {
    name: "Escala",
    highlight: false,
    forWho: "Para negócios que precisam escalar com volume e personalização.",
    includes: [
      "Tudo do Performance",
      "Branding ou Rebranding completo",
      "Automações customizadas",
      "Consultoria de funil",
      "Onboarding da equipe comercial",
      "Gerente de conta dedicado",
    ],
    excludes: [],
    ideal: "Ideal quando você tem volume e precisa de personalização total.",
    price: "Sob diagnóstico",
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Planos
        </h2>
        <p className="text-muted-foreground text-center mb-4 text-lg max-w-2xl mx-auto">
          Escolha o plano ideal para o momento do seu negócio.
        </p>
        <p className="text-sm text-muted-foreground text-center mb-16">
          Implementação + mensalidade (recorrência)
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-xl p-8 border transition-all duration-300 relative ${
                plan.highlight
                  ? "bg-card border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "bg-card border-border hover:border-primary/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} /> Recomendado
                </div>
              )}

              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.forWho}</p>

              <p className="font-heading text-xl font-semibold text-primary mb-6">{plan.price}</p>

              <div className="space-y-3 mb-6">
                {plan.includes.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
                {plan.excludes.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X size={16} className="mt-0.5 shrink-0 opacity-40" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mb-6 italic">{plan.ideal}</p>

              <Button
                variant={plan.highlight ? "hero" : "heroOutline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#agendar">Agendar diagnóstico</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
