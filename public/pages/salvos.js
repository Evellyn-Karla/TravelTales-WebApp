
function telaPerfil(){
    window.location.href = 'public/pages/van.html'
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

document.getElementById('home').addEventListener('click', telaHome)
document.getElementById('buscar').addEventListener('click', telaPesquisa)
document.getElementById('perfil').addEventListener('click', telaPerfil)
document.getElementById('seta').addEventListener('click', voltar)

