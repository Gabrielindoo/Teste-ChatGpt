import { useState, type FormEvent } from 'react';
import confetti from 'canvas-confetti';
import { ArrowUpRight, Mail, MessageCircle, Check } from 'lucide-react';
import { SectionHeading, Reveal } from './Shared';
import { siteConfig } from '../data/site';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${siteConfig.email}`;
export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', type: '', message: '' });
  const [feedback, setFeedback] = useState('');
  const [sending, setSending] = useState(false);
  const phone = siteConfig.whatsapp.replace(/\D/g, '');
  const hasWhatsApp = /^\d{10,15}$/.test(phone);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!values.name.trim() || !values.message.trim()) { setFeedback('Preencha seu nome e uma mensagem com conteúdo.'); return; }
    setSending(true); setFeedback('');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Novo projeto — ${values.name.trim()} (${values.type})`,
          _template: 'table',
          _captcha: 'false',
          Nome: values.name.trim(),
          'E-mail de contato': values.email.trim(),
          'Tipo de projeto': values.type,
          Mensagem: values.message.trim(),
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data || data.success === false) {
        if (data && typeof data.message === 'string' && data.message.toLowerCase().includes('activation')) {
          setFeedback('Formulário ainda não ativado: abra o e-mail de ativação do FormSubmit em nextgatorbrasil@gmail.com e clique no link (abra em nova aba/guia do navegador).');
        } else {
          throw new Error(data?.message || String(res.status));
        }
        return;
      }
      celebrate();
      setFeedback(`Mensagem enviada com sucesso para ${siteConfig.email}! Responderemos em breve.`);
      setValues({ name: '', email: '', type: '', message: '' });
    } catch {
      setFeedback('Não foi possível enviar agora. Tente novamente ou fale direto pelo e-mail acima.');
    } finally { setSending(false); }
  };
  const celebrate = () => {
    const colors = ['#22C55E', '#4ADE80', '#BBF7D0', '#FFFFFF', '#A7F3D0'];
    confetti({ particleCount: 90, spread: 75, origin: { y: 0.7 }, colors });
    setTimeout(() => confetti({ particleCount: 60, angle: 60, spread: 60, origin: { x: 0, y: 0.8 }, colors }), 180);
    setTimeout(() => confetti({ particleCount: 60, angle: 120, spread: 60, origin: { x: 1, y: 0.8 }, colors }), 300);
  };
  const edit = (key: keyof typeof values, value: string) => { setValues(v => ({ ...v, [key]: value })); setFeedback(''); };
  return <section id="contato" className="section contact-section"><div className="container contact-layout"><div><SectionHeading number="07" label="VAMOS CRIAR ALGO EXTRAORDINÁRIO" title={<>Sua próxima grande ideia merece um site <span className="green">à altura.</span></>} text="Conte para a NextGator o que você tem em mente. Vamos transformar seu projeto em uma experiência digital."/>{hasWhatsApp ? <a className="button" href={`https://wa.me/${phone}?text=${encodeURIComponent('Olá, NextGator! Gostaria de solicitar um orçamento.')}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Solicitar orçamento pelo WhatsApp <ArrowUpRight size={18}/></a> : <a className="button" href="#briefing"><MessageCircle size={18}/> Preparar meu orçamento <ArrowUpRight size={18}/></a>}<div className="contact-meta">{siteConfig.email ? <a href={`mailto:${siteConfig.email}`}><Mail size={17}/> {siteConfig.email}</a> : <span><Mail size={17}/> Contato comercial em breve</span>}<p>Estratégia para começar. Cuidado para ir além.</p></div></div>
    <Reveal className="contact-form-wrap"><form id="briefing" onSubmit={submit}><div className="form-heading"><span>Vamos falar sobre o seu projeto?</span><ArrowUpRight size={21}/></div><label htmlFor="name">Seu nome</label><input id="name" autoComplete="name" required maxLength={100} placeholder="Como podemos chamar você?" value={values.name} onChange={e => edit('name', e.target.value)}/><label htmlFor="email">E-mail</label><input id="email" type="email" autoComplete="email" required maxLength={200} placeholder="voce@empresa.com.br" value={values.email} onChange={e => edit('email', e.target.value)}/><label htmlFor="project-type">Tipo de projeto</label><select id="project-type" required value={values.type} onChange={e => edit('type', e.target.value)}><option value="" disabled>O que vamos criar juntos?</option>{['Site institucional', 'Landing page', 'Redesign de site', 'Desenvolvimento sob medida', 'Manutenção e otimização', 'Ainda estou descobrindo'].map(s => <option key={s}>{s}</option>)}</select><label htmlFor="message">Conte um pouco sobre sua ideia</label><textarea id="message" rows={4} required minLength={10} maxLength={3000} placeholder="Seu objetivo, o que precisa e o que tem em mente…" value={values.message} onChange={e => edit('message', e.target.value)}/><button className="button form-submit" type="submit" disabled={sending}>{sending ? 'Enviando…' : hasWhatsApp ? 'Enviar pelo WhatsApp' : 'Enviar mensagem'}<ArrowUpRight size={18}/></button><p className="form-note">Sua mensagem será enviada diretamente para nossa equipe. Respondemos em até 1 dia útil.</p><div role="status" aria-live="polite" className="form-feedback">{feedback && <><Check size={17}/><span>{feedback}</span></>}</div></form></Reveal></div></section>;
}
