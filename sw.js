const CACHE_NAME = 'esperanza-en-la-palabra-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/images/phrase1.webp',
  '/images/phrase2.webp',
  '/images/phrase3.webp',
  '/images/post1.webp',
  '/images/post2.webp',
  '/images/video1-thumb.webp',
  '/images/video2-thumb.webp',
  '/images/og-image.webp',
  '/images/favicon.ico',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.notification.body,
    icon: 'images/favicon.ico',
    badge: 'images/favicon.ico'
  };
  event.waitUntil(
    self.registration.showNotification(data.notification.title, options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://tu-usuario.github.io/esperanza-en-la-palabra/')
  );
});