document.addEventListener("DOMContentLoaded", function () {
  const id = document.getElementById("idEmpresa");

  id.addEventListener("input", () => {
    const idValue = id.value;
    if (!/^[0-9]*$/.test(idValue)) {
      id.value = idValue.replace(/[^0-9]/g, "");
    }
  });
});

function mostrarSenha(senhaId) {
  var senhaInput = document.getElementById(senhaId);
  var eyeIconOpen = senhaInput.nextElementSibling.querySelector(".bi-eye");
  var eyeIconClosed = senhaInput.nextElementSibling.querySelector(".bi-eye-slash");

  if (senhaInput.type === "password") {
      senhaInput.type = "text";
      eyeIconOpen.style.display = "none";
      eyeIconClosed.style.display = "inline";
  } else {
      senhaInput.type = "password";
      eyeIconOpen.style.display = "inline";
      eyeIconClosed.style.display = "none";
  }
}


document.getElementById("cpf").addEventListener("input", function (event) {
  let inputValue = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  if (inputValue.length > 3) {
    inputValue = inputValue.substring(0, 3) + "." + inputValue.substring(3);
  }
  if (inputValue.length > 7) {
    inputValue = inputValue.substring(0, 7) + "." + inputValue.substring(7);
  }
  if (inputValue.length > 11) {
    inputValue = inputValue.substring(0, 11) + "-" + inputValue.substring(11);
  }
  event.target.value = inputValue;
});

function cadastrar() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var idEmpresa = document.getElementById("idEmpresa").value;
    var senha2 = document.getElementById("senha2").value;

    if (nome != "" && sobrenome != "" && cpf != "" && email != "" && senha != "" && idEmpresa != "" && senha2 != "" && senha == senha2) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
        return false;
      } 

      if (nome === "" && sobrenome === "" && cpf === "" && email === "" && senha === "" && idEmpresa === "" && senha2 === "" && senha === "" && senha2 === "") {
        alert("Preencha os campos!");
        return false;
      } 

  if (senha != senha2) {
    alert("Senhas não coincidem!");
    return false;
  }
}
