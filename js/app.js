/**
 * Viagens Orlando - Main Application
 * Entry point for all JavaScript functionality
 */

// ========================================
// Data - Mock data for tickets, hotels, testimonials, blog
// ========================================

const ticketsData = [
  {
    id: 'disney-magic-kingdom',
    parkName: 'Magic Kingdom',
    category: 'disney',
    image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600',
    description: 'O parque mais mágico do mundo com o icônico Castelo da Cinderela.',
    price: 599,
    priceFrom: true,
    features: ['Acesso ao parque', 'Atrações clássicas', 'Shows e paradas']
  },
  {
    id: 'disney-hollywood',
    parkName: 'Hollywood Studios',
    category: 'disney',
    image: 'https://images.unsplash.com/photo-1489368066883-369c64aa01bd?w=600',
    description: 'Viva a magia do cinema com Star Wars e Toy Story Land.',
    price: 589,
    priceFrom: true,
    features: ['Star Wars Galaxy Edge', 'Toy Story Land', 'Tower of Terror']
  },
  {
    id: 'disney-epcot',
    parkName: 'EPCOT',
    category: 'disney',
    image: 'https://images.unsplash.com/photo-1673738930649-4e72ecfcf9f4?w=600',
    description: 'Explore o futuro e culturas do mundo todo.',
    price: 579,
    priceFrom: true,
    features: ['World Showcase', 'Future World', 'Guardians of the Galaxy']
  },
  {
    id: 'universal-studios',
    parkName: 'Universal Studios',
    category: 'universal',
    image: 'https://images.unsplash.com/photo-1621473909625-6a62ef5bedf7?w=600',
    description: 'Aventuras cinematográficas e o mundo de Harry Potter.',
    price: 549,
    priceFrom: true,
    features: ['Wizarding World', 'Transformers', 'Minions']
  }
];


const ticketsDataContinued = [
  {
    id: 'universal-islands',
    parkName: 'Islands of Adventure',
    category: 'universal',
    image: 'https://images.unsplash.com/photo-1544591518-5d1fdb9f5b6d?w=600',
    description: 'Ilhas temáticas com montanhas-russas incríveis.',
    price: 549,
    priceFrom: true,
    features: ['Hogwarts Express', 'Velocicoaster', 'Jurassic World']
  },
  {
    id: 'seaworld',
    parkName: 'SeaWorld Orlando',
    category: 'seaworld',
    image: 'https://images.unsplash.com/photo-1721141877645-4404b8b241f8?w=600',
    description: 'Vida marinha, shows e montanhas-russas emocionantes.',
    price: 399,
    priceFrom: true,
    features: ['Shows com animais', 'Mako', 'Kraken']
  },
  {
    id: 'busch-gardens',
    parkName: 'Busch Gardens',
    category: 'other',
    image: 'https://images.unsplash.com/photo-1706043904134-425b12ad8fd4?w=600',
    description: 'Parque temático africano com as melhores montanhas-russas.',
    price: 379,
    priceFrom: true,
    features: ['SheiKra', 'Cheetah Hunt', 'Safari']
  },
  {
    id: 'legoland',
    parkName: 'LEGOLAND Florida',
    category: 'other',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    description: 'Diversão para toda família no mundo LEGO.',
    price: 349,
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
  }
];


const testimonialsData = [
  {
    id: 't1',
    name: 'Maria Silva',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 5,
    text: 'Viagem dos sonhos! A equipe cuidou de tudo, desde os ingressos até as reservas. Super recomendo!',
    date: 'Julho 2026'
  },
  {
    id: 't2',
    name: 'João Santos',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
    text: 'Atendimento excepcional! Conseguiram os melhores preços e o suporte durante a viagem foi incrível.',
    date: 'Junho 2026'
  },
  {
    id: 't3',
    name: 'Ana Oliveira',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
    text: 'Segunda vez que viajo com eles e não me arrependo. Tudo organizado e sem stress!',
    date: 'Maio 2026'
  },
  {
    id: 't4',
    name: 'Carlos Mendes',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    rating: 4,
    text: 'Ótima experiência! O parcelamento facilitou muito. Voltarei a fazer negócio com certeza.',
    date: 'Abril 2026'
  }
];

const blogData = [
  {
    id: 'b1',
    title: 'Guia Completo: Magic Kingdom 2026',
    image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600',
    excerpt: 'Tudo que você precisa saber para aproveitar ao máximo o parque mais visitado do mundo.',
    date: '05 Ago 2026',
    category: 'Dicas'
  },
  {
    id: 'b2',
    title: 'Novidades da Universal para 2026',
    image: 'https://images.unsplash.com/photo-1621473909625-6a62ef5bedf7?w=600',
    excerpt: 'Conheça as novas atrações e experiências que chegam aos parques Universal.',
    date: '28 Jul 2026',
    category: 'Novidades'
  },
  {
    id: 'b3',
    title: 'Como Economizar em Orlando',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600',
    excerpt: 'Dicas práticas para aproveitar sua viagem gastando menos sem perder a diversão.',
    date: '20 Jul 2026',
    category: 'Economia'
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

function openWhatsApp(message) {
  const url = buildWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
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
  testimonialsWrapper: document.getElementById('testimonials-wrapper'),
  blogGrid: document.getElementById('blog-grid'),
  newsletterForm: document.getElementById('newsletter-form'),
  formFeedback: document.getElementById('form-feedback'),
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
    
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTimeline
      .from('.hero-bg', { scale: 1.2, duration: 1.5 })
      .from('.hero-title', { y: 100, opacity: 0, duration: 1 }, '-=1')
      .from('.hero-subtitle', { y: 50, opacity: 0, duration: 0.8 }, '-=0.5')
      .from('.hero-cta', { scale: 0, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.hero-scroll-indicator', { y: -20, opacity: 0, duration: 0.5 });
    
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
      cursorChar: '|'
    });
  }
}

// ========================================
// Card Rendering Functions
// ========================================

function formatPrice(price) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function generateSrcset(baseUrl) {
  const widths = [300, 600, 900];
  return widths.map(w => `${baseUrl.replace('w=600', `w=${w}`)} ${w}w`).join(', ');
}

function renderTicketCard(ticket) {
  const srcset = generateSrcset(ticket.image);
  
  return `
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
      <div class="ticket-card-content">
        <span class="ticket-card-category">${ticket.category}</span>
        <h3 class="ticket-card-title">${ticket.parkName}</h3>
      </div>
    </article>
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


function renderTestimonialCard(testimonial) {
  const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
  const photoSrcset = testimonial.photo.replace('w=150', 'w=80') + ' 80w, ' +
                      testimonial.photo + ' 150w';
  
  return `
    <div class="swiper-slide">
      <article class="testimonial-card">
        <img 
          src="${testimonial.photo}" 
          srcset="${photoSrcset}"
          sizes="80px"
          alt="${testimonial.name}" 
          class="testimonial-photo" 
          loading="lazy"
        >
        <h3 class="testimonial-name">${testimonial.name}</h3>
        <div class="testimonial-rating" aria-label="Avaliação: ${testimonial.rating} de 5 estrelas">${stars}</div>
        <p class="testimonial-text">"${testimonial.text}"</p>
      </article>
    </div>
  `;
}

function renderBlogCard(post) {
  const srcset = generateSrcset(post.image);
  
  return `
    <article class="blog-card" data-aos="fade-up">
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
    </article>
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
  
  // Refresh AOS
  if (typeof AOS !== 'undefined') AOS.refresh();
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

function renderTestimonials() {
  const { testimonialsWrapper } = DOM;
  if (!testimonialsWrapper) return;
  
  testimonialsWrapper.innerHTML = testimonialsData.map(renderTestimonialCard).join('');
}

function renderBlog() {
  const { blogGrid } = DOM;
  if (!blogGrid) return;
  
  blogGrid.innerHTML = blogData.map(renderBlogCard).join('');
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
  const whatsappMessage = `Olá! Tenho interesse em ingressos para o *${ticket.parkName}*.\n\n` +
    `📍 Categoria: ${ticket.category.toUpperCase()}\n` +
    `💰 Preço: ${ticket.priceFrom ? 'a partir de ' : ''}${formatPrice(ticket.price)}\n\n` +
    `Gostaria de mais informações sobre disponibilidade e formas de pagamento.`;
  
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
    openWhatsApp(whatsappMessage);
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
    `💰 Diária: ${formatPrice(hotel.priceRange.min)} - ${formatPrice(hotel.priceRange.max)}\n` +
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
  
  // Testimonials Swiper with coverflow effect
  window.testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false
    },
    pagination: {
      el: '.testimonials-swiper .swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}

// ========================================
// Newsletter Form
// ========================================

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function initNewsletter() {
  const { newsletterForm, formFeedback } = DOM;
  if (!newsletterForm) return;
  
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('#newsletter-email');
    const email = emailInput.value.trim();
    
    // Clear previous feedback
    formFeedback.textContent = '';
    formFeedback.className = 'form-feedback';
    emailInput.classList.remove('error', 'success');
    
    if (!email) {
      showFeedback('Por favor, informe seu email.', 'error');
      emailInput.classList.add('error');
      return;
    }
    
    if (!validateEmail(email)) {
      showFeedback('Por favor, informe um email válido.', 'error');
      emailInput.classList.add('error');
      emailInput.classList.add('shake');
      setTimeout(() => emailInput.classList.remove('shake'), 500);
      return;
    }
    
    // Success
    showFeedback('Inscrição realizada com sucesso! 🎉', 'success');
    emailInput.classList.add('success');
    emailInput.value = '';
    
    setTimeout(() => {
      emailInput.classList.remove('success');
      formFeedback.textContent = '';
    }, 5000);
  });
}

function showFeedback(message, type) {
  const { formFeedback } = DOM;
  formFeedback.textContent = message;
  formFeedback.className = `form-feedback ${type}`;
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

function init() {
  // Render content
  renderTickets();
  renderHotels();
  renderTestimonials();
  renderBlog();
  
  // Initialize features
  initNavigation();
  initHeroAnimations();
  initFilters();
  initModal();
  initSwipers();
  initNewsletter();
  initPWA();
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
