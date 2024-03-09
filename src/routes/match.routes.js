const express = require("express");
const matchRouter = express.Router();
const {
  getMatch,
  getMatchs,
  createMatch,
  updateMatch,
  deleteMatch,
} = require("../controller/match.controller");

const { isAuth } = require("../middlewares/auth.middleware");

matchRouter.get("/:id", getMatch);
matchRouter.get("/", getMatchs);
matchRouter.post("/:clientId", [isAuth], createMatch);
matchRouter.patch("/:id", [isAuth], updateMatch);
matchRouter.delete("/:id", [isAuth], deleteMatch);

module.exports = matchRouter;
