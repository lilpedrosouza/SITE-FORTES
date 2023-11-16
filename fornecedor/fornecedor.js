document.addEventListener("DOMContentLoaded", function () {
  const data = document.querySelector(".date");
  const dataAtual = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const dataFormatada = dataAtual.toLocaleDateString("pt-BR", options);
  data.textContent = dataFormatada;

  calcularTotalEExibir();
});

function confirmar(botaoNumero) {
  const btnConfirmar = document.getElementById('btnConfirmar' + botaoNumero);

  btnConfirmar.style.backgroundColor = '#d1d1d1';
  btnConfirmar.style.color = 'red';
  btnConfirmar.style.pointerEvents = 'none';
  btnConfirmar.style.cursor = 'default';

  btnConfirmar.querySelector('span').textContent = 'Entrega Realizada';

  const notification = document.getElementById('notification');
  notification.style.display = 'block';

  setTimeout(function () {
    notification.style.display = 'none';
  }, 3250);
}

  function calcularTotalEExibir() {
    const precoMarmitaSelfService = 17;
    const cafeConsumidores = 100;
    const almocoConsumidores = 110;
    const jantarConsumidores = 120;

    const cafeMarmita = 70;
    const cafeSelfService = 20;
    const cafeNenhum = 10;

    const almocoMarmita = 70;
    const almocoSelfService = 20;
    const almocoNenhum = 20;

    const jantarMarmita = 70;
    const jantarSelfService = 30;
    const jantarNenhum = 20;

    const totalCafe = (cafeMarmita + cafeSelfService) * precoMarmitaSelfService;
    const totalAlmoco = (almocoMarmita + almocoSelfService) * precoMarmitaSelfService;
    const totalJantar = (jantarMarmita + jantarSelfService) * precoMarmitaSelfService;

    document.querySelector('.total1').textContent = `Total a receber: R$ ${totalCafe.toFixed(2)}`;
    document.querySelector('.total2').textContent = `Total a receber: R$ ${totalAlmoco.toFixed(2)}`;
    document.querySelector('.total3').textContent = `Total a receber: R$ ${totalJantar.toFixed(2)}`;
  }

