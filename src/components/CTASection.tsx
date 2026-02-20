import LeadForm from "@/components/LeadForm";

const CTASection = () => {
  return (
    <section id="agendar" className="py-24 lg:py-32 bg-gradient-main relative">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-decorative-circle pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pare de perder clientes.
            <br />
            <span className="text-primary">Comece agora.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Preencha o formulário abaixo para agendar seu diagnóstico gratuito. Sem compromisso, sem enrolação.
          </p>
        </div>

        <LeadForm />
      </div>
    </section>
  );
};

export default CTASection;
