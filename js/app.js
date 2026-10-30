/**
 * Viagens Orlando - Main Application
 * Entry point for all JavaScript functionality
 */

// ========================================
// Data for tickets, hotels, packages, blog
// ========================================

const ticketsData = [
  {
    id: 'disney-4-park-magic',
    parkName: '4-Park Magic Ticket',
    category: 'disney',
    image: 'images/tickets/4-park-magic.jpg',
    description: 'Experimente 4 dias de magia e emoção nos parques temáticos do Walt Disney World: uma visita por dia a cada um dos 4 parques.',
    price: 520.37,
    currency: 'USD',
    priceFrom: true,
    features: [
      'Magic Kingdom, EPCOT, Hollywood Studios e Animal Kingdom (1 dia em cada)',
      'Não permite repetir parque no mesmo ingresso',
      'Válido por 6 dias após a data do primeiro uso',
      'Estacionamento não incluído',
      'Valor à vista no Pix, com desconto'
    ]
  },
  {
    id: 'disney-2-day-theme-base',
    parkName: '2 Day Theme Base Ticket',
    category: 'disney',
    image: 'https://admin.suncoastusa.com.br//ImagesForWeb/Parques/Carrosel/Wdw2Dias/Wdw2dias2Parques_3.jpg',
    description: 'Ingresso de 2 dias para 2 parques do Walt Disney World: uma visita por dia ao EPCOT e ao Disney’s Animal Kingdom, sujeito à disponibilidade de datas.',
    price: 221.71,
    currency: 'USD',
    priceFrom: true,
    promo: true,
    features: [
      'Uma entrada por dia no EPCOT e no Disney’s Animal Kingdom',
      'Não inclui o Magic Kingdom nem o Disney’s Hollywood Studios',
      'Uso sujeito à janela de datas e disponibilidade',
      'Ingresso não reembolsável e estacionamento não incluído'
    ]
  },
  {
    id: 'disney-mvmcp',
    parkName: "Mickey's Very Merry Christmas Party",
    category: 'disney',
    image: 'https://images.unsplash.com/photo-1607245343572-e045934f85c9?w=600',
    description: 'Caminhe pela Main Street, U.S.A. sob "neve", aprecie as decorações natalinas do Magic Kingdom e aproveite doces e bebidas festivas inclusos no ingresso, em noites selecionadas.',
    price: 190.40,
    currency: 'USD',
    priceFrom: true,
    promo: true,
    features: [
      'Cenas de neve na Main Street, U.S.A.',
      'Decoração sazonal: laços, guirlandas, azevinho e luzes pelo Parque',
      'Pontos fotográficos temáticos de fim de ano',
      'Doces e bebidas festivas inclusos, sem custo adicional',
      'Noites selecionadas entre 8 de novembro e 21 de dezembro de 2026'
    ]
  },
  {
    id: 'universal-studios',
    parkName: 'Universal Studios',
    category: 'universal',
    image: 'https://images.unsplash.com/photo-1621473909625-6a62ef5bedf7?w=600',
    description: 'Aventuras cinematográficas e o mundo de Harry Potter.',
    price: 164.99,
    currency: 'USD',
    priceFrom: true,
    features: ['Wizarding World', 'Transformers', 'Minions']
  },
  {
    id: 'universal-hhn',
    parkName: 'Halloween Horror Nights',
    category: 'universal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Halloween-Horror-Nights-Orlando-29.jpg/500px-Halloween-Horror-Nights-Orlando-29.jpg',
    description: 'Noites selecionadas de 28 de agosto a 1º de novembro no Universal Studios Florida, com 10 casas mal-assombradas inéditas, scare zones temáticas e shows aterrorizantes. Ingresso separado do acesso regular aos parques. Não recomendado para menores de 13 anos.',
    price: 102.85,
    currency: 'USD',
    priceFrom: true,
    promo: true,
    features: [
      '10 casas mal-assombradas inéditas (Hellraiser, Stranger Things 5, Sinners, Jack and Oddfellow: Chaos and Control e mais)',
      'Scare zones temáticas e experiências de rua',
      'Shows aterrorizantes exclusivos do evento',
      'Ingresso separado do acesso regular ao parque',
      'Classificação indicativa: não recomendado para menores de 13 anos'
    ]
  },
  {
    id: 'universal-park-to-park-promo',
    parkName: 'Park-to-Park + 2 Dias Grátis',
    category: 'universal',
    image: 'https://images.unsplash.com/photo-1754057174096-8724acf9e2d8?w=600',
    description: 'Ingresso promocional 3 dias Park-to-Park: entrada no mesmo dia em Universal Studios Florida, Islands of Adventure e Epic Universe, com 2 dias extras grátis.',
    price: 465.51,
    currency: 'USD',
    priceFrom: true,
    promo: true,
    features: [
      'Universal Studios Florida, Islands of Adventure e Epic Universe',
      'Acesso Park-to-Park (troque de parque no mesmo dia)',
      '3 dias pagos + 2 dias grátis',
      'Valor à vista no Pix, com desconto',
      'Período de vendas: 30 de abril a 16 de dezembro de 2026',
      'Período de uso: 30 de abril de 2026 a 24 de abril de 2027',
      'Blackout dates: 9 a 12/out/2026, 18/dez/2026 a 3/jan/2027, 5 a 19/fev/2027 e 20 a 30/mar/2027',
      'Também disponível com acesso ao Volcano Bay (consulte-nos)'
    ]
  },
  {
    id: 'universal-epic-universe',
    parkName: 'Epic Universe',
    category: 'universal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Chronos_Tower_Front_Epic_Universe.jpg/500px-Chronos_Tower_Front_Epic_Universe.jpg',
    description: 'O mais novo parque da Universal, com Super Nintendo World, Como Treinar o Seu Dragão e o novo mundo de Harry Potter.',
    price: 164.99,
    currency: 'USD',
    priceFrom: true,
    features: ['Super Nintendo World', 'How to Train Your Dragon - Isle of Berk', 'Harry Potter - Ministry of Magic', 'Dark Universe']
  }
];

// Removidos temporariamente da vitrine (ainda salvos, só não aparecem no site).
// Para reativar, mova o objeto de volta para dentro de ticketsData.
const archivedTicketsData = [
  {
    id: 'universal-orlando-all-parks',
    parkName: 'Universal Orlando All Parks Ticket',
    category: 'universal',
    image: 'https://images.unsplash.com/photo-1621473909625-6a62ef5bedf7?w=600',
    description: 'Acesso aos quatro parques do Universal Orlando durante 14 dias consecutivos, a partir da data selecionada.',
    price: 517.34,
    currency: 'USD',
    priceFrom: false,
    features: [
      'Universal Studios Florida, Islands of Adventure, Epic Universe e Volcano Bay',
      '14 dias consecutivos de uso, de 1 a 14 de setembro de 2026',
      'Válido somente para o mesmo hóspede, com escaneamento biométrico na entrada',
      'Não reembolsável, não transferível e sem aproveitamento de dias não utilizados',
      'Não inclui eventos com ingresso separado, CityWalk, estacionamento ou descontos'
    ]
  },
  {
    id: 'disney-mnsshp',
    parkName: "Mickey's Not So Scary Halloween Party",
    category: 'disney',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Magic_Kingdom_Halloween_Oct_2019.jpg/500px-Magic_Kingdom_Halloween_Oct_2019.jpg',
    description: 'Entre no Magic Kingdom a partir das 16h e aproveite a festa temática de Halloween, com fogos especiais, personagens Disney à noite e muitos doces. Evento recomendado para todas as idades.',
    price: 151.39,
    currency: 'USD',
    priceFrom: true,
    promo: true,
    features: [
      'Acesso ao Magic Kingdom a partir das 16h',
      'Festa de Halloween das 19h às 23h59',
      'Fogos de artifício especiais e desfile temático',
      'Datas selecionadas de agosto a outubro de 2026',
      'Sujeito à disponibilidade, sem reembolso após a emissão'
    ]
  },
  {
    id: 'disney-magic-kingdom',
    parkName: 'Magic Kingdom',
    category: 'disney',
    image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600',
    description: 'O parque mais mágico do mundo com o icônico Castelo da Cinderela.',
    price: 200,
    currency: 'USD',
    priceFrom: true,
    features: ['Acesso ao parque', 'Atrações clássicas', 'Shows e paradas']
  },
  {
    id: 'disney-hollywood',
    parkName: 'Hollywood Studios',
    category: 'disney',
    image: 'https://images.unsplash.com/photo-1489368066883-369c64aa01bd?w=600',
    description: 'Viva a magia do cinema com Star Wars e Toy Story Land.',
    price: 231.85,
    currency: 'USD',
    priceFrom: true,
    features: ['Star Wars Galaxy Edge', 'Toy Story Land', 'Tower of Terror']
  },
  {
    id: 'disney-epcot',
    parkName: 'EPCOT',
    category: 'disney',
    image: 'https://images.unsplash.com/photo-1673738930649-4e72ecfcf9f4?w=600',
    description: 'Explore o futuro e culturas do mundo todo.',
    price: 214.85,
    currency: 'USD',
    priceFrom: true,
    features: ['World Showcase', 'Future World', 'Guardians of the Galaxy']
  },
  {
    id: 'disney-animal-kingdom',
    parkName: 'Animal Kingdom',
    category: 'disney',
    image: 'https://images.unsplash.com/photo-1710097729746-10f49b6c0b3c?w=600',
    description: 'Natureza, safári e a icônica Árvore da Vida em um parque temático único.',
    price: 215,
    currency: 'USD',
    priceFrom: true,
    features: ['Safári Kilimanjaro', 'Avatar Flight of Passage', 'Árvore da Vida']
  }
];


const ticketsDataContinued = [
  {
    id: 'universal-islands',
    parkName: 'Islands of Adventure',
    category: 'universal',
    image: 'https://images.unsplash.com/photo-1544591518-5d1fdb9f5b6d?w=600',
    description: 'Ilhas temáticas com montanhas-russas incríveis.',
    price: 164.99,
    currency: 'USD',
    priceFrom: true,
    features: ['Hogwarts Express', 'Velocicoaster', 'Jurassic World']
  },
  {
    id: 'seaworld',
    parkName: 'SeaWorld Orlando',
    category: 'seaworld',
    image: 'https://images.unsplash.com/photo-1721141877645-4404b8b241f8?w=600',
    description: 'Vida marinha, shows e montanhas-russas emocionantes.',
    price: 93.24,
    currency: 'USD',
    priceFrom: true,
    features: ['Shows com animais', 'Mako', 'Kraken']
  },
  {
    id: 'busch-gardens',
    parkName: 'Busch Gardens',
    category: 'other',
    image: 'https://images.unsplash.com/photo-1706043904134-425b12ad8fd4?w=600',
    description: 'Parque temático africano com as melhores montanhas-russas.',
    price: 94.06,
    currency: 'USD',
    priceFrom: true,
    features: ['SheiKra', 'Cheetah Hunt', 'Safari']
  },
  {
    id: 'legoland',
    parkName: 'LEGOLAND Florida',
    category: 'other',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    description: 'Diversão para toda família no mundo LEGO.',
    price: 97.22,
    currency: 'USD',
    priceFrom: true,
    features: ['Miniland USA', 'LEGO Movie World', 'Water Park']
  }
];

// Merge ticket data
ticketsData.push(...ticketsDataContinued);

const hotelsData = [
  {
    id: 'hotel-1',
    name: 'Disney Contemporary Resort',
    type: 'resort',
    location: 'Walt Disney World',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
    priceRange: { min: 450, max: 800 },
    amenities: ['Piscina', 'Restaurante', 'Monorail']
  },
  {
    id: 'hotel-2',
    name: 'Universal Cabana Bay',
    type: 'hotel',
    location: 'Universal Orlando',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600',
    priceRange: { min: 180, max: 350 },
    amenities: ['Piscina', 'Lazy River', 'Transporte']
  },
  {
    id: 'hotel-3',
    name: 'Casa em Kissimmee',
    type: 'house',
    location: 'Kissimmee, FL',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600',
    priceRange: { min: 200, max: 400 },
    amenities: ['Piscina privativa', 'Cozinha', '4 quartos']
  },
  {
    id: 'hotel-4',
    name: "Disney's Art of Animation Resort",
    type: 'resort',
    location: 'Walt Disney World',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Art_of_Animation_Pool.jpg/500px-Art_of_Animation_Pool.jpg',
    amenities: ['Suítes temáticas em família', 'Piscina Finding Nemo', 'Transporte Disney']
  },
  {
    id: 'hotel-5',
    name: "Universal's Endless Summer Resort - Dockside Inn and Suites",
    type: 'hotel',
    location: 'Universal Orlando',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Universal%27s_Endless_Summer_Resorts_panorama.png/500px-Universal%27s_Endless_Summer_Resorts_panorama.png",
    amenities: ['2 piscinas', 'Early Park Admission', 'Praça de alimentação Pier 8']
  }
];

const packagesData = [
  {
    id: 'pacote-all-star-sports-jul-2027',
    name: "Disney's All-Star Sports Resort",
    title: 'Hotel + Ingressos',
    image: 'images/packages/all-star-sports-resort.jpg',
    price: 2578.05,
    currency: 'USD',
    priceFrom: true,
    priceNote: 'Por pessoa, base 2 adultos',
    description: 'Hospedagem no Disney\'s All-Star Sports Resort com ingressos de 4 dias para os parques Disney.',
    features: [
      "Disney's All-Star Sports Resort, quarto Preferred Room",
      'Check-in de 1º a 8 de julho de 2027',
      'Ingresso de 4 dias com 1 parque por dia',
      'Ingressos válidos por 7 dias consecutivos a partir de 1º de julho de 2027',
      'Oferta para estadias de 4 a 14 noites',
      'Reservas de 10 de setembro de 2026 a 1º de fevereiro de 2027',
      'Também disponível com plano de refeições Quick-Service (consulte-nos)'
    ]
  }
];


const blogData = [
  {
    id: 'b1',
    title: 'Ingresso Disney Parcelado: Como Funciona e Vale a Pena?',
    image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600',
    excerpt: 'Entenda como funciona o parcelamento, se vale a pena e como economizar no ingresso.',
    date: '10 Ago 2026',
    category: 'Dicas',
    url: 'blog-ingresso-disney-parcelado.html'
  },
  {
    id: 'b2',
    title: 'Universal ou Disney: Qual Escolher na Primeira Viagem?',
    image: 'https://images.unsplash.com/photo-1621473909625-6a62ef5bedf7?w=600',
    excerpt: 'Compare os parques e descubra o roteiro ideal para a sua família.',
    date: '10 Ago 2026',
    category: 'Dicas',
    url: 'blog-universal-ou-disney.html'
  },
  {
    id: 'b3',
    title: 'Aluguel de Carro em Orlando: Vale a Pena? Guia Completo',
    image: 'https://images.unsplash.com/photo-1673019608185-2ceb412ade18?w=600',
    excerpt: 'Prós, contras, seguro, pedágio e taxas escondidas antes de reservar.',
    date: '10 Ago 2026',
    category: 'Dicas',
    url: 'blog-aluguel-carro-orlando.html'
  },
  {
    id: 'b4',
    title: 'Documentos para Viajar a Orlando: Guia para Brasileiros',
    image: 'https://images.unsplash.com/photo-1454496406107-dc34337da8d6?w=600',
    excerpt: 'Passaporte, visto americano e mais: o que você precisa antes de embarcar.',
    date: '10 Ago 2026',
    category: 'Dicas',
    url: 'blog-documentos-viagem-orlando.html'
  },
  {
    id: 'b5',
    title: 'Melhores Comidas do Volcano Bay',
    image: 'images/blog/coco-no-shrimp.jpg',
    excerpt: 'Sabores havaianos para fugir da comida tradicional de parque.',
    date: '11 Ago 2026',
    category: 'Dicas',
    url: 'blog-comidas-volcano-bay.html'
  },
  {
    id: 'b7',
    title: "Mickey's Very Merry Christmas Party 2026",
    image: 'images/blog/natal-main-street-hero.jpg',
    excerpt: 'Datas, o que está incluso e se vale a pena a festa de Natal do Magic Kingdom.',
    date: '27 Out 2026',
    category: 'Dicas',
    url: 'blog-mickeys-christmas-party.html'
  },
  {
    id: 'b6',
    title: 'Melhores Comidas do Epic Universe',
    image: 'images/blog/epic-universe-parque.jpg',
    excerpt: 'Do Ministério da Magia ao mundo do Mario: o que comer em cada área.',
    date: '23 Ago 2026',
    category: 'Dicas',
    url: 'blog-comidas-epic-universe.html'
  }
];


// ========================================
// WhatsApp Configuration
// ========================================

const WHATSAPP_NUMBER = '5511983688641';

function buildWhatsAppUrl(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

function openWhatsApp(message, method = 'whatsapp') {
  const url = buildWhatsAppUrl(message);
  trackEvent('generate_lead', { method });
  window.open(url, '_blank', 'noopener,noreferrer');
}

function trackEvent(eventName, params) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

// ========================================
// DOM Elements
// ========================================

const DOM = {
  header: document.getElementById('header'),
  navToggle: document.getElementById('nav-toggle'),
  navMenu: document.getElementById('nav-menu'),
  ticketsGrid: document.getElementById('tickets-grid'),
  hotelsWrapper: document.getElementById('hotels-wrapper'),
  packagesGrid: document.getElementById('packages-grid'),
  blogGrid: document.getElementById('blog-grid'),
  modal: document.getElementById('modal'),
  modalBody: document.getElementById('modal-body'),
  pwaBanner: document.getElementById('pwa-banner'),
  pwaInstallBtn: document.getElementById('pwa-install-btn'),
  pwaCloseBtn: document.getElementById('pwa-close')
};

// ========================================
// Navigation Functions
// ========================================

function initNavigation() {
  const { header, navToggle, navMenu } = DOM;
  
  // Mobile menu toggle
  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
  });
  
  // Close menu on link click
  navMenu?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const threshold = 100;
    
    if (scrollY > threshold) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}


// ========================================
// Hero Animations (GSAP + Typed.js)
// ========================================

function initHeroAnimations() {
  // GSAP Timeline for hero entrance
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    const heroTimeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => gsap.set('.hero-cta', { clearProps: 'opacity' })
    });
    
    heroTimeline
      .from('.hero-bg', { scale: 1.2, duration: 1.5 })
      .from('.hero-title', { y: 100, opacity: 0, duration: 1 }, '-=1')
      .from('.hero-subtitle', { y: 50, opacity: 0, duration: 0.8 }, '-=0.5')
      // Fade only: the CTA's CSS pulse animation also drives transform, and a
      // GSAP scale tween on top of it left the button stuck at opacity 0
      .fromTo('.hero-cta', { opacity: 0 }, { opacity: 1, duration: 0.5, clearProps: 'opacity' }, '-=0.3');
    
    // Parallax effect on hero background
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }
  
  // Typed.js effect
  if (typeof Typed !== 'undefined') {
    new Typed('#typed-text', {
      strings: [
        'Ingressos para Disney e Universal',
        'Hospedagem com os melhores preços',
        'Aluguel de carros sem taxas',
        'Atendimento personalizado 24h'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '✨'
    });
  }
}

// ========================================
// Card Rendering Functions
// ========================================

function formatPrice(price, currency = 'BRL') {
  return price.toLocaleString('pt-BR', { style: 'currency', currency });
}

function buildTicketWhatsAppMessage(ticket) {
  return `Olá! Tenho interesse em ingressos para o *${ticket.parkName}*.\n\n` +
    `📍 Categoria: ${ticket.category.toUpperCase()}\n` +
    `💰 Preço: ${ticket.priceFrom ? 'a partir de ' : ''}${formatPrice(ticket.price, ticket.currency || 'BRL')}${ticket.currency === 'USD' ? ' (sem taxas)' : ''}\n\n` +
    `Gostaria de mais informações sobre disponibilidade e formas de pagamento.`;
}

function buildPackageWhatsAppMessage(pkg) {
  return `Olá! Tenho interesse no pacote *${pkg.title}* no *${pkg.name}*.\n\n` +
    `💰 Valor: ${pkg.priceFrom ? 'a partir de ' : ''}${formatPrice(pkg.price, pkg.currency || 'BRL')} (${pkg.priceNote.toLowerCase()})\n` +
    `📅 Check-in de 1º a 8 de julho de 2027\n` +
    `🎟️ Ingresso de 4 dias com 1 parque por dia\n\n` +
    `Gostaria de mais informações sobre disponibilidade e formas de pagamento.`;
}

function generateSrcset(baseUrl) {
  const widths = [300, 600, 900];
  return widths.map(w => `${baseUrl.replace('w=600', `w=${w}`)} ${w}w`).join(', ');
}

function renderTicketCard(ticket) {
  const srcset = generateSrcset(ticket.image);
  
  return `
    <div class="ticket-card-wrapper">
      <article class="ticket-card card-glow" data-id="${ticket.id}" data-category="${ticket.category}">
        <img
          src="${ticket.image}"
          srcset="${srcset}"
          sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
          alt="${ticket.parkName}"
          class="ticket-card-image"
          loading="lazy"
        >
        <div class="ticket-card-overlay"></div>
        ${ticket.promo ? '<span class="ticket-card-promo">Promoção</span>' : ''}
        <div class="ticket-card-content">
          <span class="ticket-card-category">${ticket.category}</span>
          <h3 class="ticket-card-title">${ticket.parkName}</h3>
          <p class="ticket-card-price"><span>${ticket.priceFrom ? 'a partir de' : ''}</span> ${formatPrice(ticket.price, ticket.currency || 'BRL')}</p>
          <p class="ticket-card-price-note">Valores sem taxas</p>
        </div>
      </article>
      <button class="ticket-whatsapp-btn" data-whatsapp-id="${ticket.id}">
        <i class="fab fa-whatsapp"></i> Falar no WhatsApp
      </button>
    </div>
  `;
}

function renderPackageCard(pkg) {
  return `
    <div class="ticket-card-wrapper">
      <article class="ticket-card card-glow" data-id="${pkg.id}">
        <img
          src="${pkg.image}"
          alt="${pkg.name}"
          class="ticket-card-image"
          loading="lazy"
        >
        <div class="ticket-card-overlay"></div>
        <span class="ticket-card-promo">Oferta especial</span>
        <div class="ticket-card-content">
          <span class="ticket-card-category">${pkg.title}</span>
          <h3 class="ticket-card-title">${pkg.name}</h3>
          <p class="ticket-card-price"><span>${pkg.priceFrom ? 'a partir de' : ''}</span> ${formatPrice(pkg.price, pkg.currency || 'BRL')}</p>
          <p class="ticket-card-price-note">${pkg.priceNote}</p>
        </div>
      </article>
      <button class="ticket-whatsapp-btn" data-whatsapp-id="${pkg.id}">
        <i class="fab fa-whatsapp"></i> Falar no WhatsApp
      </button>
    </div>
  `;
}

function renderHotelCard(hotel) {
  const srcset = generateSrcset(hotel.image);
  
  return `
    <div class="swiper-slide">
      <article class="hotel-card" data-id="${hotel.id}" data-type="${hotel.type}">
        <img 
          src="${hotel.image}" 
          srcset="${srcset}"
          sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
          alt="${hotel.name}" 
          class="hotel-card-image" 
          loading="lazy"
        >
        <div class="hotel-card-content">
          <span class="hotel-card-type">${hotel.type}</span>
          <h3 class="hotel-card-name">${hotel.name}</h3>
          <p class="hotel-card-location"><i class="fas fa-map-marker-alt"></i>${hotel.location}</p>
        </div>
      </article>
    </div>
  `;
}



function renderBlogCard(post) {
  const srcset = generateSrcset(post.image);
  const tag = post.url ? 'a' : 'article';
  const hrefAttr = post.url ? `href="${post.url}"` : '';

  return `
    <${tag} class="blog-card" data-aos="fade-up" ${hrefAttr}>
      <img
        src="${post.image}"
        srcset="${srcset}"
        sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
        alt="${post.title}"
        class="blog-card-image"
        loading="lazy"
      >
      <div class="blog-card-content">
        <span class="blog-card-category">${post.category}</span>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <p class="blog-card-meta"><i class="far fa-calendar"></i> ${post.date}</p>
      </div>
    </${tag}>
  `;
}

// ========================================
// Render All Content
// ========================================

function renderTickets(filter = 'all') {
  const { ticketsGrid } = DOM;
  if (!ticketsGrid) return;
  
  const filteredTickets = filter === 'all' 
    ? ticketsData 
    : ticketsData.filter(t => t.category === filter);
  
  ticketsGrid.innerHTML = filteredTickets.map(renderTicketCard).join('');
  
  // Add click handlers for modal
  ticketsGrid.querySelectorAll('.ticket-card').forEach(card => {
    card.addEventListener('click', () => openTicketModal(card.dataset.id));
  });

  // Direct WhatsApp CTA below each card, separate from the clickable card area
  ticketsGrid.querySelectorAll('.ticket-whatsapp-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const ticket = ticketsData.find(t => t.id === button.dataset.whatsappId);
      if (!ticket) return;
      openWhatsApp(buildTicketWhatsAppMessage(ticket), 'whatsapp_ticket_card');
    });
  });
  
  // Refresh AOS
  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderPackages() {
  const { packagesGrid } = DOM;
  if (!packagesGrid) return;

  packagesGrid.innerHTML = packagesData.map(renderPackageCard).join('');

  packagesGrid.querySelectorAll('.ticket-card').forEach(card => {
    card.addEventListener('click', () => openPackageModal(card.dataset.id));
  });

  packagesGrid.querySelectorAll('.ticket-whatsapp-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const pkg = packagesData.find(p => p.id === button.dataset.whatsappId);
      if (!pkg) return;
      openWhatsApp(buildPackageWhatsAppMessage(pkg), 'whatsapp_package_card');
    });
  });
}

function renderHotels() {
  const { hotelsWrapper } = DOM;
  if (!hotelsWrapper) return;
  
  hotelsWrapper.innerHTML = hotelsData.map(renderHotelCard).join('');
  
  // Add click handlers for hotel modal
  hotelsWrapper.querySelectorAll('.hotel-card').forEach(card => {
    card.addEventListener('click', () => openHotelModal(card.dataset.id));
    card.style.cursor = 'pointer';
  });
}


const PT_MONTHS = { jan: 0, fev: 1, mar: 2, abr: 3, mai: 4, jun: 5, jul: 6, ago: 7, set: 8, out: 9, nov: 10, dez: 11 };

function parseBlogDate(dateStr) {
  const [day, monthAbbr, year] = dateStr.split(' ');
  return new Date(Number(year), PT_MONTHS[monthAbbr.toLowerCase()], Number(day));
}

function renderBlog() {
  const { blogGrid } = DOM;
  if (!blogGrid) return;

  const sortedPosts = [...blogData].sort((a, b) => parseBlogDate(b.date) - parseBlogDate(a.date));
  blogGrid.innerHTML = sortedPosts.map(renderBlogCard).join('');
}


// ========================================
// Filter Functionality
// ========================================

function initFilters() {
  // Tickets filter
  document.querySelectorAll('.tickets-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tickets-filter .filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderTickets(btn.dataset.filter);
    });
  });
  
  // Hotels filter
  document.querySelectorAll('.hotels-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hotels-filter .filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      const filter = btn.dataset.filter;
      const slides = document.querySelectorAll('.hotels-swiper .swiper-slide');
      
      slides.forEach(slide => {
        const card = slide.querySelector('.hotel-card');
        if (filter === 'all' || card?.dataset.type === filter) {
          slide.style.display = '';
        } else {
          slide.style.display = 'none';
        }
      });
      
      // Update swiper
      if (window.hotelsSwiper) window.hotelsSwiper.update();
    });
  });
}

// ========================================
// Modal Functions
// ========================================

function openTicketModal(ticketId) {
  const ticket = ticketsData.find(t => t.id === ticketId);
  if (!ticket) return;
  
  const { modalBody } = DOM;
  const whatsappMessage = buildTicketWhatsAppMessage(ticket);

  modalBody.innerHTML = `
    <div class="modal-ticket">
      <img src="${ticket.image}" alt="${ticket.parkName}" class="modal-image" style="width:100%;height:300px;object-fit:cover;border-radius:var(--radius-md);margin-bottom:var(--spacing-lg);">
      <span class="ticket-card-category" style="margin-bottom:var(--spacing-sm);display:inline-block;">${ticket.category}</span>
      <h2 style="font-size:var(--font-size-2xl);margin-bottom:var(--spacing-sm);">${ticket.parkName}</h2>
      <p style="color:var(--color-text-light);margin-bottom:var(--spacing-md);">${ticket.description}</p>
      <ul style="margin-bottom:var(--spacing-lg);">
        ${ticket.features.map(f => `<li style="padding:var(--spacing-xs) 0;"><i class="fas fa-check" style="color:var(--color-success);margin-right:var(--spacing-sm);"></i>${f}</li>`).join('')}
      </ul>
      <div style="display:flex;justify-content:flex-end;align-items:center;">
        <button class="btn btn-primary" data-ticket-id="${ticket.id}">
          <i class="fab fa-whatsapp"></i> Comprar Agora
        </button>
      </div>
    </div>
  `;
  
  modalBody.querySelector('[data-ticket-id]').addEventListener('click', () => {
    openWhatsApp(whatsappMessage, 'whatsapp_ticket_modal');
    closeModal();
  });
  
  openModal();
}

function openPackageModal(packageId) {
  const pkg = packagesData.find(p => p.id === packageId);
  if (!pkg) return;

  const { modalBody } = DOM;
  const whatsappMessage = buildPackageWhatsAppMessage(pkg);

  modalBody.innerHTML = `
    <div class="modal-ticket">
      <img src="${pkg.image}" alt="${pkg.name}" class="modal-image" style="width:100%;height:300px;object-fit:cover;border-radius:var(--radius-md);margin-bottom:var(--spacing-lg);">
      <span class="ticket-card-category" style="margin-bottom:var(--spacing-sm);display:inline-block;">${pkg.title}</span>
      <h2 style="font-size:var(--font-size-2xl);margin-bottom:var(--spacing-sm);">${pkg.name}</h2>
      <p style="color:var(--color-text-light);margin-bottom:var(--spacing-md);">${pkg.description}</p>
      <ul style="margin-bottom:var(--spacing-lg);">
        ${pkg.features.map(f => `<li style="padding:var(--spacing-xs) 0;"><i class="fas fa-check" style="color:var(--color-success);margin-right:var(--spacing-sm);"></i>${f}</li>`).join('')}
      </ul>
      <p style="color:var(--color-text-muted);font-size:var(--font-size-sm);margin-bottom:var(--spacing-md);">Valores, disponibilidade e condições podem mudar sem aviso prévio e são confirmados no atendimento.</p>
      <div style="display:flex;justify-content:flex-end;align-items:center;">
        <button class="btn btn-primary" data-package-id="${pkg.id}">
          <i class="fab fa-whatsapp"></i> Solicitar Pacote
        </button>
      </div>
    </div>
  `;

  modalBody.querySelector('[data-package-id]').addEventListener('click', () => {
    openWhatsApp(whatsappMessage, 'whatsapp_package_modal');
    closeModal();
  });

  openModal();
}

function openHotelModal(hotelId) {
  const hotel = hotelsData.find(h => h.id === hotelId);
  if (!hotel) return;
  
  const { modalBody } = DOM;
  const amenitiesList = hotel.amenities
    .map(a => `<li style="padding:var(--spacing-xs) 0;"><i class="fas fa-check" style="color:var(--color-success);margin-right:var(--spacing-sm);"></i>${a}</li>`)
    .join('');
  
  const whatsappMessage = `Olá! Tenho interesse em hospedagem no *${hotel.name}*.\n\n` +
    `📍 Localização: ${hotel.location}\n` +
    `🏨 Tipo: ${hotel.type}\n` +
    (hotel.priceRange ? `💰 Diária: ${formatPrice(hotel.priceRange.min)} - ${formatPrice(hotel.priceRange.max)}\n` : '') +
    `✨ Comodidades: ${hotel.amenities.join(', ')}\n\n` +
    `Gostaria de mais informações sobre disponibilidade e reservas.`;
  
  modalBody.innerHTML = `
    <div class="modal-hotel">
      <img src="${hotel.image}" alt="${hotel.name}" class="modal-image" style="width:100%;height:300px;object-fit:cover;border-radius:var(--radius-md);margin-bottom:var(--spacing-lg);">
      <span class="hotel-card-type" style="margin-bottom:var(--spacing-sm);display:inline-block;">${hotel.type}</span>
      <h2 style="font-size:var(--font-size-2xl);margin-bottom:var(--spacing-sm);">${hotel.name}</h2>
      <p style="color:var(--color-text-light);margin-bottom:var(--spacing-md);">
        <i class="fas fa-map-marker-alt" style="color:var(--color-secondary);margin-right:var(--spacing-xs);"></i>
        ${hotel.location}
      </p>
      <h3 style="font-size:var(--font-size-lg);margin-bottom:var(--spacing-sm);">Comodidades</h3>
      <ul style="margin-bottom:var(--spacing-lg);">${amenitiesList}</ul>
      <div style="display:flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;gap:var(--spacing-md);">
        <button class="btn btn-primary" data-hotel-id="${hotel.id}">
          <i class="fab fa-whatsapp"></i> Solicitar Reserva
        </button>
      </div>
    </div>
  `;
  
  modalBody.querySelector('[data-hotel-id]').addEventListener('click', () => {
    openWhatsApp(whatsappMessage);
    closeModal();
  });
  
  openModal();
}

function openModal() {
  const { modal } = DOM;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const { modal } = DOM;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal() {
  const { modal } = DOM;
  
  // Close on overlay click
  modal?.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closeModal);
  });
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });
}


// ========================================
// Swiper Initialization
// ========================================

function initSwipers() {
  if (typeof Swiper === 'undefined') return;
  
  // Hotels Swiper
  window.hotelsSwiper = new Swiper('.hotels-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: '.hotels-swiper .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.hotels-swiper .swiper-button-next',
      prevEl: '.hotels-swiper .swiper-button-prev'
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  });
}

// ========================================
// PWA Install Prompt
// ========================================

let deferredPrompt;

function initPWA() {
  const { pwaBanner, pwaInstallBtn, pwaCloseBtn } = DOM;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install banner
    if (pwaBanner) {
      pwaBanner.hidden = false;
    }
  });
  
  pwaInstallBtn?.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('PWA installed');
    }
    
    deferredPrompt = null;
    pwaBanner.hidden = true;
  });
  
  pwaCloseBtn?.addEventListener('click', () => {
    pwaBanner.hidden = true;
  });
  
  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    pwaBanner.hidden = true;
  });
}

// ========================================
// AOS Initialization
// ========================================

function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
      mirror: false
    });
  }
}

// ========================================
// GSAP Scroll Animations
// ========================================

function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  
  // Animate sections on scroll
  gsap.utils.toArray('.section').forEach(section => {
    const items = section.querySelectorAll('[data-aos]');
    
    if (items.length === 0) {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  });
}

// ========================================
// Initialize Application
// ========================================

function initCarQuote() {
  const carQuoteBtn = document.getElementById('car-quote-btn');
  
  carQuoteBtn?.addEventListener('click', () => {
    const message = `Olá! Gostaria de solicitar uma *cotação de aluguel de carro* na Flórida.\n\n` +
      `🚗 Estou interessado em:\n` +
      `• Sem taxas escondidas\n` +
      `• Suporte em português 24h\n` +
      `• Melhor preço garantido\n\n` +
      `Por favor, me envie mais informações sobre disponibilidade e valores.`;
    
    openWhatsApp(message);
  });
}

function initAnalyticsTracking() {
  document.querySelector('.whatsapp-float')?.addEventListener('click', () => {
    trackEvent('generate_lead', { method: 'whatsapp_float' });
  });

  document.querySelectorAll('.contact-card').forEach((card) => {
    card.addEventListener('click', () => {
      const href = card.getAttribute('href') || '';
      const method = href.startsWith('https://wa.me')
        ? 'whatsapp'
        : href.startsWith('mailto:')
        ? 'email'
        : href.startsWith('tel:')
        ? 'phone'
        : 'other';
      trackEvent('generate_lead', { method });
    });
  });
}

const EXCHANGE_RATE_REFRESH_MS = 5 * 60 * 1000;

function initExchangeRate() {
  const textEl = document.getElementById('exchange-rate-text');
  if (!textEl) return;

  function formatBRL(value) {
    return parseFloat(value).toFixed(2).replace('.', ',');
  }

  async function updateRate() {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRLT');
      if (!response.ok) throw new Error('Falha ao buscar cotação');
      const data = await response.json();
      const quote = data.USDBRLT;
      const buy = formatBRL(quote.bid);
      const sell = formatBRL(quote.ask);
      textEl.textContent = `Dólar Turismo: Compra R$ ${buy} · Venda R$ ${sell}`;
    } catch (error) {
      textEl.textContent = 'Cotação do dólar turismo indisponível no momento';
    }
  }

  updateRate();
  setInterval(updateRate, EXCHANGE_RATE_REFRESH_MS);
}

function init() {
  // Render content
  renderTickets();
  renderPackages();
  renderHotels();
  renderBlog();
  
  // Initialize features
  initNavigation();
  initHeroAnimations();
  initFilters();
  initModal();
  initSwipers();
  initPWA();
  initAnalyticsTracking();
  initExchangeRate();
  initAOS();
  initScrollAnimations();
  initCarQuote();

  const footerYear = document.getElementById('footer-year');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  console.log('Encanty Travel App initialized');
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
