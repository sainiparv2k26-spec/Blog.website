const CACHE_NAME = "yyc-daily-v1";
const urlsToCache = [
  "/Blog.website/",
  "/Blog.website/index.html",
  "/Blog.website/style.css",
  "/Blog.website/script.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});