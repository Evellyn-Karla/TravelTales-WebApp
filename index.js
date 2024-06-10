function seeInfo(){
    window.location.href = "public/pages/julia.html"
}


window.addEventListener('load', function() {
    var usuarioCadastrado = localStorage.getItem('usuario');
    if (!usuarioCadastrado) {
        window.location.href = 'public/pages/login.html';
    } else {
        document.querySelector('body').style.display = "block";
    }
    // Adicione os ouvintes de eventos após garantir que o DOM esteja carregado
    document.getElementById('salvos').addEventListener('click', telaSalvos);
    document.getElementById('buscar').addEventListener('click', telaPesquisa);
    document.getElementById('perfil').addEventListener('click', telaPerfil);

    
    document.getElementById('perfil-info').addEventListener('click', seeInfo)
});

function telaPerfil(){
    window.location.href = 'public/pages/van.html';
}
function telaSalvos(){
    window.location.href = 'public/pages/salvos.html';
}
function telaPesquisa(){
    window.location.href = 'public/pages/pesquisa.html';
}

function voltar() {
    window.history.back();
}
