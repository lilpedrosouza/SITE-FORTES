document.addEventListener("DOMContentLoaded", function () {
  const data = document.querySelector(".date");
  const dataAtual = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const dataFormatada = dataAtual.toLocaleDateString("pt-BR", options);
  data.textContent = dataFormatada;
});

document.addEventListener("DOMContentLoaded", function () {
  const cafe = document.querySelectorAll(".cafe");
  const almoco = document.querySelectorAll(".almoco");
  const jantar = document.querySelectorAll(".jantar");
  const dataAtual = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const dataFormatada = dataAtual.toLocaleDateString("pt-BR", options);

  cafe.forEach((cafe) => {
    cafe.textContent = "Café da manhã - (" + dataFormatada + ")";
  });

  almoco.forEach((almoco) => {
    almoco.textContent = "Almoço - (" + dataFormatada + ")";
  });

  jantar.forEach((jantar) => {
    jantar.textContent = "Jantar - (" + dataFormatada + ")";
  });
});

function ativar() {
  const notification = document.querySelector('.notification');
  const notificationError = document.querySelector('.notificationError');
  var grupos = document.querySelectorAll('.cBox1, .cBox2, .cBox3');
  var todosSelecionados = true;

  grupos.forEach(function (grupo) {
      var radioInputs = grupo.querySelectorAll('input[type="radio"]');
      var algumSelecionado = false;

      for (var i = 0; i < radioInputs.length; i++) {
          if (radioInputs[i].checked) {
              algumSelecionado = true;
              break;
          }
      }

      if (!algumSelecionado) {
          todosSelecionados = false;
      }
  });

  if (todosSelecionados) {
    notification.style.display = 'block';
    setTimeout(function () {
        notification.style.display = 'none';
    }, 3250);
    notificationError.style.display = 'none';
} else {
    notificationError.style.display = 'block';
    setTimeout(function () {
        notificationError.style.display = 'none';
    }, 3250);
    notification.style.display = 'none';
}
}

