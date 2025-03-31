const CACHE_NAME = `Strategies obliques`;

// Use the install event to pre-cache all initial resources.
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll([
        "./",
        "./index.html",
        "./script.js",
        "./style.css",
        "./explications.html",
        "./explications.css",
        "./assets",
        "./assets/loader.svg",
        "./assets/logo.webp",
        "./assets/oblique-strategies.pdf",
        "/assets/favicons",
        "/public/android-icon-36x36.png",
        "/public/android-icon-48x48.png",
        "/public/android-icon-72x72.png",
        "/public/android-icon-96x96.png",
        "/public/android-icon-144x144.png",
        "/public/android-icon-192x192.png",
        "/public/favicon.jpg",
      ]);
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // Get the resource from the cache.
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed
        }
      }
    })()
  );
});
