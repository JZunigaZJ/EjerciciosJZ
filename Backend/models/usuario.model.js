const mongoose = require("mongoose");

//Creacion del Esquema
const schemaUsuario = new mongoose.Schema({

    correo: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        unique: false
    },
    cedula: {
        type: String,
        required: true,
        unique: true
    },
    contrasenia: {
        type: String,
        required: true,
        unique: false
    }

});

const Usuario = mongoose.model("Usuario", schemaUsuario);
module.exports = Usuario;