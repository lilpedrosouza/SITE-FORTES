document.addEventListener("DOMContentLoaded", function() {
    const id = document.getElementById('senha');

    id.addEventListener("input", () => {
        const idValue = id.value;
        if (!/^[0-9]*$/.test(idValue)) {
            id.value = idValue.replace(/[^0-9]/g, "");
        }
    });
});

function confirmacao() {
    var senha1 = document.getElementById("senha1").value;
    var senha2 = document.getElementById("senha2").value;

    if (senha1 == "" || senha2 == "") {
        alert("Coloque uma senha!");
        return false;
    }
  
    if (senha1 != senha2) {
        alert("Senhas não conferem!");
        return false;
    } else {
        alert("Senha alterada com sucesso!");
        return true;
    }
  }
  
  function confirmacao1() {
    var id = document.getElementById("id").value;
    var email = document.getElementById("email").value;

    if (id == "" || email == "") {
        alert("Preencha todos os campos!");
        return false;
    }
  }
  
  