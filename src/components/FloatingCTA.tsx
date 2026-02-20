import { MessageCircle, CalendarCheck } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
      <a
        href="#agendar"
        className="flex items-center gap-2 bg-card border border-border text-foreground px-4 py-3 rounded-full shadow-lg text-sm font-medium hover:border-primary/40 transition-all"
        aria-label="Agendar diagnóstico"
      >
        <CalendarCheck size={18} className="text-primary" />
        Agendar
      </a>
      <a
        href="https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Aphelio%20Lab"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg animate-pulse-glow text-sm font-medium"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
};

export default FloatingCTA;
