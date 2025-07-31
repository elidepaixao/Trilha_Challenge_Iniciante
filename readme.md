# Na Trilha do Dev - Landing Page

Uma landing page moderna e responsiva desenvolvida para a Na Trilha do Dev, com foco em conversão e experiência do usuário.

## Sobre o Projeto

Este projeto faz parte do **#TrilhaChallenge**, uma iniciativa para desenvolvedores iniciantes praticarem suas habilidades com projetos reais do mercado.

A landing page foi criada para promover uma mentoria gratuita para devs iniciantes, oferecendo:

- Direção clara na carreira
- Espaço para dúvidas
- Aprendizado prático com projetos reais

## Funcionalidades

### Página Principal (index.html)
- Design responsivo para todos os dispositivos
- Animações suaves nos cards e elementos
- Redirecionamento inteligente para página de mentoria
- Otimizações mobile com touch feedback
- Efeitos hover interativos

### Página de Mentoria (mentoria.html)
- Página de agradecimento pós-inscrição
- Links diretos para redes sociais
- Call-to-actions para Discord, LinkedIn, Instagram e WhatsApp
- Animações de entrada escalonadas
- Interface mobile-first

## Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| HTML5 | Estrutura semântica e acessível |
| CSS3 | Estilização moderna com Flexbox e Grid |
| JavaScript ES6+ | Interatividade e animações |
| Google Fonts | Tipografia (Roboto) |
| CSS Custom Properties | Variáveis para temas consistentes |

## Estrutura do Projeto

```
trilha-challenge/
├── index.html                 # Página principal
├── mentoria.html              # Página de mentoria  
├── main.js                    # JavaScript da página principal
├── mentoria.js                # JavaScript da página de mentoria
├── README.md                  # Documentação do projeto
├── styles/                    # Estilos da página principal
│   ├── global.css             # Variáveis e reset CSS
│   ├── sections.css           # Estilos das seções
│   ├── mq.css                 # Media queries responsivas
│   └── index.css              # Arquivo principal CSS
├── styles-mentoria/           # Estilos da página de mentoria
│   ├── global-mentoria.css    # Variáveis e reset CSS
│   ├── mentoria-page.css      # Estilos específicos
│   ├── mq-mentoria.css        # Media queries responsivas
│   └── mentoria.css           # Arquivo principal CSS
└── assets/                    # Recursos estáticos
    ├── images/                # Imagens do projeto
    └── icons/                 # Ícones SVG
```

## Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/elidepaixao/trilha-challenge.git

# Navegue até o diretório
cd trilha-challenge

# Abra com Live Server (VS Code) ou abra index.html no navegador
```

### Execução
1. Abra o arquivo `index.html` no navegador
2. Ou use a extensão Live Server do VS Code para desenvolvimento
3. Navegue pela landing page e teste as funcionalidades

## Responsividade

O projeto foi desenvolvido com abordagem Mobile-First e inclui breakpoints para:

| Dispositivo | Largura | Características |
|-------------|---------|-----------------|
| Mobile | até 480px | Layout em coluna, botões full-width |
| Tablet | até 768px | Grid adaptado, espaçamentos ajustados |
| Desktop | até 1200px | Layout padrão, hover effects |
| Large Desktop | 1200px+ | Espaçamentos expandidos, conteúdo centrado |

## Design System

### Cores
```css
:root {
  --bg-color-dark: #0f172a;       /* Fundo escuro */
  --bg-color-light: #1e293b;      /* Fundo claro */
  --bg-color-white: #f8fafc;      /* Branco */
  --text-color-light: #f1f5f9;    /* Texto claro */
  --text-color-dark: #1e293b;     /* Texto escuro */
  --text-color-green: #c9f31d;    /* Verde accent */
}
```

### Tipografia
```css
--h1: 700 2.5rem/1.2 'Roboto', sans-serif;
--h3: 600 1.5rem/1.3 'Roboto', sans-serif;
--h4: 600 1.25rem/1.4 'Roboto', sans-serif;
--text-md: 400 1rem/1.6 'Roboto', sans-serif;
--text-sm: 400 0.875rem/1.5 'Roboto', sans-serif;
```

## Performance

### Otimizações Implementadas
- CSS otimizado com custom properties
- JavaScript modular com IIFE patterns
- Imagens otimizadas (SVG para ícones)
- Google Fonts com preconnect
- Scripts no final do body para carregamento otimizado

### Métricas de Performance
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Mobile-friendly**: 100% responsivo

## Funcionalidades JavaScript

### Página Principal
```javascript
// Redirecionamento inteligente
function redirectToMentoria() {
    // Efeito visual + redirecionamento
}

// Animações dos cards
function animateCards() {
    // Entrada escalonada + hover effects
}

// Otimizações mobile
function mobileOptimizations() {
    // Touch feedback + performance
}
```

### Página de Mentoria
```javascript
// Configuração de redes sociais
const socialLinks = {
    discord: 'URL_DO_DISCORD',
    linkedin: 'URL_DO_LINKEDIN',
    instagram: 'https://www.instagram.com/natrilhadodev/',
    whatsapp: 'URL_DO_WHATSAPP'
};

// Animações de entrada
function animatePageLoad() {
    // Animações escalonadas e suaves
}
```

📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
<div align="center">

Elide Paixão

Desenvolvido com ❤️ no #TrilhaChallenge

</div>

🙏 Agradecimentos

Na Trilha do Dev pela iniciativa do challenge