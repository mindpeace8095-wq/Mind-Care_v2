const CACHE_NAME = 'mindcare-cache-v1';
const ASSETS_TO_CACHE = [
  'main_v2.html',
  'style.css',
  'script.js',
  'mindcare_icon.png',
  'https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700&display=swap'
];

// Install Event: Cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[Service Worker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

// Fetch Event: Network-first strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests for now
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If successful, clone response and update cache
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request);
      })
  );
});
