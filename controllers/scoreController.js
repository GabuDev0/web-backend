// contient la logique liée aux scores : enregistrer un score, récupérer les meilleurs scores

const Score = require('../models/Score');

const createScore = async (req, res) => {
  try {
    const { pseudo, score, totalQuestions } = req.body;

    const newScore = new Score({ pseudo, score, totalQuestions });
    await newScore.save();

    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur lors de l’enregistrement du score' });
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