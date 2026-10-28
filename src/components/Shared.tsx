import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { localAsset } from '../data/site';
export function Logo({ compact = false }: { compact?: boolean }) {
  return <span className={`brand ${compact ? 'brand-compact' : ''}`}><img src={localAsset('images/nextgator-logo.png')} alt="NextGator — Inteligência que gera resultados" width="2172" height="724" /></span>;
}
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.65, delay }}>{children}</motion.div>;
}
export function SectionHeading({ number, label, title, text }: { number: string; label: string; title: ReactNode; text?: string }) {
  return <Reveal className="section-heading"><div className="eyebrow"><span>{number} /</span>{label}</div><h2>{title}</h2>{text && <p>{text}</p>}</Reveal>;
}
