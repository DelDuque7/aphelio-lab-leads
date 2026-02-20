const SocialProof = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-main relative">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Resultados que nossos clientes vivem
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto">
          Sem números inventados — apenas o tipo de transformação que entregamos.
        </p>

        {/* Resultados típicos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              before: "Leads sem resposta por horas",
              after: "Resposta automática em segundos",
            },
            {
              before: "Follow-up manual e esquecido",
              after: "Sequências automáticas que recuperam leads",
            },
            {
              before: "Perfil bonito sem conversão",
              after: "Conteúdo estratégico que gera demanda",
            },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6">
              <div className="text-sm text-muted-foreground mb-2 font-medium">Antes</div>
              <p className="text-foreground mb-4">{item.before}</p>
              <div className="w-8 h-0.5 bg-primary mb-4" />
              <div className="text-sm text-primary mb-2 font-medium">Depois</div>
              <p className="text-foreground">{item.after}</p>
            </div>
          ))}
        </div>

        {/* Logos placeholder */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">Empresas que confiam na Aphelio Lab</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="w-28 h-10 rounded-md bg-muted/50 border border-border flex items-center justify-center text-xs text-muted-foreground"
              >
                Logo {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
