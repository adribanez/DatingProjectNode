const mongoose = require("mongoose");
const pass =
  "mongodb+srv://adrianibanez:mCX0WggOS1uFLi0H@cluster0.31h5unc.mongodb.net/dating?retryWrites=true&w=majority&appName=Cluster0";
const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(pass);
    console.log("INFO: Conexión a BD correcta:", conn.connection.name);
  } catch (error) {
    console.log("ERROR: (f connectMongo) ->", error.message);
  }
};
module.exports = { connectMongo };
