import viniciusPhoto from "@/assets/vinicius-duque.png";

const AboutUs = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-decorative-circle rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">
            Sobre nós
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Quem está por trás da <span className="text-primary">Aphelio Lab</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 md:w-80 lg:w-96">
              <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-40" />
              <img
                src={viniciusPhoto}
                alt="Vinícius Duque — Fundador da Aphelio Lab"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Vinícius Duque
              </h3>
              <p className="text-primary font-heading font-semibold text-sm mt-1">
                Fundador — Aphelio Lab
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Vinícius Duque fundou a Aphelio Lab com uma visão clara: marketing não deve ser apenas estética, mas <strong className="text-foreground">estrutura</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Com foco em negócios locais, desenvolveu uma abordagem que integra branding, automação e processos comerciais — ajudando empresas a organizarem seu atendimento, reduzirem perdas de leads e aumentarem previsibilidade de vendas.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Mais do que criar presença digital, seu trabalho é construir <strong className="text-foreground">sistemas que funcionam mesmo quando o dono não está online</strong> — unindo estratégia, tecnologia e visão de crescimento.
            </p>

            <div className="pt-2 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                "A Aphelio Lab nasce dessa mentalidade: menos improviso, mais estrutura."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
