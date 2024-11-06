const CACHE_NAME = 'muscle-volume-tracker-cache-v1';
const urlsToCache = [
  '/workout-set-autoregulation/',
  '/workout-set-autoregulation/index.html',
  '/workout-set-autoregulation/style.css',
  '/workout-set-autoregulation/script.js',
  '/workout-set-autoregulation/manifest.json',
  '/workout-set-autoregulation/images/icon-192x192.png',
  '/workout-set-autoregulation/images/icon-512x512.png'
];

// Install event: cache all app shell files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event: serve from cache, fall back to network if not cached
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
