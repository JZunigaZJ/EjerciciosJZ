const express = require("express");
const router = express.Router();
const Usuario = require("../models/usuario.model");

//Rutas POST para enviar datos
router.post("/", async (req, res) => { //Funcion 'async' espera a terminar o a que se cancele
    const { correo, nombre, cedula, contrasenia } = req.body;

    //Validar que si los tenemos
    if (!correo || !nombre || !cedula || !contrasenia) {
        return res.status(400).json({ msj: "Todos los campos son obligatorios" });
    }

    //Funcion try/catch para manejar el error
    try {
        const nuevoUsuario = new Usuario({ correo, nombre, cedula, contrasenia });
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario); //201: El recurso se crea correctamente
    } catch (error) {
        res.status(400).json({ msj: error.message });
    }

});

//Rutas GET para solicitar datos
router.get("/", async (req, res) => {

    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ msj: error.message })
    }
}); //req peticion, res respuesta

module.exports = router;