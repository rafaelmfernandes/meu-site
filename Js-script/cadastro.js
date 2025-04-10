const form = document.getElementById("iform");
const email = document.getElementById("iemail");
const password = document.getElementById("isenha");

const alerta = document.getElementById("alert");

/*
alerta.style.display = 'block'
alerta.innerText = 'Nao esta acreditando?'
*/

form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    checkInputUsername();
})
function checkInputUsername(){
    const valorEmail = email.value;
    const valorSenha = password.value;

    const texto = document.createTextNode("Campo Email vazio.");
    const texto2 = document.createTextNode("Campo senha vazio");

    if (valorEmail == "" && valorSenha =="" ){
        alerta.innerText = 'Por favor ensira logine senha!';
        email.style.border = "1px solid red";
        password.style.border = "1px solid red";
    } else if (valorEmail == ""){
       alerta.innerText = 'Campo email vazio';
       email.style.border = "1px solid red";
    } else if (valorSenha ==""){
        alerta.innerText = 'Campo senha vazio';
    }else {
        alerta.innerText = 'login efetuado com sucesso!';
        email.style.border = "none";
    }
    //console.log(valorUsername)
    //console.log(valorSenha) ------- comando para mostrar no console
}
/*
function errorMsg(input, alerta){
    const formItem = input.parentElement;
    const textMenssage = formItem.querySelector("div#alerta");

    textMenssage.innerText = 'campo vazio'; 
}
*/