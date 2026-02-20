import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const segments = [
  "Clínica / Saúde",
  "Salão / Barbearia / Estética",
  "Restaurante / Alimentação",
  "Loja / Varejo",
  "Escritório / Consultoria",
  "Prestador de serviço",
  "Educação / Curso",
  "Outro",
];

const WHATSAPP_NUMBER = "55XXXXXXXXXXX"; // Substituir pelo número real

const LeadForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    segmento: "",
    dor: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nome.trim()) e.nome = "Informe seu nome";
    if (!form.empresa.trim()) e.empresa = "Informe sua empresa";
    if (!form.whatsapp.trim() || form.whatsapp.replace(/\D/g, "").length < 10)
      e.whatsapp = "WhatsApp inválido";
    if (!form.segmento) e.segmento = "Selecione o segmento";
    if (!form.dor.trim()) e.dor = "Descreva sua principal dor";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = encodeURIComponent(
      `Olá! Sou ${form.nome} da empresa ${form.empresa}.\nSegmento: ${form.segmento}\nPrincipal dor: ${form.dor}\nWhatsApp: ${form.whatsapp}`
    );
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

    navigate("/obrigado", { state: { waLink, nome: form.nome } });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto" noValidate>
      <div>
        <label htmlFor="nome" className="block text-sm text-foreground mb-1.5 font-medium">
          Nome *
        </label>
        <Input
          id="nome"
          placeholder="Seu nome completo"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
        />
        {errors.nome && <p className="text-primary text-xs mt-1">{errors.nome}</p>}
      </div>

      <div>
        <label htmlFor="empresa" className="block text-sm text-foreground mb-1.5 font-medium">
          Empresa *
        </label>
        <Input
          id="empresa"
          placeholder="Nome da sua empresa"
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
        />
        {errors.empresa && <p className="text-primary text-xs mt-1">{errors.empresa}</p>}
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm text-foreground mb-1.5 font-medium">
          WhatsApp *
        </label>
        <Input
          id="whatsapp"
          placeholder="(00) 00000-0000"
          value={form.whatsapp}
          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
        />
        {errors.whatsapp && <p className="text-primary text-xs mt-1">{errors.whatsapp}</p>}
      </div>

      <div>
        <label htmlFor="segmento" className="block text-sm text-foreground mb-1.5 font-medium">
          Segmento *
        </label>
        <Select value={form.segmento} onValueChange={(v) => setForm({ ...form, segmento: v })}>
          <SelectTrigger id="segmento" className="bg-muted border-border text-foreground">
            <SelectValue placeholder="Selecione seu segmento" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            {segments.map((s) => (
              <SelectItem key={s} value={s} className="text-foreground">
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.segmento && <p className="text-primary text-xs mt-1">{errors.segmento}</p>}
      </div>

      <div>
        <label htmlFor="dor" className="block text-sm text-foreground mb-1.5 font-medium">
          Principal dor *
        </label>
        <Textarea
          id="dor"
          placeholder="Qual o maior problema no seu atendimento ou vendas hoje?"
          value={form.dor}
          onChange={(e) => setForm({ ...form, dor: e.target.value })}
          rows={4}
          className="bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none"
        />
        {errors.dor && <p className="text-primary text-xs mt-1">{errors.dor}</p>}
      </div>

      <Button variant="hero" size="xl" type="submit" className="w-full">
        Agendar diagnóstico gratuito
      </Button>
    </form>
  );
};

export default LeadForm;
