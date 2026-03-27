//contient la logique de traitement des routes liées aux questions

const Question = require('../models/Question');

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des questions' });
  }
};

module.exports = { getQuestions };