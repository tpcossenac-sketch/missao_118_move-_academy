function mostrarPagamento(tipo, elemento) {

    document.getElementById("cartao").style.display = "none";
    document.getElementById("pix").style.display = "none";
    document.getElementById("boleto").style.display = "none";

    document.getElementById(tipo).style.display = "block";

    const metodos = document.querySelectorAll(".metodo_ativo");

    metodos.forEach(item => {
        item.classList.remove("ativo");
    });

    elemento.classList.add("ativo");
}


const planos = {

    basico: {
        nome: "Plano Básico+",
        valor: "49,90",
        imagem: "img/PlanoBasico.png"
    },

    premium: {
        nome: "Plano Premium+",
        valor: "129,90",
        imagem: "img/PlanoPremium+.png"
    },

    vip: {
        nome: "Plano VIP+",
        valor: "199,90",
        imagem: "img/PlanoVIP+.png"
    }

};


// ===============================
// CARREGA O PLANO ESCOLHIDO
// ===============================

window.onload = function () {

    const planoEscolhido = localStorage.getItem("planoEscolhido") || "premium";

    const plano = planos[planoEscolhido];

    document.getElementById("imgPlano").src = plano.imagem;

    document.getElementById("nomePlano").textContent = plano.nome;

    document.getElementById("valorPlano").textContent =
        "Valor do plano: R$ " + plano.valor;

    document.getElementById("totalPlano").textContent =
        "Total: R$ " + plano.valor;

};


function gerarBoleto() {

    const planoEscolhido = localStorage.getItem("planoEscolhido");

    if (planoEscolhido == "basico") {

        window.open("img/boleto_basico.png", "_blank");

    } else if (planoEscolhido == "premium") {

        window.open("img/boleto_premium.png", "_blank");

    } else if (planoEscolhido == "vip") {

        window.open("img/boleto_vip.png", "_blank");

    } else {

        alert("Nenhum plano foi selecionado.");

    }

}

function finalizarPagamento() {

    localStorage.setItem("aluno", "true");

    window.location.href = "treinos.html";

}