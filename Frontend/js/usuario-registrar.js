const inputCorreo = document.getElementById("txtCorreo");
const inputCedula = document.getElementById("txtCedula");
const inputNombre = document.querySelector("#txtNombre");
const inputContrasenia = document.querySelector("#txtContrasenia");
const btnGuardar = document.querySelector("#btnGuardar");

const inputsRequeridos = document.querySelectorAll("input[required]"); //Obtenemos todos los queries al mismo tiempo
// Validar los campos
function validar() {

    let error = false;
    for (let i = 0; i < inputsRequeridos.length; i++) {
        if (inputsRequeridos[i].value == "") {
            error = true;
        }
    }

    if (error == false) {
        registrarUsuario();
    }

}

// Toma los datos HTML y los guada en la DB
function registrarUsuario() {
    const datosUsuario = {
        correo: inputCorreo.value,
        cedula: inputCedula.value,
        nombre: inputNombre.value,
        contrasenia: inputContrasenia.value
    };

    //Enviar datos al servidor
    fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(datosUsuario)
    }).then(response => {
        if (!response.ok) {
            console.log("No se puede registrar el usuario");
        } else {
            console.log("Usuario registrado");
        }
    }).catch(error => {
        console.log(error);
    });
}

btnGuardar.addEventListener("click", validar);