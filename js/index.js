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

    if((Nome.value != '') && (Email.value != '') && (Mensagem.value != '')){
        inserirMensagem(mensagem);
    } else {
        alert("Informações inválidas ou vazias!");
    }

    
}


function Autenticar(){
    var dados = {
        'email': Email.value,
        'senha': Senha.value
    }

    var retorno = validarUsuario(dados);

    if(retorno == true){
        window.open('mensagem.html');
    } else {
        alert("Usuário ou senha errados!");
    }   
}

const receberMensagem = obterMensagens();

receberMensagem.forEach(element => {
    let mensagens = document.getElementById('mensagens');   

    let tr = mensagens.insertRow();

    let td_id = tr.insertCell();
    let td_nome = tr.insertCell();
    let td_email = tr.insertCell();
    let td_mensagem = tr.insertCell();


    td_id.innerText = element.id;
    td_nome.innerText = element.nome;
    td_email.innerText = element.email;
    td_mensagem.innerText = element.mensagem;
});