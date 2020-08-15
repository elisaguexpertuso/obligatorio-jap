//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const email = document.getElementById("email");
const password = document.getElementById("password")
const form = document.getElementById("mi_formulario")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings =""
  let entrar=false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  parrafo.innerHTML= ""

  if(!regexEmail.test(email.value)){
    warnings += `Ingresar email <br>`
    entrar = true
}
  if(password.value.length <1){
    warnings += `Ingresar contraseña <br>`
    entrar = true
  }

  if (entrar){
    parrafo.innerHTML = warnings
  } else{
            window.location.href = "ex-index.html";
    };
     
  
});