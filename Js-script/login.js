
//ATRIBUTOS

const form = document.getElementById("iform");
const email = document.getElementById("iemail");
const password = document.getElementById("isenha");
const alerta = document.getElementById("alert");

const login = document.getElementById("ilogin");
const register = document.getElementById("iregistrar");

const abbr = document.getElementsByTagName("abbr")[0];
const abbr1 = document.getElementsByTagName("abbr")[1];
const link = document.getElementsByTagName("a")[0];


// METODOS 
// METODO VALIDAR CAMPOS
function valDadosCampoEmail(){
    msgErrorEmail();
}
function valDadosCampoSenha(){
    msgErrorSenha();
    buttonsDisable();
}


// HABILITANDO BOTOES
function buttonsDisable(){
    const emailVal = validarEmail();
    const senhaValida = validarSenha();
    login.disabled = !emailVal || !senhaValida;
}

function fazerLogin(){
    window.location.href="./index.html";
    
}


// VERIFICANDO ERROS
function msgErrorEmail() {
    const valorEmail = email.value;
    if(!valorEmail){
        abbr.style.display = "block";
        abbr.innerText = "Email invalido";
    }else {
        abbr.style.display = "none";
    }
}
function msgErrorSenha(){
    const valorSenha = password.value;
    if(!valorSenha){
        abbr1.style.display = "block";
        abbr1.innerText = "senha invalida";
    }else if(valorSenha.length < 8){
        abbr1.style.display = "block";
        abbr1.innerText = "Senha nao pode ser menor que 8 caracteres";
    } else {
        abbr1.style.display = "none";
    }
}

// VALIDANDO EMAIL E SENHA
function validarEmail(){
    const valorEmail = email.value;
    if (!valorEmail ){
        return false;
    }
    return true;
}
function validarSenha() {
    const valorSenha = password.value;
    if (!valorSenha){
        return false;
    }
    return true;
}

