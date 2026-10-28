// Preencha os contatos reais antes de publicar. Não use o número de exemplo.
export const siteConfig = {
  whatsapp: '', // DDI + DDD + número, apenas dígitos: ex. 55DDNUMERO
  email: 'nextgatorbrasil@gmail.com',
  social: { instagram: '', linkedin: '', behance: '' }, // URLs HTTPS completas
};
export const navItems = [
  ['inicio', 'Início'], ['sobre', 'Sobre nós'], ['servicos', 'Serviços'],
  ['processo', 'Como funciona'], ['portfolio', 'Portfólio'], ['contato', 'Contato'],
] as const;
export const localAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
