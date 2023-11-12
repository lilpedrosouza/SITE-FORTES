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