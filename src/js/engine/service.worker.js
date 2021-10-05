/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
const version = 'v1';
const cacheName = `ahj-${version}`;
const files = ['./', './index.html', './main.js', './main.css'];

self.addEventListener('install', (event) => {
  console.log('SW Installed. Cache name:', cacheName);
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(files))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', () => {
  console.log('SW activated');
});

self.addEventListener('fetch', (event) => {
  console.log('SW fetchin:', event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});