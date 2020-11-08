
function formulario1 (){
let formulario = {
    "nombre": document.getElementById("nombre").value, 
    "edad": document.getElementById("edad").value,
    "email": document.getElementById("email").value,
    "telefono": document.getElementById("telefono").value,
  }
  
  var nombre = validarNombre(document.getElementById("nombre").value);
  var edad = validarEdad();
  var email = validarEmail(document.getElementById("email").value);
  var telefono = validarTelefono();

  var todook = nombre && edad && email && telefono

  if (todook){
 
    fPerfil = JSON.stringify(formulario)
    localStorage.setItem("KeyFormulario", fPerfil);
};
};
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

  fPerfil = JSON.parse(localStorage.getItem("KeyFormulario"))

      nombre.value = fPerfil.nombre;
      edad.value = fPerfil.edad;
      email.value = fPerfil.email;
      telefono.value = fPerfil.telefono;
  
}); 


// ---botón editar---
function borrarTodo(){
 localStorage.clear("KeyFormulario")
};

//---VALIDAR CAMPOS---
function validarNombre(){
  var nombre = document.getElementById("nombre").value;
  if(nombre==""){
    document.getElementById("nombre-error").innerHTML = "Ingrese un nombre válido";
    return false;
  }else {
    document.getElementById("nombre-error").style.display="none";
    return true;
  }
}

function validarEdad(){
  var edad = document.getElementById("edad").value;
  if (edad==""){
    document.getElementById("edad-error").innerHTML= "Ingrese edad válida";
    return false;
  } else {
    document.getElementById("edad-error").style.display="none"
    return true;
  }
}

function validarEmail(){
  var email = document.getElementById("email").value;
  if (email==""){
    document.getElementById("email-error").innerHTML= "Ingrese un email válido";
    return false;
  } else {
    document.getElementById("email-error").style.display="none"
    return true;
  }
}

function validarTelefono(){
  var telefono = document.getElementById("telefono").value;
  if(telefono==""){
    document.getElementById("telefono-error").innerHTML="Ingrese un número válido";
    return false;
  }else {
    document.getElementById("telefono-error").style.display="none"
    return true;
  }
}
