var product = {};
var comments = {};




function showProductGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `

        
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("product-info-id").innerHTML = htmlContentToAppend;
    }
}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("costo");
            let productCriteriaHTML = document.getElementById("categoría");
                   
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.cost + product.currency;
            productCriteriaHTML.innerHTML = product.category;
            

            //Muestro las imagenes en forma de galería
            showProductGallery(product.images);
        }
    });
});

var recomendado = {};

function recomendados(array){

    let htmlContentToAppend= "";

    for(let i = 0; i < array.length; i++){
        let recomendados = array[i];
        
        if(i==[1]|| i == [3]){

        htmlContentToAppend += `
 
        <div class="col-md-4">   
    <a href="product-info.html" class="list-group-item-action card">
 
        <img src="` + recomendados.imgSrc + `" alt=" "  class="card-img-top">

    <div class="card-body" style="height:200px;">

        <h5 class="card-title">`+ recomendados.name +`</h5>
        <p class="card-text">` + recomendados.description + `</p>
        <small class="text-muted">` + recomendados.soldCount + ` vendidos</small>
    </div>     
     
    <div class="card-footer">
        <small class="text-muted">` + recomendados.cost + ` ` + recomendados.currency + `</small>
    </div>

    </a>
    </div>        

` 

     document.getElementById("recomendado").innerHTML = htmlContentToAppend;
  }}
}

  document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {

            recomendados(resultObj.data);
        }
    });
});


function nuevocomentario(){
    var comentario = document.getElementById("comentario").value;
    var score = document.getElementById("score").value;

    if (score == ""){
    document.getElementById("calificacion").innerHTML ="Ingresa una calificación :)";
    } 
    if (comentario == "") {
    document.getElementById("errorComentario").innerHTML="Ingresa un comentario :)";

    } else {

    document.getElementById("enviado").innerHTML= "Su comentario ha sido enviado ¡Gracias!";
    document.getElementById("refresh").remove();
    };
};

function showComments(comments){

    let htmlContentToAppend ="";

    for(let i = 0; i < comments.length; i++){
        let commentario = comments[i];

    htmlContentToAppend += `
  
    <div class="card border-muted " class="mx-auto>   
    <div class = "text-center" style="max-width: 40rem;"> 

             <div class="col">                               
        <small class="text-dark"> ` + "Puntuación:  " + commentario.score +  `</small>
         </div>  

         <div class="col">                                       
                     <small class="text-muted">` + commentario.description + `</small>                 
                </div>   

                <div class="col">                                       
                <small class="text-primary">` + "Usuario: " + commentario.user + `</small>                 
           </div>    

           <div class="col">                                       
                <small class="text-muted">` + "Hora: " + commentario.dateTime + `</small>                 
           </div> 
    </div>
    </div>  
      
    
    `
    
    document.getElementById("comments").innerHTML = htmlContentToAppend;
}
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comments = resultObj.data;

            showComments(comments);
        }
    });
});