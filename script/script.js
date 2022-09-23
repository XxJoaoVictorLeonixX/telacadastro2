let btn = document.querySelector('#verConfirmPassword');

btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#password');

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

let btnConfirm = document.querySelector('#verConfirmPassword');

btnConfirm.addEventListener('click',()=>{
    let inputConfirmPassword = document.querySelector('#confirmpassword');

    if(inputConfirmPassword.getAttribute('type') == 'password'){
        inputConfirmPassword.setAttribute('type', 'text')
    }else{
        inputConfirmPassword.setAttribute('type', 'password')
    }
})