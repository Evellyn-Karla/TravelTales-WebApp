function telaPerfil(){
    window.location.href = 'van.html'
}
function telaSalvos(){
    window.location.href = 'salvos.html'
}
function telaHome(){
    window.location.href = '../../index.html'
}

function voltar() {
    window.history.back();
}



document.getElementById('salvos').addEventListener('click', telaSalvos)
document.getElementById('home').addEventListener('click', telaHome)
document.getElementById('perfil').addEventListener('click', telaPerfil)
document.getElementById('seta').addEventListener('click', voltar)


