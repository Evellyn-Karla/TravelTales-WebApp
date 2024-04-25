window.addEventListener('load', function() {
    var usuarioCadastrado = localStorage.getItem('usuario');
    if (!usuarioCadastrado) {
        window.location.href = 'public/pages/login.html';
    }else{
        this.document.querySelector('body').style.display = "block";
    }
});

function telaPerfil(){
    window.location.href = 'public/pages/van.html'
}
function telaSalvos(){
    window.location.href = 'public/pages/van.html'
}
function telaPesquisa(){
    window.location.href = 'public/pages/pesquisa.html'
}



document.getElementById('salvos').addEventListener('click', telaSalvos)
document.getElementById('buscar').addEventListener('click', telaPesquisa)
document.getElementById('perfil').addEventListener('click', telaPerfil)


document.getElementById('pesquisar').addEventListener('click', telaPesquisa)


