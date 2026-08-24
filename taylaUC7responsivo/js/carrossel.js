// Carrosel de Aulas
const imagens = document.querySelectorAll('.imagens-slide img');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const containerIndicadores = document.getElementById('indicadores');

let indiceAtual = 0;
let autoPlay;

function criarIndicadores() {
    imagens.forEach((_, index) => {
        const bolinha = document.createElement('div');
        bolinha.classList.add('bolinha');

        if (index === 0) bolinha.classList.add('ativa');

        bolinha.addEventListener('click', () => {
            indiceAtual = index;
            atualizar();
            resetAutoPlay();
        });

        containerIndicadores.appendChild(bolinha);
    });
}

function atualizar() {
    imagens.forEach(img => img.classList.remove('ativa'));
    imagens[indiceAtual].classList.add('ativa');

    const bolinhas = document.querySelectorAll('.bolinha');
    bolinhas.forEach(b => b.classList.remove('ativa'));
    bolinhas[indiceAtual].classList.add('ativa');
}

function next() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizar();
}

function prev() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizar();
}

function startAutoPlay() {
    autoPlay = setInterval(next, 4000);
}

function resetAutoPlay() {
    clearInterval(autoPlay);
    startAutoPlay();
}

btnNext.addEventListener('click', () => {
    next();
    resetAutoPlay();
});

btnPrev.addEventListener('click', () => {
    prev();
    resetAutoPlay();
});

document.querySelector('.cardAula-carrossel-container')
    .addEventListener('mouseenter', () => clearInterval(autoPlay));

document.querySelector('.cardAula-carrossel-container')
    .addEventListener('mouseleave', startAutoPlay);

criarIndicadores();
startAutoPlay();