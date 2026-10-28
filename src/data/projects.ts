import { localAsset } from './site';
export interface Project { id: string; title: string; category: string; description: string; image: string; url: string; technologies: string[]; concept: boolean; accent: string; }
export const projects: Project[] = [
  { id: 'forma', title: 'Forma Studio', category: 'Arquitetura & interiores', description: 'Uma presença editorial que dá espaço à arquitetura, à matéria e às boas ideias.', image: localAsset('images/forma.svg'), url: localAsset('concepts/forma.html'), technologies: ['HTML', 'CSS', 'JavaScript'], concept: true, accent: '#c4b294' },
  { id: 'nativa', title: 'Nativa Botanicals', category: 'Site institucional de marca', description: 'Design orgânico e uma jornada de descoberta para uma marca de cuidados naturais.', image: localAsset('images/nativa.svg'), url: localAsset('concepts/nativa.html'), technologies: ['HTML', 'CSS', 'JavaScript'], concept: true, accent: '#c8dca0' },
  { id: 'orbit', title: 'Orbit Finance', category: 'Landing page de produto', description: 'Uma interface precisa que transforma informação complexa em uma experiência simples.', image: localAsset('images/orbit.svg'), url: localAsset('concepts/orbit.html'), technologies: ['HTML', 'CSS', 'JavaScript'], concept: true, accent: '#a5a0ff' },
];
