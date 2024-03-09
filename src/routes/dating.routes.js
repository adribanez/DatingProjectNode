const express = require("express");

const clientRouter = express.Router();

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

// OBTENER UNA PERSONA
clientRouter.get("/:id", getClient);

// OBTENER TODAS LAS PERSONAS
clientRouter.get("/", getClients);

// CREAR UNA PERSONA
clientRouter.post("/", [upload.single("image")], [isAuth], createClient);

// MODIFICAR UNA PERSONA
clientRouter.patch("/:id", [upload.single("image")], [isAuth], updateClient);

// BORRAR UNA PERSONA
clientRouter.delete("/:id", [isAuth], deleteClient);

module.exports = clientRouter;
