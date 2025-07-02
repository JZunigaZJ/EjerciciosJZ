const mongoose = require("mongoose");

//Esquema
const schemaProducto = new mongoose.Schema({

    codigo: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    precio: {
        type: Number,
        required: true,
        unique: false
    }

});

const Producto = mongoose.model("Producto", schemaProducto);
module.exports = Producto;