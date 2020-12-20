var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";
    let imagenUno = "";

    for (let i = 1; i < array.length; i++) {
        let imageSrc = array[i];

        imagenUno = `<div class="carousel-item active">
            <img src="${array[0]}" class="d-block w-100" alt="">
        </div>`


        htmlContentToAppend += `

        <div class="carousel-item">
            <img src="${imageSrc}" class="d-block w-100" alt="">
        </div>
        `

        document.getElementById("categoryImagesGallery").innerHTML = imagenUno + htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CATEGORY_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
        
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.productCount;
            productCriteriaHTML.innerHTML = category.productCriteria;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
        }
    });
});