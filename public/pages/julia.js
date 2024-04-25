function telaPerfil(){
    window.location.href = 'van.html'
}
function telaSalvos(){
    window.location.href = 'salvos.html'
}
function telaPesquisa(){
    window.location.href = 'pesquisa.html'
}

function voltar() {
    window.history.back();
}

document.getElementById('salvos').addEventListener('click', telaSalvos)
document.getElementById('buscar').addEventListener('click', telaPesquisa)
document.getElementById('perfil').addEventListener('click', telaPerfil)
document.getElementById('seta').addEventListener('click', voltar)
