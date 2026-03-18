const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();

const questions = [
  { type: "qcm", text: "Quelle est la signification de PIT ?", options: [{ t: "Passeport Informatique Telecom", img: "/astus.png", isCorrect: true }, { t: "Projet Informatique Telecom", img: "/astus.png", isCorrect: false }, { t: "Partage d’Informations pour Tous", img: "/astus.png", isCorrect: false }, { t: "Pas de IF en TC", img: "/astus.png", isCorrect: false }] },
  { type: "qcm", text: "En quelle année a été créée l’Astus?", image: "/astus.png", options: [{ t: "1957", isCorrect: false }, { t: "1998", isCorrect: true }, { t: "2005", isCorrect: false }, { t: "2026", isCorrect: false }] },
  { type: "qcm", text: "Quel est le nom de la salle réseau au rez-de-chaussée?", options: [{ t: "TP Info A", isCorrect: false }, { t: "Plateforme Radiocom", isCorrect: false }, { t: "Salle ISO", isCorrect: true }, { t: "Salle Coin-coin", isCorrect: false }] },
  { type: "qcm", text: "Combien y’a t’il de départements à l’INSA ? (en comptant le FIMI)", options: [{ t: "8", isCorrect: false }, { t: "9", isCorrect: false }, { t: "10", isCorrect: true }, { t: "67", isCorrect: false }] },
  { type: "image-order", text: "Trie ces événements Astus du plus ancien au plus récent", items: [{ id: "event2", label: "Soirée Casino", image: "/2.png" }, { id: "event4", label: "Nouveau bureau 2026", image: "/4.png" }, { id: "event1", label: "Création de l’Astus", image: "/1.png" }, { id: "event3", label: "Retrouvailles", image: "/3.png" }], correctOrder: ["event1", "event2", "event3", "event4"] },
  { type: "spam-click", text: "Clique assez vite pour rendre ton projet avant la deadline. Objectif : 55 clics.", duration: 10, targetClicks: 55 },
  { type: "image-click", text: "Où se trouve le RI sur cette carte de l’INSA ?", image: "/carte-insa.png", correctZone: { xMin: 16.6, xMax: 19.5, yMin: 67.8, yMax: 72.5 } }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Question.deleteMany();
    await Question.insertMany(questions);
    console.log('Questions ajoutées dans MongoDB');
    process.exit();
  } catch (error) {
    console.error('Erreur seed :', error);
    process.exit(1);
  }
}

seed();