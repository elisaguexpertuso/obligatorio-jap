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

function subtotal(cantidad,cost){
     var result= cantidad * cost;
    console.log(result);

    document.getElementById('result').innerHTML = result;
    document.getElementById('subtotal2').innerHTML = result;
    
}; 


/* Esto lo puse solo para probar si podía borrar el producto y funciona pero no se muy bien como funiona. 
Lo busqué en internet pero todavía no se remover con el envío y subtotal del total por eso preferí sacarlo 

$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});
*/


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {

            articlesArray = resultObj.data;

            mostrarCarrito(articlesArray);
        }
    });
});