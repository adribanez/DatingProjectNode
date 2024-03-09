const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  authenticate,
  logout,
  getUsers,
} = require("../controller/user.controller");
const { isAuth } = require("../middlewares/auth.middleware");

userRouter.post("/register", createUser);
userRouter.post("/authenticate", authenticate); // obtener un token
userRouter.post("/logout", [isAuth], logout);
userRouter.get("/users", getUsers);

module.exports = userRouter;
