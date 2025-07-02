const express = require("express");
const router = express.Router();
const Producto = require("../models/producto.model");

//POST
router.post("/", async (req, res) => {
    const { codigo, nombre, precio } = req.body;

    if (!codigo || !nombre || !precio) {
        return res.status(400).json({ msj: "Todos los campos son obligatorios" });
    }

    try {
        const nuevoProducto = new Producto({ codigo, nombre, precio });
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ msj: error.message });
    }
});

router.get("/", async (req, res) => {

    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ msj: error.message })
    }
});

module.exports = router;