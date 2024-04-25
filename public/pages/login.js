
document.getElementById('infosCad').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores do formulário
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('nomeUser').value;
    var senha = document.getElementById('senhaCad').value;
    var confirmarSenha = document.getElementById('senhaConf').value;

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, insira senhas iguais.');
        return;
    }

    // Cria um objeto com os dados do usuário
    var usuario = {
        nomeCompleto: nomeCompleto,
        email: email,
        username: username,
        senha: senha
    };

    // Armazena os dados do usuário no localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    mostrarMensagem('Cadastro realizado com sucesso!');

    backLogin();
    document.getElementById('infosCad').reset();
});

function mostrarMensagem(texto) {
    // Mostrar a mensagem de cadastro bem-sucedido
    var mensagem = document.getElementById('mensagem');

    mensagem.innerText = texto;
    mensagem.style.display = 'block';

    // Definir o tempo em milissegundos que a mensagem ficará visível (por exemplo, 3 segundos)
    var tempoVisivel = 3000; // 3 segundos

    // Esconder a mensagem após o tempo especificado
    setTimeout(function () {
        mensagemCadastroSucesso.style.display = 'none';
    }, tempoVisivel);
}


document.getElementById('infos').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém as credenciais fornecidas
    var nomeOuEmail = document.getElementById('nomeOuEmail').value;
    var senha = document.getElementById('senhaLog').value;

    // Obtém o usuário cadastrado no localStorage
    var usuarioCadastrado = JSON.parse(localStorage.getItem('usuario'));

    // Verifica se o usuário existe e se as credenciais coincidem
    if (usuarioCadastrado &&
        (nomeOuEmail === usuarioCadastrado.username || nomeOuEmail === usuarioCadastrado.email) &&
        senha === usuarioCadastrado.senha) {
        mostrarMensagem('Login bem-sucedido!');
        window.location.href = '../../index.html';

    } else {
        mostrarMensagem('Nome de usuário/email ou senha incorretos.')
        
    }
});


function openModalCad() {
    const log = document.getElementById("loginT")
    log.style.display = "none"

    const modal = document.getElementById("modalCad")
    modal.style.display = "flex";
}


function backLogin() {
    const log = document.getElementById("loginT")
    log.style.display = "flex"

    const modal = document.getElementById("modalCad")
    modal.style.display = "none";
}

document.getElementById("abrirCad").addEventListener('click', function (event) {
    event.preventDefault();
    openModalCad()
});

document.getElementById('backBtn').addEventListener('click', backLogin)

