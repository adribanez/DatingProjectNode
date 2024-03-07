const Client = require("../model/dating.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

// FUNCIONES CRUD

// - CONSULTAR

// -- UNA PERSONA
const getClient = async (req, res, next) => {
  try {
    //1. OBTENGO LA ID QUE HA SOLICITADO EL USUARIO
    const id = req.params.id;
    //2. BUSCO EN LA BBDD POR ID
    const client = await Client.findById(id);
    //3. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: client,
    });
  } catch (error) {
    next(error);
  }
};

// -- TODAS LAS PERSONAS
const getClients = async (req, res, next) => {
  try {
    //1. BUSCO TODAS LAS TRACKS
    const clients = await Client.find();
    //3. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: clients,
    });
  } catch (error) {
    next(error);
  }
};

// - CREAR PERSONA

const createClient = async (req, res, next) => {
  try {
    const {
      userid,
      name,
      surname,
      zodiacsign,
      country,
      city,
      age,
      gender,
      preferences,
      interests,
      match,
    } = req.body;
    const image = req.file ? req.file.filename : null;
    const client = new Client({
      userid,
      name,
      surname,
      zodiacsign,
      country,
      city,
      age,
      gender,
      preferences,
      interests,
      match,
      image: image,
    });
    //1. CREAR UNA VARIABLE (TIPO TRACK) QUE RECOJA LOS DATOS QUE ENVÍA EL USUARIO.

    //2.GUARDAR EN BBDD
    await client.save();
    //3. CONTESTAR AL USUARIO
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: client,
    });
  } catch (error) {
    next(error);
  }
};

// - MODIFICAR

const updateClient = async (req, res, next) => {
  try {
    //1. BUSCAR EL TRACK QUE HAY QUE MODIFICAR.
    const id = req.params.id;
    const body = req.body;
    //2. RECOPILAR LOS DATOS QUE HAY QUE MODIFICAR

    /*const {
      userid,
      name,
      surname,
      zodiacsign,
      country,
      city,
      age,
      gender,
      preferences,
      interests,
      match,
    } = req.body;*/
    const image = req.file ? req.file.filename : null;
    /*const client = new Client({
      userid,
      name,
      surname,
      zodiacsign,
      country,
      city,
      age,
      gender,
      preferences,
      interests,
      match,
      image: image,
    });*/
    //3. ACTUALIZAR LA FUNCIÓN
    const client = await Client.findByIdAndUpdate(
      id,
      { body, image: image },
      {
        new: true,
      }
    );
    // 4. RESPUESTA AL USUARIO
    if (!client) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: client,
    });
  } catch (error) {
    next(error);
  }
};

// - DELETE

const deleteClient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const client = await Client.findByIdAndDelete(id);

    if (!client) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }

    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      client: client,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
};
