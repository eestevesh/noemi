var imagen = document.getElementById("inputPhoto");
var nombre = document.getElementById("inputFirstName");
var apellido = document.getElementById("inputLastName");
var edad = document.getElementById("inputAge");
var email = document.getElementById("inputEmail1");
var telefono = document.getElementById("inputPhone");
var formulario = document.getElementById("formulario");


//funcion para guardar datos del usuario e implementar en OnClick (en HTML)
function guardar() {

    if (imagen.value === "" || nombre.value === "" || apellido.value === "" || edad.value === "" || email.value === "" || telefono.value === "") {
        document.getElementById('padreFormulario').innerHTML += `
            <div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
                <strong>Ups!</strong> Hay campos incompletos.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>        
        `
    } else {
        var userJSON =
            {
            Imagen: imagen.value,
            Nombre: nombre.value,
            Apellido: apellido.value,
            Edad: edad.value,
            Email: email.value,
            Telefono: telefono.value
        }

        var nuevoJSON = JSON.stringify(userJSON);

        window.localStorage.setItem("fullUser", nuevoJSON);

    }

}

function editarPerfil(){

    formulario.innerHTML = 

    `    
    <div class="col-sm-4 bg-c-lite-green user-profile">
    <div class="card-block text-center text-white">

      <div id="divPhoto">
        <label for="inputFirstName">Imagen de perfil:</label>
        <input type="text" class="form-control" id="inputPhoto" placeholder="Ingresar URL">
      </div>

      <div id="divFirstName">
        <label for="inputFirstName">Nombre:</label>
        <input type="text" class="form-control" id="inputFirstName" placeholder="Ingresar nombre">
      </div>

      <div id="divLastName">
        <label for="inputLastName">Apellido</label>
        <input type="text" class="form-control" id="inputLastName" placeholder="Ingresar apellido">
      </div>

    </div>
  </div>



  <div class="col-sm-8">
    <div class="card-block">
      <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Información</h6>

      <div class="row">

      </div>

      <div class="col-sm-12" id="divAge">

        <label for="inputAge">Edad</label>
        <input type="number" class="form-control" id="inputAge" placeholder="Ingresar edad" min="0">

      </div>


      <div class="col-sm-12" id="divEmail1">

        <label for="inputEmail1">Email</label>
        <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp"
          placeholder="Ingresar email">

      </div>


      <div class="col-sm-12" id="divPhone">

        <label for="inputPhone">Teléfono</label>
        <input type="text" class="form-control" id="inputPhone" placeholder="Ingresar fijo o móvil">

      </div>

      <div class="col-sm-12">

        <button type="button" class="btn btn-primary" onclick="guardar()" id="buttonSave">Guardar</button>
      </div>
    </div>
  </div>
  `

  localStorage.clear();

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    let storage = localStorage.getItem("fullUser");
    let perfil = JSON.parse(storage);
    

    formulario.innerHTML = `
            <div class="col-sm-4 bg-c-lite-green user-profile">
              <div class="card-block text-center text-white">
                <div class="m-b-25"> <img src="${perfil.Imagen}" class="img-radius"
                    alt="Imagen no válida"> </div>


                <h6 class="f-w-600">${perfil.Nombre + " " + perfil.Apellido}</h6>

              </div>
            </div>



            <div class="col-sm-8">
              <div class="card-block">
                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Información</h6>

                <div class="row">

                </div>

                <div class="col-sm-12" id="divAge">

                  <p class="m-b-10 f-w-600">Edad</p>
                  <h6 class="text-muted f-w-400">${perfil.Edad} años</h6>

                </div>


                <div class="col-sm-12" id="divEmail1">

                  <p class="m-b-10 f-w-600">Email</p>
                  <h6 class="text-muted f-w-400">${perfil.Email}</h6>

                </div>


                <div class="col-sm-12" id="divPhone">

                  <p class="m-b-10 f-w-600">Teléfono</p>
                  <h6 class="text-muted f-w-400">${perfil.Telefono}</h6>

                </div>

                <div> <button type="button" class="m-1 btn btn-link pl-0" onclick="editarPerfil()" >Editar perfil</button> </div>

              </div>
            </div>
    `


    

});