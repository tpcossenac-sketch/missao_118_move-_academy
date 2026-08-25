window.addEventListener("DOMContentLoaded", function () {

    const aluno = localStorage.getItem("aluno");

    const menuPlanos = document.getElementById("menuPlanos");
    const menuUnidades = document.getElementById("menuUnidades");
    const menuTreinos = document.getElementById("menuTreinos");

    if (menuPlanos && menuUnidades && menuTreinos) {

        if (aluno === "true") {

            menuPlanos.style.display = "none";
            menuUnidades.style.display = "none";
            menuTreinos.style.display = "block";

        } else {

            menuPlanos.style.display = "block";
            menuUnidades.style.display = "block";
            menuTreinos.style.display = "none";

        }

    }


    // MENU MOBILE

    const menuMobile = document.getElementById("menu-mobile");
    const menu = document.getElementById("menu");

    if (menuMobile && menu) {

        // Clique com mouse
        menuMobile.addEventListener("click", function () {
            menu.classList.toggle("ativo");
        });


        // EVENTO DE TOQUE 1
        menuMobile.addEventListener("touchstart", function () {
            menuMobile.style.transform = "scale(0.9)";
        });


        // EVENTO DE TOQUE 2
        menuMobile.addEventListener("touchend", function () {

            menuMobile.style.transform = "scale(1)";
            menu.classList.toggle("ativo");

        });

    }

});


// SERVICE WORKER

if ("serviceWorker" in navigator) {

    window.addEventListener("load", function () {

        navigator.serviceWorker
            .register("./sw.js")
            .then(function () {

                console.log("Service Worker registrado com sucesso!");

            })
            .catch(function (erro) {

                console.error(
                    "Erro ao registrar o Service Worker:",
                    erro
                );

            });

    });

}