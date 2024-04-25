window.addEventListener('load', function() {
    var usuarioCadastrado = localStorage.getItem('usuario');
    if (!usuarioCadastrado) {
        window.location.href = 'public/pages/login.html';
    }else{
        this.document.querySelector('body').style.display = "block";
    }
});


