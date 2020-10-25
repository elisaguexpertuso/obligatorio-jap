var articlesArray = [];

function mostrarCarrito(array){

let htmlContentToAppend = "";

for (let i=0; i < array.articles.length; i++) {
    let articles = array.articles[i];

    htmlContentToAppend += `
   
  <tr>

<td>
    <p class="font-weight-bold">`+ articles.name +`</p>
    <br>
</td>

    <td class="text-center mob-hide" style="background: none;">
    <img src="` + articles.src + `" alt="Pino de olor" width="100%" height="100%" >
    </td>

   <td class="mob-hide">
   <span class="order-product-price" id="cost"> ` + articles.unitCost + `</span> ` + articles.currency + `             
   </td>

  <td>
    
    <select name="canti" id="cantidad" onchange="subtotal(this.value, ` + articles.unitCost + `)">

    
    <option value="1"> 1 </option>
    <option value="2"> ` + articles.count + ` </option>
    <option value="3"> 3 </option>
    <option value="5"> 5 </option>
    </select>
    </td>

    <td>
      <span class="order-product-subtotal" id="result">100</span>
    </td>

    <td>
    <input input type="button" class="borrar" value="Eliminar">
    </input>
    </td>

    </tr></tbody>
`
}
    document.getElementById("alcarrito").innerHTML = htmlContentToAppend;

}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {

            articlesArray = resultObj.data;

            mostrarCarrito(articlesArray);
        }
    });
});


function subtotal(cantidad,cost){
  var result= cantidad * cost;
 console.log(result);

 var subtotal2= cantidad*cost;
 console.log(subtotal2);

 document.getElementById('result').innerHTML = result;
 document.getElementById('subtotal2').innerHTML = subtotal2;
 
};

/*---validación campos envío ---*/

// Validar dirección
function validarDireccion() {
  var dir = document.getElementById("direccion").value;
  if (dir=="" ){
      document.getElementById("error-direccion").innerHTML= "Ingresa una dirección";
      return false;
  } else {
      document.getElementById("error-direccion").style.display= "none";
      return true;
  }
}
// Validar ciudad
function validarEsquina(){
  var ciudad = document.getElementById("esquina").value;
  if (ciudad==""){
      document.getElementById("error-esquina").innerHTML= "Ingresa una esquina";
      return false;
  } else {
      document.getElementById("error-esquina").style.display= "none";
      return true;
  }
}

//Validar numero de puerta
function validarNumero() {
  var numero = document.getElementById("numero").value;
  if (numero==""){
      document.getElementById("error-numero").innerHTML= "Ingresa un número de puerta";
      return false;
  } else {
      document.getElementById("error-numero").style.display= "none";
      return true;
  }
}

//Validar pais
function validarPais(val){
  if(val =="nada"){
      document.getElementById("error-pais").innerHTML= "Selecciona un pais";
      return false;
  }else {
      document.getElementById("error-pais").style.display="none";
      return true;
  }
}

// Validar Radios
function validarRadio(){
  var arrayRadios = document.getElementsByName("exampleRadios")
  var noEstanMarcados =false;
  for (let i = 0; i< arrayRadios.length; i++){
      if (arrayRadios[i].checked){
          noEstanMarcados = true;
      }
  }
  if (noEstanMarcados){
      document.getElementById("error-seleccion").style.display= "none";
      return true;
  } else {
      document.getElementById("error-seleccion").innerHTML= "Selecciona un método de envío";
      return false;
  }
}

function validarMetodoDeEnvio(){

  var dir = validarDireccion(document.getElementById("direccion").value);
  var esquina = validarEsquina(document.getElementById("esquina").value) ;
  var radio= validarRadio();
  var numero = validarNumero(document.getElementById("numero").value);
  var pais = validarPais(document.getElementById("pais").value);
  
  var funciona = dir && esquina && radio && numero && pais;

  if (funciona){
      
        $('#modal2').modal('show');
 
  }
}

/*---Modal tarjeta y tranferencia bancaria ----*/
      function desplegarse(){
        $('#demo').collapse('show');
        $('#demo2').collapse('hide');
        }
      function desplegar2(){
        $('#demo').collapse('hide');
        $('#demo2').collapse('show');
        }

/*---Costos envío---*/
function precioEnvio(value){
  subtotal3= document.getElementById("result").innerHTML;
  var cien = "100"
  var envio = (parseInt(value) / parseInt(cien) * parseInt(subtotal3))
  console.log (envio)

  var totalisimo = (parseInt(value) / parseInt(cien) * parseInt(subtotal3) ) + parseInt(subtotal3)
  console.log (totalisimo);

  document.getElementById('totalisimo').innerHTML = totalisimo;

  document.getElementById('envio').innerHTML = envio;
}



/*---Validar método de pago---*/

function validarDesplegar(){
  var arrayRadios2 = document.getElementsByName("desplegar")
  var noEstanMarcados1 =false;
  for (let i = 0; i< arrayRadios2.length; i++){
      if (arrayRadios2[i].checked){
          noEstanMarcados1 = true;
      }
  }
  if (noEstanMarcados1){
      document.getElementById("error-desplegar").style.display= "none";
      return true;
  } else {
      document.getElementById("error-desplegar").innerHTML= "Selecciona un método de envío";
      return false;
  }
}

function validarMetodoDePago() {
  var radio= validarDesplegar();

  var todobien = radio

  if (todobien) {

    document.getElementById("compraExitosa2").innerHTML = "¡Has comprado con éxito!";
    
  }
}