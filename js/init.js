const CATEGORIES_URL = "http://localhost:8001/categories";
const PUBLISH_PRODUCT_URL = "http://localhost:8001/publish.product";
const CATEGORY_INFO_URL = "http://localhost:8001/category-info";
const PRODUCTS_URL = "http://localhost:8001/productos";
const PRODUCT_INFO_URL = "http://localhost:8001/product-info";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:8001/product-info-comments";
const CART_INFO_URL = "http://localhost:8001/cart-info";
const CART_dos_URL = "http://localhost:8001/cart-dos";
const CART_BUY_URL = "http://localhost:8001/cart-buy";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

  
  document.getElementById("navbarDropdown").innerHTML = localStorage.getItem("usuario");


  
});

