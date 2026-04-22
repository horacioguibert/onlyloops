// OnlyLoops Service Worker
// Strategy: stale-while-revalidate
//   • Returns cached copy instantly (app opens fast)
//   • In parallel, fetches fresh version in background
//   • Next load uses the new one — user always moves forward
// Version this cache name when you want to force everyone to get a full refresh.

const CACHE_VERSION = 'onlyloops-v11';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/favicon.png'
];

// --- Install: pre-cache core assets -----------------------------------------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS))
  );
  // Take control immediately without waiting for the old SW to finish
  self.skipWaiting();
});

// --- Activate: clean up old cache versions ----------------------------------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_VERSION)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// --- Fetch: stale-while-revalidate ------------------------------------------
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET and same-origin (skip CDN samples, skip POSTs, etc.)
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.open(CACHE_VERSION).then((cache) =>
      cache.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            // Only cache successful responses
            if (response && response.status === 200) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => cached); // if offline, fall back to cache

        // Return cached version instantly if available, else wait for network
        return cached || networkFetch;
      })
    )
  );
});
