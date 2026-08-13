/**
 * Service Worker for Viagens Orlando PWA
 * Implements caching strategies for offline functionality
 */

const CACHE_NAME = 'viagens-orlando-v15';
const OFFLINE_URL = 'offline.html';

const STATIC_ASSETS = [
  './',
  'index.html',
  'offline.html',
  'css/styles.css',
  'css/animations.css',
  'css/responsive.css',
  'js/app.js',
  'manifest.json',
  'assets/icons/icon.png'
];

const EXTERNAL_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://unpkg.com/aos@2.3.1/dist/aos.css',
  'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
];

/**
 * Install event - cache static assets
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

/**
 * Activate event - clean old caches
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

/**
 * Fetch event - implement caching strategies
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  // Never cache the exchange rate quote — must always be live
  if (isNoCacheResource(url)) {
    event.respondWith(fetch(request));
    return;
  }

  // Handle static assets with cache-first strategy
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Handle images with cache-first strategy
  if (isImageRequest(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Handle external resources with stale-while-revalidate
  if (isExternalResource(url)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Default: network-first strategy
  event.respondWith(networkFirst(request));
});

/**
 * Handle navigation requests with network-first, fallback to offline page
 */
async function handleNavigationRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback to offline page
    return caches.match(OFFLINE_URL);
  }
}

/**
 * Cache-first strategy - best for static assets
 */
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    return createOfflineResponse();
  }
}

/**
 * Network-first strategy - best for dynamic content
 */
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || createOfflineResponse();
  }
}

/**
 * Stale-while-revalidate strategy - best for external resources
 */
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        const cache = caches.open(CACHE_NAME);
        cache.then((c) => c.put(request, networkResponse.clone()));
      }
      return networkResponse;
    })
    .catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

/**
 * Check if request is for a static asset
 */
function isStaticAsset(url) {
  const staticExtensions = ['.css', '.js', '.json'];
  return staticExtensions.some((ext) => url.pathname.endsWith(ext));
}

/**
 * Check if request is for an image
 */
function isImageRequest(url) {
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico'];
  return imageExtensions.some((ext) => url.pathname.endsWith(ext));
}

/**
 * Check if request is for an external resource
 */
function isExternalResource(url) {
  return url.origin !== self.location.origin;
}

/**
 * Check if request must never be cached (always fetched live)
 */
function isNoCacheResource(url) {
  return url.hostname === 'economia.awesomeapi.com.br';
}

/**
 * Create a generic offline response
 */
function createOfflineResponse() {
  return new Response('Conteúdo não disponível offline', {
    status: 503,
    statusText: 'Service Unavailable',
    headers: { 'Content-Type': 'text/plain' }
  });
}

/**
 * Handle messages from clients
 */
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
