const getLocalStorage = () => JSON.parse(localStorage.getItem('usuarios')) || [];

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

    const usuarios = getLocalStorage();
    console.log('usuarios', usuarios)
    usuarios.push(usuario)
    // Armazena os dados do usuário no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    mostrarMensagem('Cadastro realizado com sucesso!');
    document.getElementById('infosCad').reset();

    backLogin();
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
        mensagem.style.display = 'none';
    }, tempoVisivel);
}


document.getElementById('infos').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém as credenciais fornecidas
    var nomeOuEmail = document.getElementById('nomeOuEmail').value;
    var senha = document.getElementById('senhaLog').value;

    const log = []
    log.push({nomeOuEmail, senha})
    // Obtém o usuário cadastrado no localStorage
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));

    // Verifica se o usuário existe e se as credenciais coincidem
    if (usuarios) {
        usuarios.forEach(element => {
            if ((nomeOuEmail === element.username || nomeOuEmail === element.email) && (senha === element.senha)) {
                mostrarMensagem('Login bem-sucedido!');
                window.location.href = '../../index.html';
                localStorage.setItem('usuarioLogado', JSON.stringify(element))
            }
        });
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

