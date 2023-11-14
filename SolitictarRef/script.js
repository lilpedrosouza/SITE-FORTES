document.addEventListener("DOMContentLoaded", function() {
    const data = document.querySelector(".date");
    const dataAtual = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);
    data.textContent = dataFormatada;
});

document.addEventListener("DOMContentLoaded", function() {
    const cafe = document.querySelectorAll(".cafe");
    const almoco = document.querySelectorAll(".almoco");
    const jantar = document.querySelectorAll(".jantar");
    const dataAtual = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);

    cafe.forEach(cafe => {
        cafe.textContent = "Café da manhã - (" + dataFormatada + ")";
    });

    almoco.forEach(almoco => {
        almoco.textContent = "Almoço - (" + dataFormatada + ")";
    });

    jantar.forEach(jantar => {
        jantar.textContent = "Jantar - (" + dataFormatada + ")";
    });
});


