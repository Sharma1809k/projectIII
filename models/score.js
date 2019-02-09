const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  username: { type: String, required: true },
  score: { type: Number, required: false }
  
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
