const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
  userid: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  zodiacsign: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  preferences: {
    type: String,
    required: true,
    trim: true,
  },
  interests: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: false,
  },
  match: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
      required: false,
    },
  ],
});
const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
