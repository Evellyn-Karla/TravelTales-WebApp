function infosUser() {
    var usuarioCadastrado = JSON.parse(localStorage.getItem('usuario'));

    const nome = document.getElementById('nomecadastro')
    nome.innerText = usuarioCadastrado.nomeCompleto;

    const email = document.getElementById('emailcadastro')
    email.innerText = usuarioCadastrado.email
}

infosUser();


function telaSalvos() {
    window.location.href = 'salvos.html'
}
function telaHome() {
    window.location.href = '../../index.html'
}
function telaPesquisa() {
    window.location.href = 'public/pages/pesquisa.html'
}

function voltar() {
    window.history.back();
}

function deslogar() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = "login.html"
}

document.addEventListener('click', function(event) {
    // Acessa o elemento clicado através da propriedade target do evento
    var elementoClicado = event.target;
    
    // Exibe o tipo do elemento clicado
    console.log('Elemento clicado: ' + elementoClicado.tagName);
  });

document.getElementById('salvos').addEventListener('click', telaSalvos)
document.getElementById('home').addEventListener('click', telaHome)
document.getElementById('buscar').addEventListener('click', telaPesquisa)
document.getElementById('seta').addEventListener('click', voltar)

document.getElementById('logout').addEventListener('click', deslogar)

