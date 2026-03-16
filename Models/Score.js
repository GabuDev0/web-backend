// définit le modèle des scores, sert à stocker par exemple : le pseudo le score obtenu le nombre total de questions la date

const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  pseudo: { type: String, required: true },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Score', ScoreSchema);