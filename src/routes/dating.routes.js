const express = require("express");
// el router es el objeto que guarda todas las rutas
const clientRouter = express.Router();
// instanciamos al controlador para usar las funciones relativas a cada ruta
const {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
} = require("../controller/dating.controller");

const { upload } = require("../middlewares/file.middleware");
const { isAuth } = require("../middlewares/auth.middleware");

// RUTAS

//nombreDelRouter.get('endpoint', <nombreDeLaFuncion)

// OBTENER UNA CANCION
clientRouter.get("/:id", getClient);

// OBTENER TODAS LAS CANCINES
clientRouter.get("/", getClients);

// CREAR UNA CANCION
clientRouter.post("/", [upload.single("image")], createClient);

// UPDATE
clientRouter.patch("/:id", [upload.single("image")], updateClient);

// DELETE
clientRouter.delete("/:id", deleteClient);

module.exports = clientRouter;
