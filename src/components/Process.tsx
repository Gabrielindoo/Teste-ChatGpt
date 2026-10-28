import { MessageCircle, Route, PenTool, Code2, Rocket } from 'lucide-react';
import { useState } from 'react';
import { Reveal, SectionHeading } from './Shared';
const steps = [
  { icon: MessageCircle, title: 'Descoberta', text: 'Conversamos para entender seu negócio, suas necessidades e seus objetivos.', detail: 'Ouvimos sua ideia, conhecemos seu público e identificamos o que o projeto precisa resolver.' },
  { icon: Route, title: 'Planejamento', text: 'Definimos a estrutura, a estratégia e a direção visual do projeto.', detail: 'Organizamos páginas, prioridades, entregas e um cronograma adequado ao escopo aprovado.' },
  { icon: PenTool, title: 'Design', text: 'Criamos uma interface personalizada e focada na experiência do usuário.', detail: 'Apresentamos a direção visual e refinamos os detalhes nas etapas de revisão combinadas.' },
  { icon: Code2, title: 'Desenvolvimento', text: 'Transformamos o design em um site rápido, responsivo e funcional.', detail: 'Construímos os componentes e verificamos navegação, formulários e comportamento em diferentes telas.' },
  { icon: Rocket, title: 'Lançamento', text: 'Realizamos os testes finais, publicamos e orientamos sobre os próximos passos.', detail: 'Configuramos a publicação conforme o plano escolhido e entregamos orientações para continuidade.' },
];
export default function Process() {
  const [active, setActive] = useState(0);
  return <section id="processo" className="section container"><SectionHeading number="03" label="DO CONCEITO AO CLIQUE" title={<>Da primeira conversa<br/>ao seu site <span className="green">no ar.</span></>} text="Um processo colaborativo, com clareza em cada etapa."/><div className="timeline">{steps.map(({ icon: Icon, title, text, detail }, i) => <Reveal key={title} className={`step ${active === i ? 'selected' : ''}`} delay={i * .07}><button className="step-button" aria-expanded={active === i} aria-controls={`step-${i}`} onClick={() => setActive(i)}><span className="step-index">0{i + 1}</span><span className="step-dot"/><Icon size={23}/><h3>{title}</h3><span className="step-description">{text}</span></button><div id={`step-${i}`} className="step-extra" hidden={active !== i}>{detail}</div></Reveal>)}</div></section>;
}
