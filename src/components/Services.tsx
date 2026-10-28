import { ArrowUpRight, PanelsTopLeft, MousePointer2, RefreshCcw, CodeXml, Wrench } from 'lucide-react';
import { SectionHeading, Reveal } from './Shared';
const services = [
  { icon: PanelsTopLeft, title: 'Sites institucionais', text: 'Uma presença profissional que traduz sua marca, apresenta seu negócio e cria conexões.', detail: 'Estrutura de conteúdo, navegação clara e páginas adaptadas aos objetivos da empresa.' },
  { icon: MousePointer2, title: 'Landing pages', text: 'Páginas estratégicas para apresentar uma oferta e transformar atenção em ação.', detail: 'Hierarquia de informação e chamadas para ação alinhadas à sua campanha.' },
  { icon: RefreshCcw, title: 'Redesign de sites', text: 'Um novo olhar para transformar seu site em uma experiência atual e relevante.', detail: 'Revisão de navegação, identidade visual e adaptação para dispositivos móveis.' },
  { icon: CodeXml, title: 'Desenvolvimento sob medida', text: 'Soluções que começam nas suas necessidades, sem limitar as suas ideias.', detail: 'Funcionalidades e integrações planejadas de acordo com a viabilidade e os objetivos do projeto.' },
  { icon: Wrench, title: 'Manutenção e otimização', text: 'Cuidado contínuo para manter sua presença digital em movimento.', detail: 'Atualizações, ajustes e melhorias de desempenho com escopo e frequência combinados.' },
];
export default function Services() {
  return <section id="servicos" className="section section-tinted"><div className="container"><div className="heading-row"><SectionHeading number="02" label="O QUE FAZEMOS" title={<>Soluções digitais para levar<br/>sua marca <span className="green">mais longe.</span></>}/><p>O próximo passo do seu negócio<br/>começa com a solução certa.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, text, detail }, i) => <Reveal className="service-card" key={title} delay={i % 3 * .06}><div className="service-top"><Icon size={27}/><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p><details><summary>Saiba mais <ArrowUpRight size={17}/></summary><div className="service-detail"><p>{detail}</p><a href="#contato" className="text-link">Conversar sobre este serviço <ArrowUpRight size={15}/></a></div></details></Reveal>)}</div></div></section>;
}
