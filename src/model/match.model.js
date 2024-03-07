const mongoose = require("mongoose");
const matchSchema = new mongoose.Schema({
  status: {
    type: Number,
  },
  dating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  date: {
    type: Number,
  },
});
const Match = mongoose.model("Match", matchSchema);
module.exports = Match;
