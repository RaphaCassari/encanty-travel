# Design Document

## Overview

Este documento descreve a arquitetura e design técnico do site PWA de gestão de viagens para Orlando. O sistema será construído como uma Single Page Application (SPA) moderna utilizando HTML5, CSS3 com animações avançadas, JavaScript vanilla para máxima performance, e funcionalidades PWA completas.

O design prioriza:
- **Performance**: Carregamento rápido com lazy loading e cache inteligente
- **Experiência Visual**: Animações fluidas usando bibliotecas otimizadas (AOS, GSAP, Swiper)
- **Responsividade**: Mobile-first com breakpoints otimizados
- **Offline-first**: PWA com Service Worker para funcionamento sem internet

### Bibliotecas de Animação

O projeto utilizará as seguintes bibliotecas para efeitos visuais chamativos e fluidos:

1. **AOS (Animate On Scroll)** - Para animações de scroll reveal
   - Leve (~14KB)
   - Fácil configuração com data attributes
   - Suporte a diversos efeitos (fade, zoom, flip, slide)

2. **GSAP (GreenSock)** - Para animações complexas e timeline
   - Performance otimizada (60fps)
   - Controle preciso de animações
   - Efeitos de parallax avançados
   - ScrollTrigger para animações baseadas em scroll

3. **Swiper.js** - Para carousels e sliders
   - Touch-friendly e responsivo
   - Efeitos de transição (fade, cube, coverflow, flip)
   - Lazy loading integrado
   - Autoplay com pause on interaction

4. **Typed.js** - Para efeito de digitação no hero
   - Texto animado tipo máquina de escrever
   - Múltiplas strings com loop

5. **Particles.js** (opcional) - Para background animado
   - Partículas interativas
   - Configurável e leve quando otimizado

## Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        Browser[Browser/PWA]
        SW[Service Worker]
        Cache[Cache Storage]
    end
    
    subgraph "Application Layer"
        HTML[HTML5 Semantic]
        CSS[CSS3 + Animations]
        JS[JavaScript Modules]
    end
    
    subgraph "Components"
        Hero[Hero Section]
        Nav[Navigation]
        Tickets[Tickets Grid]
        Cars[Car Rental]
        Hotels[Hotels Section]
        Testimonials[Testimonials Carousel]
        Blog[Blog Section]
        Newsletter[Newsletter Form]
        Footer[Footer]
    end
    
    subgraph "PWA Features"
        Manifest[Web App Manifest]
        Install[Install Prompt]
        Offline[Offline Mode]
    end
    
    Browser --> SW
    SW --> Cache
    Browser --> HTML
    HTML --> CSS
    HTML --> JS
    JS --> Components
    SW --> PWA Features
```

### Estrutura de Diretórios

```
/
├── index.html
├── manifest.json
├── sw.js (Service Worker)
├── css/
│   ├── styles.css (estilos principais)
│   ├── animations.css (animações customizadas)
│   └── responsive.css (media queries)
├── js/
│   ├── app.js (módulo principal)
│   ├── components.js (componentes reutilizáveis)
│   └── pwa.js (registro SW e install prompt)
├── images/
│   ├── hero/
│   ├── parks/
│   ├── hotels/
│   ├── icons/
│   └── testimonials/
└── assets/
    └── icons/ (PWA icons)
```

### CDN Dependencies

```html
<!-- AOS - Animate On Scroll -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Swiper.js -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Typed.js -->
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

<!-- Font Awesome (ícones) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

## Components and Interfaces

### 1. Navigation Component

```javascript
// Interface do componente de navegação
interface NavigationConfig {
  logo: string;
  links: NavLink[];
  mobileBreakpoint: number;
  scrollThreshold: number;
}

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Comportamentos
- toggleMobileMenu(): void
- handleScroll(): void
- smoothScrollTo(target: string): void
```

### 2. Hero Section Component

```javascript
// Interface do Hero com GSAP e Typed.js
interface HeroConfig {
  backgroundImage: string;
  title: string;
  typedStrings: string[];  // Strings para efeito de digitação
  ctaText: string;
  ctaLink: string;
  parallaxSpeed: number;
}

// Comportamentos com GSAP
- initParallax(): void  // GSAP ScrollTrigger parallax
- initTypedEffect(): void  // Typed.js para texto animado
- animateOnLoad(): void  // GSAP timeline para entrada
- handleResize(): void
```

### 2.1 Hero Animation Timeline (GSAP)

```javascript
// Timeline de animação do Hero
const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTimeline
  .from(".hero-bg", { scale: 1.2, duration: 1.5 })
  .from(".hero-title", { y: 100, opacity: 0, duration: 1 }, "-=1")
  .from(".hero-subtitle", { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".hero-cta", { scale: 0, opacity: 0, duration: 0.5 }, "-=0.3")
  .from(".hero-scroll-indicator", { y: -20, opacity: 0, duration: 0.5 });
```

### 3. Tickets Grid Component

```javascript
// Interface de Ingresso
interface Ticket {
  id: string;
  parkName: string;
  category: 'disney' | 'universal' | 'seaworld' | 'other';
  image: string;
  description: string;
  price: number;
  priceFrom: boolean;
  features: string[];
}

// Interface do Grid
interface TicketsGridConfig {
  tickets: Ticket[];
  columns: { mobile: number; tablet: number; desktop: number };
  animationDelay: number;
}

// Comportamentos
- filterByCategory(category: string): void
- openModal(ticketId: string): void
- closeModal(): void
```

### 4. Carousel Component (Testimonials) - Swiper.js

```javascript
// Interface de Depoimento
interface Testimonial {
  id: string;
  name: string;
  photo: string;
  rating: number;
  text: string;
  date: string;
}

// Configuração do Swiper
const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true
  },
  effect: 'coverflow',  // Efeito 3D chamativo
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
};
```

### 5. Newsletter Form Component

```javascript
// Interface do Formulário
interface NewsletterConfig {
  endpoint: string;
  successMessage: string;
  errorMessage: string;
}

// Comportamentos
- validateEmail(email: string): boolean
- submit(email: string): Promise<void>
- showFeedback(type: 'success' | 'error', message: string): void
```

### 6. PWA Manager

```javascript
// Interface do PWA
interface PWAConfig {
  swPath: string;
  cacheName: string;
  cacheVersion: number;
  offlinePage: string;
}

// Comportamentos
- registerServiceWorker(): Promise<void>
- showInstallPrompt(): void
- handleOffline(): void
- updateCache(): Promise<void>
```

## Data Models

### Ticket Model

```javascript
const TicketSchema = {
  id: String,           // Identificador único
  parkName: String,     // Nome do parque
  category: String,     // Categoria (disney, universal, etc)
  image: String,        // URL da imagem
  thumbnail: String,    // URL da thumbnail
  description: String,  // Descrição curta
  fullDescription: String, // Descrição completa
  price: Number,        // Preço base
  currency: String,     // Moeda (BRL)
  priceFrom: Boolean,   // Se é "a partir de"
  features: [String],   // Lista de características
  includes: [String],   // O que está incluído
  validDays: Number,    // Dias de validade
  isPromotion: Boolean, // Se está em promoção
  originalPrice: Number // Preço original (se promoção)
};
```

### Hotel Model

```javascript
const HotelSchema = {
  id: String,
  name: String,
  type: String,         // hotel, house, resort
  location: String,
  distanceToParks: String,
  image: String,
  gallery: [String],
  priceRange: {
    min: Number,
    max: Number
  },
  rating: Number,
  amenities: [String],
  description: String
};
```

### Blog Post Model

```javascript
const BlogPostSchema = {
  id: String,
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  image: String,
  author: String,
  publishedAt: Date,
  category: String,
  tags: [String],
  readTime: Number
};
```

### Testimonial Model

```javascript
const TestimonialSchema = {
  id: String,
  name: String,
  photo: String,
  rating: Number,       // 1-5
  text: String,
  tripDate: String,
  verified: Boolean
};
```

## CSS Architecture

### Design Tokens

```css
:root {
  /* Colors */
  --color-primary: #1e3a5f;
  --color-secondary: #f7931e;
  --color-accent: #00a8e8;
  --color-success: #28a745;
  --color-error: #dc3545;
  --color-text: #333333;
  --color-text-light: #666666;
  --color-background: #ffffff;
  --color-background-alt: #f8f9fa;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%);
  --gradient-accent: linear-gradient(135deg, #f7931e 0%, #ffb347 100%);
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.15);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.2);
  --shadow-hover: 0 12px 32px rgba(0,0,0,0.25);
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-xxl: 5rem;
  
  /* Typography */
  --font-primary: 'Poppins', sans-serif;
  --font-secondary: 'Open Sans', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: 3rem;
  --font-size-hero: 4rem;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 50%;
  
  /* Z-Index */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 300;
  --z-tooltip: 400;
}
```

### Breakpoints

```css
/* Mobile First Approach */
/* Base: 0-575px (mobile) */

/* Small devices (landscape phones) */
@media (min-width: 576px) { }

/* Medium devices (tablets) */
@media (min-width: 768px) { }

/* Large devices (desktops) */
@media (min-width: 992px) { }

/* Extra large devices (large desktops) */
@media (min-width: 1200px) { }

/* XXL devices */
@media (min-width: 1400px) { }
```

## Animation System

### AOS Configuration

```javascript
// Inicialização do AOS
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
  delay: 0,
  mirror: false
});

// Atributos disponíveis para elementos
// data-aos="fade-up" | "fade-down" | "fade-left" | "fade-right"
// data-aos="zoom-in" | "zoom-out" | "zoom-in-up" | "zoom-in-down"
// data-aos="flip-up" | "flip-down" | "flip-left" | "flip-right"
// data-aos-delay="100" | "200" | "300" ...
// data-aos-duration="500" | "1000" ...
```

### GSAP ScrollTrigger Effects

```javascript
// Parallax no Hero
gsap.to(".hero-bg", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Animação de seções ao scroll
gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section.querySelectorAll('.animate-item'), {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

// Efeito de contador animado
gsap.from(".stat-number", {
  textContent: 0,
  duration: 2,
  ease: "power1.out",
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger: ".stats-section",
    start: "top 80%"
  }
});
```

### Swiper Effects Gallery

```javascript
// Carousel de Parques com efeito Cube
const parksSwiper = new Swiper('.parks-swiper', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  pagination: {
    el: '.swiper-pagination'
  }
});

// Gallery de Hotéis com efeito Cards
const hotelsSwiper = new Swiper('.hotels-swiper', {
  effect: 'cards',
  grabCursor: true,
  cardsEffect: {
    perSlideOffset: 8,
    perSlideRotate: 2,
    rotate: true,
    slideShadows: false
  }
});
```

### Custom CSS Animations

```css
/* Gradient Animation para botões */
.btn-gradient {
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-primary));
  background-size: 200% 100%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Glow Effect para cards em hover */
.card-glow:hover {
  box-shadow: 
    0 0 20px rgba(247, 147, 30, 0.3),
    0 0 40px rgba(247, 147, 30, 0.2),
    0 0 60px rgba(247, 147, 30, 0.1);
}

/* Floating Animation */
.float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Pulse Animation para CTAs */
.pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(247, 147, 30, 0.4); }
  50% { transform: scale(1.02); box-shadow: 0 0 0 15px rgba(247, 147, 30, 0); }
}

/* Shimmer Loading Effect */
.shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Text Reveal Animation */
.text-reveal {
  overflow: hidden;
}

.text-reveal span {
  display: inline-block;
  transform: translateY(100%);
  animation: textReveal 0.8s ease forwards;
}

@keyframes textReveal {
  to { transform: translateY(0); }
}

/* Magnetic Button Effect (via JS) */
.magnetic-btn {
  transition: transform 0.3s ease;
}

/* Morphing Background */
.morph-bg {
  background: linear-gradient(-45deg, #1e3a5f, #2d5a87, #f7931e, #00a8e8);
  background-size: 400% 400%;
  animation: morphGradient 15s ease infinite;
}

@keyframes morphGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Scroll Reveal Animations (Fallback sem AOS)

```css
/* Base state for animated elements */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Variations */
.reveal-left {
  transform: translateX(-30px);
}

.reveal-right {
  transform: translateX(30px);
}

.reveal-scale {
  transform: scale(0.9);
}
```

### Keyframe Animations

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```

## PWA Configuration

### Web App Manifest

```json
{
  "name": "Viagens Orlando - Sua Agência de Viagens",
  "short_name": "Viagens Orlando",
  "description": "Ingressos, hospedagem e aluguel de carros para Orlando",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1e3a5f",
  "theme_color": "#1e3a5f",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/assets/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Service Worker Strategy

```javascript
// Cache Strategy: Stale-While-Revalidate para assets
// Network-First para conteúdo dinâmico
// Cache-First para imagens

const CACHE_NAME = 'viagens-orlando-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/css/animations.css',
  '/css/responsive.css',
  '/js/app.js',
  '/js/components.js',
  '/js/animations.js',
  '/manifest.json'
];

// Estratégias de cache por tipo de recurso
const cacheStrategies = {
  static: 'cache-first',
  images: 'cache-first',
  api: 'network-first',
  fonts: 'cache-first'
};
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Parallax Scroll Behavior

*For any* scroll position value, the parallax function SHALL update the background-position or transform of the hero image proportionally to the scroll offset, maintaining a consistent parallax speed ratio.

**Validates: Requirements 1.3**

### Property 2: Smooth Scroll Navigation

*For any* navigation link click targeting a valid section ID, the smooth scroll function SHALL animate the scroll position to bring the target section into view within the viewport.

**Validates: Requirements 2.4**

### Property 3: Header Scroll Effect

*For any* scroll position greater than the defined threshold, the header element SHALL have the scrolled class applied; for scroll positions below the threshold, the class SHALL be removed.

**Validates: Requirements 2.5**

### Property 4: Card Rendering Completeness

*For any* data item (ticket, hotel, testimonial, or blog post) passed to its respective card rendering function, the resulting HTML SHALL contain all required fields: for tickets (image, name, description, price), for hotels (image, name, location, price range), for testimonials (photo, name, rating, text), for blog posts (image, title, excerpt, date).

**Validates: Requirements 3.2, 5.2, 6.2, 7.2**

### Property 5: Modal Data Integrity

*For any* item ID passed to the modal open function, the modal content SHALL display data that matches the source item's properties exactly, with no data corruption or field omission.

**Validates: Requirements 3.4, 5.4**

### Property 6: Filter Correctness

*For any* filter operation with a specified category/type, the resulting filtered array SHALL contain only items where the category/type property matches the filter value, and SHALL contain all items from the source that match.

**Validates: Requirements 3.5, 5.3**

### Property 7: Carousel Pause on Interaction

*For any* user interaction event (click, touch, hover) on the carousel component, the autoplay timer SHALL be cleared and the carousel SHALL remain on the current slide until navigation is explicitly triggered.

**Validates: Requirements 6.3**

### Property 8: Email Validation

*For any* string input to the email validation function, the function SHALL return true only for strings matching a valid email format (containing @ and valid domain), and SHALL return false for all other inputs including empty strings, whitespace-only strings, and malformed addresses.

**Validates: Requirements 8.2, 8.3**

### Property 9: Service Worker Cache Response

*For any* request to a cached resource when the network is unavailable, the Service Worker SHALL respond with the cached version of that resource, ensuring offline functionality.

**Validates: Requirements 10.2, 10.5**

### Property 10: Scroll Reveal Activation

*For any* element with the reveal class that enters the viewport (intersection ratio > 0), the active class SHALL be added to that element, triggering the reveal animation.

**Validates: Requirements 11.1, 11.2**

### Property 11: Interactive Elements Transitions

*For any* interactive element (buttons, links, cards), the computed CSS SHALL include a transition property with duration greater than 0, ensuring smooth state changes.

**Validates: Requirements 11.3**

### Property 12: Lazy Loading Implementation

*For any* image element below the fold, the loading attribute SHALL be set to "lazy", deferring load until the image approaches the viewport.

**Validates: Requirements 12.2**

### Property 13: Responsive Images

*For any* content image, the element SHALL include either a srcset attribute with multiple resolutions or be wrapped in a picture element with source alternatives.

**Validates: Requirements 12.5**

### Property 14: Keyboard Navigation

*For any* interactive element (buttons, links, form inputs), the element SHALL be reachable via Tab key navigation and SHALL have a visible focus indicator when focused.

**Validates: Requirements 13.1**

### Property 15: ARIA Attributes

*For any* dynamic component (modal, carousel, dropdown), the component SHALL include appropriate ARIA attributes (role, aria-label, aria-expanded, aria-hidden as applicable) to convey state to assistive technologies.

**Validates: Requirements 13.2**

### Property 16: Image Alt Texts

*For any* img element in the document, the alt attribute SHALL be present and SHALL contain a non-empty descriptive string (except for decorative images which may have empty alt).

**Validates: Requirements 13.4**

## Error Handling

### Network Errors

```javascript
// Estratégia de fallback para erros de rede
const handleNetworkError = async (request) => {
  // Tentar cache primeiro
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Retornar página offline se disponível
  if (request.mode === 'navigate') {
    return caches.match('/offline.html');
  }
  
  // Retornar resposta de erro genérica
  return new Response('Conteúdo não disponível offline', {
    status: 503,
    statusText: 'Service Unavailable'
  });
};
```

### Form Validation Errors

```javascript
// Mensagens de erro para validação de formulário
const validationMessages = {
  email: {
    required: 'Por favor, informe seu email',
    invalid: 'Por favor, informe um email válido',
    exists: 'Este email já está cadastrado'
  },
  generic: {
    networkError: 'Erro de conexão. Tente novamente.',
    serverError: 'Erro no servidor. Tente mais tarde.'
  }
};
```

### Image Loading Errors

```javascript
// Fallback para imagens que falham ao carregar
const handleImageError = (img) => {
  img.src = '/images/placeholder.webp';
  img.alt = 'Imagem não disponível';
};
```

## Testing Strategy

### Unit Tests

Testes unitários para funções isoladas:

- **Validation Functions**: Testar validateEmail com diversos inputs
- **Filter Functions**: Testar filterByCategory com arrays de dados
- **Render Functions**: Testar se funções de renderização produzem HTML correto
- **Utility Functions**: Testar throttle, debounce, formatPrice, etc.

### Property-Based Tests

Utilizando uma biblioteca de property-based testing (como fast-check para JavaScript):

- **Property 4 (Card Rendering)**: Gerar dados aleatórios e verificar presença de campos
- **Property 6 (Filter)**: Gerar arrays e filtros aleatórios, verificar correção
- **Property 8 (Email Validation)**: Gerar strings aleatórias e verificar classificação correta

### Integration Tests

- **Navigation Flow**: Testar navegação entre seções
- **Modal Interactions**: Testar abertura/fechamento de modais
- **Carousel Behavior**: Testar autoplay e controles manuais
- **Form Submission**: Testar fluxo completo de newsletter

### E2E Tests

- **PWA Installation**: Testar fluxo de instalação
- **Offline Mode**: Testar comportamento sem conexão
- **Responsive Behavior**: Testar em diferentes viewports

### Testing Configuration

```javascript
// Configuração para property-based tests
const testConfig = {
  numRuns: 100,  // Mínimo de 100 iterações por propriedade
  seed: Date.now(),
  verbose: true
};
```

### Test Annotations

Cada teste de propriedade deve ser anotado com:
```javascript
/**
 * Feature: travel-management-pwa
 * Property 4: Card Rendering Completeness
 * Validates: Requirements 3.2, 5.2, 6.2, 7.2
 */
```
