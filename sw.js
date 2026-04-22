"use strict";

const CACHE_NAME = "yyc-daily-v1";
const STATIC_CACHE = "yyc-static-v1";

const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./IMG_0079.jpeg",
  "./IMG_0086.jpeg",
  "./IMG_0093.jpeg"
];

// INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE && key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// FETCH (network-first for HTML, cache-first for assets)
self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  // HTML → Network first (fresh content)
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, copy);
          });
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Assets → Cache first
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          const copy = response.clone();
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, copy);
          });

          return response;
        })
        .catch(() => {
          return new Response("", { status: 404 });
        });
    })
  );
});