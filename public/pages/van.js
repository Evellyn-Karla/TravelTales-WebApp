function infosUser(){
    var usuarioCadastrado = JSON.parse(localStorage.getItem('usuario'));

    const nome = document.getElementById('nome')
    nome.innerText = usuarioCadastrado.nomeCompleto;

    const email = document.getElementById('email')
    email.innerText = usuarioCadastrado.email
}

infosUser();


function telaSalvos(){
    window.location.href = 'salvos.html'
}
function telaHome(){
    window.location.href = '../../index.html'
}
function telaPesquisa(){
    window.location.href = 'public/pages/pesquisa.html'
}

function voltar() {
    window.history.back();
}



document.getElementById('salvos').addEventListener('click', telaSalvos)
document.getElementById('home').addEventListener('click', telaHome)
document.getElementById('buscar').addEventListener('click', telaPesquisa)
document.getElementById('seta').addEventListener('click', voltar)

