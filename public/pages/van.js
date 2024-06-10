function infosUser() {
    const usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioLogado"));
  
    if (usuarioCadastrado) {
      const nome = document.getElementById("nomecadastro");
      const email = document.getElementById("emailcadastro");
  
      if (nome) {
        nome.innerText = usuarioCadastrado.nomeCompleto;
      }
  
      if (email) {
        email.innerText = usuarioCadastrado.email;
      }
    }
  }
  
  function telaSalvos() {
    window.location.href = "salvos.html";
  }
  
  function telaHome() {
    window.location.href = "../../index.html";
  }
  
  function telaPesquisa() {
    window.location.href = "./pesquisa.html";
  }
  
  function voltar() {
    window.history.back();
  }
  
  function deslogar() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
  }
  
  window.addEventListener("load", function () {
    document.addEventListener("click", function (event) {
      var elementoClicado = event.target;
      console.log("Elemento clicado: " + elementoClicado.tagName);
    });
  
    const salvosButton = document.getElementById("salvos");
    const homeButton = document.getElementById("home");
    const buscarButton = document.getElementById("buscar");
    const setaButton = document.getElementById("seta");
    const logoutButton = document.getElementById("logout");
  
    if (salvosButton) {
      salvosButton.addEventListener("click", telaSalvos);
    }
  
    if (homeButton) {
      homeButton.addEventListener("click", telaHome);
    }
  
    if (buscarButton) {
      buscarButton.addEventListener("click", telaPesquisa);
    }
  
    if (setaButton) {
      setaButton.addEventListener("click", voltar);
    }
  
    if (logoutButton) {
      logoutButton.addEventListener("click", deslogar);
    }
  
    infosUser();
  });
  