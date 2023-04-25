const name = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault();
    let entrar = false;
    let formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    if(name.value === null || name.value === ''){
        alert(`El nombre no es valido`);
        entrar = true;
    }
    else if(name.value.length <= 1){
        alert(`El nombre es demasiado corto`);
        entrar = true;
    }

    if(!formatEmail.test(email.value)){
        alert(`El email no es valido`);
        entrar = true;
    }
    if(pass.value === null || pass.value === ''){
       alert(`La contraseña no es valida`);
        entrar = true;
    }

    if(!entrar){
        alert("bienvenido usuario");
        setTimeout(function() { window.location.href = "../index.html"; }, 1000 );
    }
})