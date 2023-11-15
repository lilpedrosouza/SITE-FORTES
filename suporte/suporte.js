function voltar(){
    window.history.back();
}

function confirmar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const problema = document.getElementById("problema").value;

    if (nome === "" || email === "" || problema === "") {
        alert("Por favor, preencha todos os campos!");
        event.preventDefault();{}
    } else if (nome === "" || email === "" || problema.length < 35){
        alert("Por favor, descreva mais o problema (Mínimo 35 caracteres).");
        event.preventDefault();
    } else {
        alert("Pedido de suporte enviado com sucesso!")
    }
}