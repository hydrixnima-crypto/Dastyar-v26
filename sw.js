const C="dastyar-v26";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","manifest.webmanifest","css/app.css","fonts/Vazirmatn.woff2","js/icons.js","js/strings.js","js/core.js","js/local.js","js/calc.js","js/pages1.js","js/pages2.js","js/pages3.js","js/float.js","js/app.js"]).catch(()=>{})))});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request)))});
