// ─────────────────────────────────────────────────────────────
//  TrackR Service Worker
//  ⚠️  Bump CACHE_VERSION every time you deploy a new build.
//      Change v1 → v2 → v3 etc. This is the only thing you
//      need to touch to push an update to installed phones.
// ─────────────────────────────────────────────────────────────
const CACHE_VERSION = 'v1';
const CACHE_NAME    = `trackr-${CACHE_VERSION}`;

// Files to pre-cache on install (the app shell)
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// ── Install: pre-cache the app shell ──────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())   // activate immediately
  );
});

// ── Activate: delete old caches ───────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('trackr-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())  // take control of all open tabs
  );
});

// ── Fetch: Network-first for API/Supabase calls,
//           Cache-first for the app shell ─────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always go to the network for:
  //   • Supabase  (your database)
  //   • Google Apps Script proxy (price fetching)
  //   • Any cross-origin request
  const isExternal =
    url.hostname.includes('supabase.co')      ||
    url.hostname.includes('script.google.com') ||
    url.hostname.includes('googleapis.com')   ||
    url.origin !== self.location.origin;

  if (isExternal || event.request.method !== 'GET') {
    // Network only — never cache API calls
    event.respondWith(fetch(event.request));
    return;
  }

  // For the app shell: Cache-first, fall back to network
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache a copy of any new shell assets we fetch
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
