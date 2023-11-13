document.addEventListener("DOMContentLoaded", function() {
    const dataElement = document.querySelector(".date");
    const dataAtual = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);
    dataElement.textContent = dataFormatada;
});