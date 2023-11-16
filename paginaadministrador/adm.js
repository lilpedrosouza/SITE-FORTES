document.addEventListener("DOMContentLoaded", function () {
  const data = document.querySelector(".date");
  const dataAtual = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const dataFormatada = dataAtual.toLocaleDateString("pt-BR", options);
  data.textContent = dataFormatada;
});

document.addEventListener("DOMContentLoaded", function () {
  const relatorio = document.querySelectorAll(".relatorioData");
  const dataAtual = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const dataFormatada = dataAtual.toLocaleDateString("pt-BR", options);

  relatorio.forEach((relatorioData) => {
    relatorioData.textContent = "Data: "+ dataFormatada;
  });
});
