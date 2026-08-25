window.addEventListener("DOMContentLoaded", function () {

    const aluno = localStorage.getItem("aluno");

    const menuPlanos = document.getElementById("menuPlanos");
    const menuUnidades = document.getElementById("menuUnidades");
    const menuTreinos = document.getElementById("menuTreinos");

    if (!menuPlanos || !menuUnidades || !menuTreinos) return;

    if (aluno === "true") {

        menuPlanos.style.display = "none";
        menuUnidades.style.display = "none";
        menuTreinos.style.display = "block";

    } else {

        menuPlanos.style.display = "block";
        menuUnidades.style.display = "block";
        menuTreinos.style.display = "none";

    }

});

const menuMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./sw.js")
            .then(() => {
                console.log("Service Worker registrado com sucesso!");
            })
            .catch(erro => {
                console.error("Erro ao registrar o Service Worker:", erro);
            });
    });
}