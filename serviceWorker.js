self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pokeroutes-cache").then(cache => {
      return cache.addAll([
        "/",
        "./src/scripts/main.js",
        "./src/scripts/locations.js",
        "./src/styles/styles.css",
        "./public/icons/144x144.png",
        "./public/icons/192x192.png",
        "./public/icons/512x512.png",
        "./public/flags/argentina.svg",
        "./public/flags/australia.svg",
        "./public/flags/azerbaijan.svg",
        "./public/flags/brazil.svg",
        "./public/flags/canada.svg",
        "./public/flags/canary islands.svg",
        "./public/flags/cape verde.svg",
        "./public/flags/chile.svg",
        "./public/flags/cuba.svg",
        "./public/flags/dominican republic.svg",
        "./public/flags/france.svg",
        "./public/flags/germany.svg",
        "./public/flags/greece.svg",
        "./public/flags/hungary.svg",
        "./public/flags/iceland.svg",
        "./public/flags/india.svg",
        "./public/flags/indonesia.svg",
        "./public/flags/ireland.svg",
        "./public/flags/israel.svg",
        "./public/flags/italy.svg",
        "./public/flags/japan.svg",
        "./public/flags/kenya.svg",
        "./public/flags/kiribati.svg",
        "./public/flags/mexico.svg",
        "./public/flags/new zealand.svg",
        "./public/flags/oman.svg",
        "./public/flags/paraguay.svg",
        "./public/flags/portugal.svg",
        "./public/flags/russia.svg",
        "./public/flags/samoa.svg",
        "./public/flags/singapore.svg",
        "./public/flags/south africa.svg",
        "./public/flags/south korea.svg",
        "./public/flags/spain.svg",
        "./public/flags/taiwan.svg",
        "./public/flags/turkey.svg",
        "./public/flags/turkmenistan.svg",
        "./public/flags/uk.svg",
        "./public/flags/united arab emirates.svg",
        "./public/flags/united states.svg",
        "./public/flags/uruguay.svg",
        "./public/flags/venezuela.svg"
      ])
    })
  )
})

self.addEventListener('message', e => {
  if (e.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})