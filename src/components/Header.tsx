import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './Shared';
import { navItems } from '../data/site';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('inicio');
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 30);
      for (const [id] of [...navItems].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 180) { setActive(id); break; }
      }
    };
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } };
    const resize = () => { if (window.innerWidth >= 1100) setOpen(false); };
    window.addEventListener('keydown', close); window.addEventListener('resize', resize);
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('resize', resize); };
  }, []);
  return <header className={`header ${scrolled || open ? 'header-solid' : ''}`}><div className="header-inner">
    <a href="#inicio" aria-label="NextGator — início" onClick={() => setOpen(false)}><Logo /></a>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Menu principal">{navItems.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <a className="button small header-cta" href="#contato">Solicitar orçamento <ArrowUpRight size={16}/></a>
    <button id="menu-toggle" className="icon-button menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </div></header>;
}
