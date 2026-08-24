const CACHE_NAME = "move-plus-v1";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./aulas.html",
    "./planos.html",
    "./treinos.html",
    "./unidades.html",
    "./login.html",
    "./cadastro.html",
    "./pagamento.html",

    "./css/style.css",

    "./js/script.js",
    "./js/main.js",
    "./js/carrossel.js",
    "./js/pagamento.js",

    "./manifest.json",

    "./img/logo2.png",
    "./img/+.png"
];


// INSTALAÇÃO
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ARQUIVOS);
            })
            .then(() => self.skipWaiting())
    );
});


// ATIVAÇÃO
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(chaves => {
                return Promise.all(
                    chaves
                        .filter(chave => chave !== CACHE_NAME)
                        .map(chave => caches.delete(chave))
                );
            })
            .then(() => self.clients.claim())
    );
});


// BUSCA DOS ARQUIVOS
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(resposta => {
                return resposta || fetch(event.request);
            })
    );
});