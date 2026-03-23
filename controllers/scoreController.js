// contient la logique liée aux scores : enregistrer un score, récupérer les meilleurs scores

const Score = require('../models/Score');

const createScore = async (req, res) => {
  try {
    const { username, score, nbrQuestions } = req.body;

    const newScore = new Score({ username, score, nbrQuestions });
    await newScore.save();

    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur lors de l’enregistrement du score' });
    console.error("ERREUR BACKEND :", error);
  }
};

const getScores = async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1, createdAt: 1 }).limit(10);
    res.json(scores);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des scores' });
  }
};

module.exports = { createScore, getScores };