const tablaUsuarios = document.getElementById("tblUsuarios").querySelector("tbody");

async function cargarTabla() {
    fetch("http://localhost:3000/usuarios", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
        .then(listaUsuarios => {
            tablaUsuarios.innerHTML = ""; // Limpiar la tabla antes de cargar nuevos datos
            listaUsuarios.forEach(usuario => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                <td>${usuario.nombre}</td>
                <td>${usuario.cedula}</td>
                <td>${usuario.correo}</td>
            `; // Comillas invertidas para interpolar variables
                tablaUsuarios.appendChild(fila); // Agregar la fila a la tabla
            });
        })
}

// Llamar a la función para cargar la tabla al inicio
cargarTabla();