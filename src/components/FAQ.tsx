import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading, Reveal } from './Shared';
const faqs = [
  ['Quanto custa criar um site?', 'O investimento depende do tipo de site, da quantidade de páginas, das funcionalidades e das integrações. Depois de entender seu projeto, definimos uma proposta com escopo e condições claros.'],
  ['Quanto tempo leva para desenvolver?', 'O prazo é definido após o planejamento. Complexidade, disponibilidade de conteúdo e etapas de aprovação influenciam o cronograma, que será combinado antes do início.'],
  ['Meu site funcionará no celular?', 'Sim. O desenvolvimento considera celular, tablet e computador, com layouts responsivos e verificação de navegação e leitura em diferentes tamanhos de tela.'],
  ['Posso solicitar alterações durante o projeto?', 'As revisões fazem parte do alinhamento do projeto. Quantidade de rodadas, etapas e mudanças de escopo são estabelecidas na proposta para manter clareza em todo o processo.'],
  ['Como funciona a hospedagem e o domínio?', 'O domínio é o endereço do site e a hospedagem é onde ele fica disponível. A escolha dos serviços, os custos e a responsabilidade por contratação e renovação são combinados no planejamento.'],
  ['Posso atualizar meu site depois da entrega?', 'Sim. A forma de atualização depende da solução escolhida: edição do código, painel de conteúdo ou manutenção contratada. Essa necessidade deve ser alinhada para escolher a estrutura adequada.'],
];
export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return <section className="section section-tinted" id="faq"><div className="container faq-layout"><div><SectionHeading number="06" label="SEM PONTAS SOLTAS" title={<>Tudo o que você<br/>precisa saber.</>} text="Boas parcerias começam com boas conversas."/><a className="text-link" href="#contato">Ficou com outra dúvida? Vamos conversar ↗</a></div><Reveal className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${active === i ? 'expanded' : ''}`} key={q}><h3><button aria-expanded={active === i} aria-controls={`answer-${i}`} id={`question-${i}`} onClick={() => setActive(active === i ? null : i)}><span>{q}</span>{active === i ? <Minus size={18}/> : <Plus size={18}/>}</button></h3><div className="faq-answer" id={`answer-${i}`} role="region" aria-labelledby={`question-${i}`} hidden={active !== i}><p>{a}</p></div></div>)}</Reveal></div></section>;
}
