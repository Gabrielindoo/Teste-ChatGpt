import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Logo } from './Shared';
import { navItems, siteConfig } from '../data/site';
export default function Footer() {
  const socials = Object.entries(siteConfig.social).filter(([, url]) => /^https:\/\//.test(url));
  return <footer className="footer"><div className="container footer-top"><div className="footer-brand"><a href="#inicio" aria-label="NextGator — início"><Logo/></a><p>Seu próximo nível<br/>começa no digital.</p></div><div><h3>Explore</h3>{navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div><h3>O que criamos</h3>{['Sites institucionais', 'Landing pages', 'Soluções sob medida'].map(s => <a key={s} href="#servicos">{s}</a>)}</div><div><h3>Vamos conectar</h3>{siteConfig.email && <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}{socials.map(([name, url]) => <a className="social-link" key={name} href={url} target="_blank" rel="noopener noreferrer">{name}<ArrowUpRight size={15}/></a>)}{socials.length === 0 && <a href="#contato">Fale sobre sua ideia <ArrowUpRight size={15}/></a>}<a className="back-top" href="#inicio" aria-label="Voltar ao topo"><ArrowUp size={19}/></a></div></div><div className="container footer-bottom"><span>© 2026 NextGator. Todos os direitos reservados.</span><span>DESIGN COM INTENÇÃO. CÓDIGO COM PROPÓSITO.</span></div></footer>;
}
