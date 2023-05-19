var Nome = document.getElementById("formNome");
var Email = document.getElementById("formEmail");
var Senha = document.getElementById("formSenha");
var Mensagem = document.getElementById("formMensagem");

var btnEnvio = document.getElementById("btnEnvio");

function addMensagem(){
    var mensagem = {
        'nome': Nome.value,
        'email': Email.value,
        'mensagem': Mensagem.value
    }

    inserirMensagem(mensagem);
}


function Autenticar(){
    var dados = {
        'email': Email.value,
        'senha': Senha.value
    }

    var retorno = validarUsuario(dados);

    alert(retorno);

    if(retorno == true){
        window.open('mensagem.html');
    } else {
        alert("Usuário ou senha errados!");
    }   
}