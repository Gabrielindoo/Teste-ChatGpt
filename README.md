# NextGator — Agência Digital

Site institucional completo em **React + Vite + TypeScript + Tailwind CSS**, com Motion, Lucide React e Embla Carousel. Interface em português, responsiva e com preferência de movimento reduzido respeitada.

## Instalação e execução

1. Instale **Node.js 22.12 ou superior** (inclui npm).
2. Extraia `NextGator.zip` e abra a pasta **NextGator** no VS Code.
3. No terminal dessa pasta, execute:

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite, normalmente **http://localhost:5173**. Se a porta estiver ocupada, o Vite escolherá outra. Não abra `index.html` com duplo clique: o código TypeScript precisa do Vite.

```bash
npm run typecheck  # Verificação de tipos
npm run build      # Verificação de tipos + produção em dist/
npm run preview    # Servir o build, normalmente http://localhost:4173
```

A instalação exige internet para baixar dependências públicas. Depois, a interface e os projetos conceito funcionam localmente sem API, conta ou serviço pago. Fontes e imagens são locais. Links externos de contato precisam de internet quando configurados.

O projeto utiliza a distribuição WebAssembly do esbuild através de um alias npm, para evitar restrições de execução/leitura do binário nativo em ambientes Windows gerenciados. Isso não altera o site gerado; a primeira preparação de dependências pode levar um pouco mais de tempo. Mantenha o alias e `overrides` do `package.json` juntos. A configuração Vite usa o carregador `runner`, compatível com o Vite incluído.

## Organização

```text
NextGator/
├── public/
│   ├── concepts/         # Três páginas conceito navegáveis, sem backend
│   ├── images/           # Mockups SVG originais e editáveis
│   └── images/nextgator-logo.png # Logo fornecida pelo proprietário
├── src/
│   ├── assets/
│   ├── components/       # Header, Hero, About, Services, Process,
│   │                    # Portfolio, Differentials, FAQ, Contact, Footer, Shared
│   ├── data/
│   │   ├── projects.ts   # Conteúdo do portfólio
│   │   └── site.ts       # Contatos e navegação
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
├── vercel.json
└── README.md
```

## Personalização

### Identidade e conteúdo

- **Cores, espaços, layouts e animações:** `src/index.css`. Os tokens Tailwind estão em `tailwind.config.js`.
- **Logo:** componente `Logo` em `src/components/Shared.tsx`; imagem original em `public/images/nextgator-logo.png`, também usada como favicon.
- **Textos:** componentes em `src/components/`.
- **SEO:** título, descrição e Open Graph em `index.html`. Após escolher o domínio, adicione URL canônica e `og:url`; para compartilhamento, adicione uma imagem social absoluta do seu domínio. Nenhum domínio foi inventado.
- **Fontes:** importadas em `src/main.tsx` por `@fontsource`; os arquivos necessários são incluídos no build.

### Contato e redes sociais

Edite `src/data/site.ts`. Os contatos começam vazios deliberadamente. Preencha com dados reais:

```ts
export const siteConfig = {
  whatsapp: '', // número real com DDI + DDD, somente dígitos
  email: '',    // endereço comercial real
  social: { instagram: '', linkedin: '', behance: '' }, // URLs HTTPS completas
};
```

Sem WhatsApp configurado, o CTA leva ao formulário, que valida nome, e-mail, tipo de projeto e mensagem e prepara um texto que pode ser copiado. **Isso não envia dados nem mostra confirmação falsa de envio.**

Com WhatsApp configurado, o visitante revisa a mensagem e clica em **Abrir WhatsApp**. O texto personalizado é codificado na URL; o envio precisa ser confirmado no WhatsApp. O e-mail configurado disponibiliza `mailto:`, que depende de um aplicativo de e-mail no dispositivo. Links de redes vazios não são exibidos.

Não há backend, armazenamento de leads, analytics ou envio automático. Para envio real por formulário, conecte futuramente um endpoint de sua escolha e só apresente sucesso após confirmação real do servidor. Nunca coloque chaves privadas no frontend.

### Portfólio

Edite `src/data/projects.ts`. Cada projeto aceita:

```ts
{
  id: 'identificador-unico',
  title: 'Nome do projeto',
  category: 'Categoria',
  description: 'Descrição verdadeira do trabalho.',
  image: localAsset('images/minha-imagem.webp'),
  url: 'https://endereco-real-do-projeto.com',
  technologies: ['React'],
  concept: false,
  accent: '#00ff88',
}
```

Use apenas tecnologias conhecidas e URLs reais. Para estudos autorais, mantenha `concept: true`. Os três projetos iniciais são explicitamente fictícios; o botão **Visualizar projeto** abre a página conceito local em uma nova aba. Forma, Nativa e Orbit não são clientes reais. Nativa é um site institucional de marca e Orbit não oferece serviços financeiros; os valores ilustrados são fictícios.

O carrossel suporta setas, pontos, arraste com mouse, swipe e teclas esquerda/direita quando a região está focada. Não tem reprodução automática, preservando a leitura.

## Publicação

### Netlify

Opção 1: execute `npm run build` e envie a pasta **dist** na área de deploy manual da Netlify.

Opção 2: envie o código para seu repositório e importe-o na Netlify. Use **npm run build** como comando e **dist** como diretório de publicação. O `netlify.toml` incluído já define isso. Se o repositório contiver uma pasta pai, selecione NextGator como diretório-base.

### Vercel

Importe o repositório, selecione a pasta NextGator como raiz quando necessário, framework **Vite**, comando **npm run build** e saída **dist**. O `vercel.json` inclui essas configurações. Não são necessárias variáveis de ambiente.

### Hospedagem estática

Publique o conteúdo de `dist/`. O Vite usa caminhos relativos (`base: './'`), permitindo também publicação em subpastas. A navegação é por âncoras; não há necessidade de redirecionamento de SPA para as páginas conceito.

## Acessibilidade e comportamento

- HTML semântico, link para pular ao conteúdo e foco visível.
- Menu mobile com estado expandido, fechamento por Escape e ao selecionar uma seção.
- FAQ com botões, `aria-expanded`, regiões identificadas e respostas ocultas fora da seleção.
- Formulário com rótulos, validação nativa e feedback em região viva.
- Imagens com descrições, dimensões explícitas e lazy loading no portfólio.
- Animações decorativas desativadas com `prefers-reduced-motion`; Motion respeita a preferência do sistema.
- Sem depoimentos, números de clientes, resultados comerciais ou contatos inventados.

A logo PNG foi fornecida pelo proprietário. Os mockups SVG e as ilustrações de dispositivos foram criados para este projeto, sem dependência de bancos pagos. As dependências e fontes mantêm suas próprias licenças, incluídas pelos respectivos pacotes.
