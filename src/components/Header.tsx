import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solução", href: "#solucao" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="/" className="font-heading text-2xl font-bold text-foreground tracking-tight">
          Aphelio <span className="text-primary">Lab</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="default" asChild>
            <a href="#agendar">Agendar diagnóstico</a>
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="lg" className="w-full mt-4" asChild>
            <a href="#agendar" onClick={() => setIsOpen(false)}>Agendar diagnóstico</a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
