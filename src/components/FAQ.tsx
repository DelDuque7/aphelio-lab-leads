import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Automação é complicado?",
    a: "Não. A gente cuida de toda a parte técnica. Você só precisa nos contar como funciona seu atendimento hoje e nós configuramos tudo. Você não precisa entender de tecnologia.",
  },
  {
    q: "Quanto tempo leva pra ficar pronto?",
    a: "Depende do escopo, mas em geral as primeiras automações ficam prontas entre 7 e 15 dias após o diagnóstico. O cronograma sempre indica um prazo máximo — e pode ficar pronto antes.",
  },
  {
    q: "Funciona para negócio local?",
    a: "Sim! A Aphelio Lab foi pensada exatamente para negócios locais: clínicas, salões, restaurantes, escritórios, lojas, prestadores de serviço e muito mais.",
  },
  {
    q: "Eu vou perder o toque humano?",
    a: "Não. A automação cuida das etapas repetitivas (saudação, FAQ, qualificação). Quando o lead está pronto para comprar, ele é direcionado para atendimento humano. Você ganha tempo, não perde personalização.",
  },
  {
    q: "Dá pra integrar com meu jeito de atender?",
    a: "Sim. No diagnóstico, mapeamos seu processo atual e criamos as automações respeitando o seu fluxo. Nada é engessado — tudo é personalizado.",
  },
  {
    q: "E se eu quiser só automação sem social media?",
    a: "Sem problema. Nossos serviços são modulares. Você pode contratar apenas automação de atendimento, por exemplo, sem incluir conteúdo ou branding.",
  },
  {
    q: "O que pode aumentar o custo?",
    a: "Se o volume de contatos ou interações crescer muito (ótimo sinal!), ferramentas como o ManyChat podem gerar tarifas adicionais conforme o plano deles. Mas avisamos antes e ajudamos a gerenciar.",
  },
  {
    q: "Como começamos?",
    a: "Clique em 'Agendar diagnóstico' ou fale com a gente no WhatsApp. Fazemos uma conversa rápida para entender seu cenário e propor o plano ideal — sem compromisso.",
  },
  {
    q: "Preciso ter muitos seguidores para funcionar?",
    a: "Não. Automação funciona com qualquer volume. Mesmo poucos leads atendidos rápido convertem melhor do que muitos leads ignorados.",
  },
  {
    q: "Vocês criam o conteúdo ou só a estratégia?",
    a: "Dependendo do plano, criamos tanto a estratégia quanto o conteúdo (arte + copy). No diagnóstico, definimos juntos o que faz mais sentido.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Perguntas frequentes
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Tire suas dúvidas antes de agendar.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-foreground font-heading font-medium text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
