const CACHE = '100run-v5';
const ASSETS = ['./', './index.html', './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('script.google.com')) return;
  if (url.endsWith('/') || url.includes('index.html') || url.endsWith('100run/')) {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res && res.status === 200) { const c = res.clone(); caches.open(CACHE).then(cache=>cache.put(e.request,c)); }
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const c = res.clone(); caches.open(CACHE).then(cache=>cache.put(e.request,c));
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
