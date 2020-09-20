//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const form = document.getElementById("mi_formulario")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  e.preventDefault()
  let warnings =""
  let entrar=false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  parrafo.innerHTML= ""

  if(!regexEmail.test(email)){
    warnings += `Ingresar email <br>`
    entrar = true
}
  if(password.length <1){
    warnings += `Ingresar contraseña <br>`
    entrar = true
  }

  if (entrar){
    parrafo.innerHTML = warnings
  } else{
      sessionStorage.setItem("Usuario activo",email);
           window.location.href = "ex-index.html";
    };
});
