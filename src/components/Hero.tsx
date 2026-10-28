import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, Code2, Sparkles } from 'lucide-react';
import { localAsset } from '../data/site';
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 75]);
  return <section ref={ref} id="inicio" className="hero" onPointerMove={e => { if (e.pointerType !== 'mouse' || reduce) return; const rect = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`); e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`); }}>
    <div className="hero-glow"/><div className="container hero-layout">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
        <div className="eyebrow"><span className="live-dot"/> ESTRATÉGIA. DESIGN. TECNOLOGIA.</div>
        <h1>Transformamos<br/>ideias em<br/><span>experiências</span><br/><span className="last-word">digitais.<svg viewBox="0 0 190 12" aria-hidden="true"><path d="M2 8Q85 -1 188 5"/></svg></span></h1>
        <p>Na NextGator, desenvolvemos sites modernos, rápidos e estratégicos para transformar sua presença digital em novas oportunidades de negócio.</p>
        <div className="hero-actions"><a className="button" href="#contato">Começar meu projeto <ArrowUpRight size={19}/></a><a className="button secondary" href="#portfolio">Explorar portfólio <ArrowUpRight size={19}/></a></div>
        <div className="hero-signoff"><span className="mini-line"/> Seu próximo nível começa no digital.</div>
      </motion.div>
      <motion.div className="hero-art" style={{ y: reduce ? 0 : y }} initial={{ opacity: 0, rotate: 3, x: 30 }} animate={{ opacity: 1, rotate: 0, x: 0 }} transition={{ duration: 1, delay: .15 }}>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="art-coordinate">NG / DIGITAL EXPERIENCES</span>
        <div className="floating-label top"><Code2 size={16}/><span>Ideia → experiência</span><i/></div>
        <div className="browser-mock main-mock"><div className="browser-bar"><span/><span/><span/><div>forma.studio / projeto conceito</div><ArrowUpRight size={12}/></div><img src={localAsset('images/forma.svg')} alt="Projeto conceito Forma Studio: site editorial de arquitetura em tons de areia" width="1200" height="820" fetchPriority="high"/></div>
        <div className="mobile-mock"><div className="phone-speaker"/><div className="phone-top">nativa<span>↗</span></div><div className="phone-content"><small>BELEZA ESSENCIAL</small><h3>Naturalmente<br/><em>você.</em></h3><div className="bottle"><span>NATIVA<br/><small>ESSENTIAL OIL</small></span></div><span className="phone-cta">Descubra o essencial ↗</span></div></div>
        <div className="floating-label bottom"><span className="spark-box"><Sparkles size={20}/></span><span>Design com intenção.<small>Código com propósito.</small></span></div>
        <span className="art-caption">ESTUDOS VISUAIS • PROJETOS CONCEITO</span>
      </motion.div>
    </div>
    <div className="hero-bottom container"><a href="#sobre"><ArrowDown size={16}/> Role para descobrir</a><span>FEITO PARA O SEU PRÓXIMO PASSO <span className="plus">+</span></span></div>
  </section>;
}
