//CAPITURAR EVENTO DE SUBMIT NO FORMULARIO 

const form = document.querySelector('#iform');

form.addEventListener('submit', function (e) {
    e.preventDefault();

});
function loadPage(){
    window.location.href='index.html';
}

function dadosEmail(){
    msgErrorEmail();
    toggleEmail();
}
function dadosSenha(){
    msgErrorSenha();
    toggleEmail();
}

function msgErrorEmail(){
    const valEmail = !validarEmail();
    const abbr = document.getElementsByTagName('abbr')[0];

    if(!valEmail){
        abbr.style.display = 'block';
        abbr.innerText = "Email invalido!";
    }else {
        abbr.style.display='none';
    }
}
function msgErrorSenha(){
    const valSenha = !validarSenha();
    const abbr1 = document.getElementsByTagName('abbr')[1];

    if(!valSenha){
        abbr1.style.display = 'block';
        abbr1.innerText = "Campo senha vazio!";
    }else {
        abbr1.style.display='none';
    }
}


function toggleEmail(){
    const valEmail = validarEmail();
    const valSenha = validarSenha();
    const btlogin = document.querySelector('#ilogin').disabled = valEmail && validarSenha;
}


function validarEmail (){
    const msgEmail = document.querySelector('#iemail').value;
    if(!msgEmail){
        return true;
    }
    return false;
}
function validarSenha (){
    const msgSenha = document.querySelector('#isenha').value;
    if(!msgSenha){
        return true;
    }
    return false;
}


