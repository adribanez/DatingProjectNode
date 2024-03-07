const Match = require("../model/match.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
const Dating = require("../model/dating.model");
// FUNCIONES CRUD

// - CONSULTAR

// -- UNA PERSONA
const getMatch = async (req, res, next) => {
  try {
    //1. OBTENGO LA ID QUE HA SOLICITADO EL USUARIO
    const id = req.params.id;
    //2. BUSCO EN LA BBDD POR ID
    const match = await Match.findById(id);
    //3. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: match,
    });
  } catch (error) {
    next(error);
  }
};

// -- TODAS LAS PERSONAS
const getMatchs = async (req, res, next) => {
  try {
    //1. BUSCO TODAS LAS PERSONAA
    const match = await Match.find();
    //3. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: matchs,
    });
  } catch (error) {
    next(error);
  }
};

// - CREAR PERSONA

const createMatch = async (req, res, next) => {
  const clientId = req.params.clientId;
  const client = await Dating.findById(clientId); //
  try {
    //1. CREAR UNA VARIABLE QUE RECOJA LOS DATOS QUE ENVÍA EL USUARIO.
    const match = new Match(req.body);
    //2.GUARDAR EN BBDD
    await match.save();
    await Dating.findByIdAndUpdate(
      { _id: clientId },
      { $push: { match: match } }
    );
    //3. CONTESTAR AL USUARIO
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: match,
    });
  } catch (error) {
    next(error);
  }
};

// - MODIFICAR

const updateMatch = async (req, res, next) => {
  try {
    //1. BUSCAR EL MATCH QUE HAY QUE MODIFICAR.
    const id = req.params.id;
    //2. RECOPILAR LOS DATOS QUE HAY QUE MODIFICAR
    const body = req.body;
    //3. ACTUALIZAR LA FUNCIÓN
    const match = await Match.findByIdAndUpdate(id, body, {
      new: true,
    });
    // 4. RESPUESTA AL USUARIO
    if (!match) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: match,
    });
  } catch (error) {
    next(error);
  }
};

// - DELETE

const deleteMatch = async (req, res, next) => {
  try {
    const id = req.params.id;
    const match = await Match.findByIdAndDelete(id);

    if (!match) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }

    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: match,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMatch,
  getMatchs,
  createMatch,
  updateMatch,
  deleteMatch,
};
