function mostrarSenha() {
  var senhaInput = document.getElementById("senha");
  var eyeIconOpen = document.querySelector(".bi-eye");
  var eyeIconClosed = document.querySelector(".bi-eye-slash");

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

function validacao() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let logar = document.getElementById("login");

  if (email == "" || senha == "") {
    alert("Preencha todos os campos!");
    logar.disabled = true;
    return false;
  }

  if (email === "cliente@fortes.com.br" && senha === "123456") {
    window.location.href = "../SolitictarRef/Colaborador.html";
    return false;
  } else {
    alert("Usuário ou senha incorretos!");
    logar.disabled = true;
    return false;
  }
}


