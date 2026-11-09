/**
 * Service Worker - La Finca (Cabaña & Restaurante) PWA
 * Estrategia: Stale-While-Revalidate para activos locales y CDN, con soporte offline.
 */

const CACHE_NAME = 'la-finca-pwa-v1.1.0';
const CORE_ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './restaurante-portada.jpg'
];

// Instalación: Pre-cachear archivos esenciales de la aplicación
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activación: Limpiar cachés antiguos si cambia la versión
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Intercepción de peticiones (Fetch): Stale-While-Revalidate con fallback a caché
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Ignorar peticiones que no sean GET o esquemas externos (ej. whatsapp://, chrome-extension://)
  if (request.method !== 'GET' || !request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          // Guardar copia actualizada en caché si la respuesta es válida
          if (
            networkResponse &&
            (networkResponse.status === 200 || networkResponse.type === 'opaque')
          ) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Si no hay conexión y es navegación a documento, devolver index.html
          if (request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return cachedResponse;
        });

      return cachedResponse || fetchPromise;
    })
  );
});
