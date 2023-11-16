function voltar(){
    window.history.back();
}

function confirmar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const problema = document.getElementById("problema").value;

    if (nome === "" || email === "" || problema === "") {
        alert("Por favor, preencha todos os campos!");
        event.preventDefault();
    } else if (nome === "" || email === "" || problema.length < 35) {
        alert("Por favor, detalhe mais o problema!");
        event.preventDefault();
    } else {
        alert("Pedido de suporte enviado com sucesso!")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("problema");
    const contadorCaracteres = document.getElementById("contador-caracteres");
  
    textarea.addEventListener("input", function () {
      const caracteresRestantes = Math.max(0, 35 - textarea.value.length);
      contadorCaracteres.textContent = caracteresRestantes + "/35";
  
      if (caracteresRestantes > 0) {
        contadorCaracteres.classList.add("aviso");
        contadorCaracteres.style.display = "block"
      } else {
        contadorCaracteres.classList.remove("aviso");
        contadorCaracteres.style.display = "none"
      }
    });
  });
  