const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');

dotenv.config();

const questions = [
  { category: 0, type: "qcm", text: "Quelle est la signification de PIT ?", image: "/pit.png", options: [{ t: "Passeport Informatique Telecom", isCorrect: true }, { t: "Projet Informatique Telecom", isCorrect: false }, { t: "Partage d’Informations pour Tous", isCorrect: false }, { t: "Pas de IF en TC", isCorrect: false }] },
  { category: 0, type: "qcm", text: "Quelle est la matière du 3TCS1 avec le plus de rattrapages ?", image: "/rattrapages.png", options: [{ t: "PBS", isCorrect: false }, { t: "IP", isCorrect: true }, { t: "NRP", isCorrect: false }, { t: "Théâtre", isCorrect: false }] },
  { category: 0, type: "qcm", text: "Quel est le bon logo du pull TC 2026?", image: "/Pull Logo.png", options: [{ t: "1", img: "/Logo 1 Projet WEB 2026.png", isCorrect: true }, { t: "2", img: "/Logo 2 Projet WEB 2026.png", isCorrect: false }, { t: "3", img: "/Logo 3 Projet WEB 2026.png", isCorrect: false }, { t: "4", img: "/Logo 4 Projet WEB 2026.png", isCorrect: false }] },
  { category: 0, type: "image-order", text: "Trie ces événements Astus du plus ancien au plus récent", items: [{ id: "event2", label: "Soirée Casino", image: "/casino.png" }, { id: "event4", label: "Nouveau bureau 2026", image: "/bureau.png" }, { id: "event1", label: "Création de l’Astus", image: "galaxie.png" }, { id: "event3", label: "Retrouvailles", image: "barberousse.png" }], correctOrder: ["event1", "event2", "event4", "event3"] },
  { category: 0, type: "qcm", text: "Combien y a-t-il de départements à l’INSA ? (en comptant le FIMI)", image: "/départements.png", options: [{ t: "8", isCorrect: false }, { t: "9", isCorrect: false }, { t: "10", isCorrect: true }, { t: "67", isCorrect: false }] },
  { category: 0, type: "qcm", text: "Quelle est cette salle de cours ?", image: "/TP Info C.png", options: [{ t: "TD E", isCorrect: false }, { t: "TP Info E", isCorrect: false }, { t: "TP Info C", isCorrect: true }, { t: "La salle Coin-coin🦆", isCorrect: false }] },
  { category: 0, type: "qcm", text: "Qui est le nouveau président de l’Astus 2026?", image: "/président.png", options: [{ t: "Paul", isCorrect: false }, { t: "Enzo", isCorrect: false }, { t: "Laura", isCorrect: true }, { t: "Macron", isCorrect: false }] },
  
  { category : 0, type : "memory", text : "De quelle couleur était l'aspirateur ?", image: "/décor.png", memoryTime : 10, options : [
      { "t": "Bleu", "isCorrect": false },
      { "t": "Rouge", "isCorrect": false },
      { "t": "Vert", "isCorrect": false },
      { "t": "Jaune", "isCorrect": true }
    ]
  },

  { category: 0, type: "spam-click", text: "⚠️ DES IF ESSAYENT DE FORCER LA PORTE DU BAT TC ! Vite ! Clique 67 fois sur le bouton en moins de 10 secondes !", duration: 10, targetClicks: 67 },
  { category: 0, type: "qcm", text: "En quelle année a été créée l’Astus?", image: "/astus.png", options: [{ t: "1957", isCorrect: false }, { t: "1998", isCorrect: true }, { t: "2005", isCorrect: false }, { t: "2026", isCorrect: false }] },

  { category: 0, type: "timer-check", text: "Depuis combien de temps joues-tu à ce quiz ?", options: [
      { "offset": 50, "isCorrect": false },
      { "offset": 0, "isCorrect": true },
      { "offset": 120, "isCorrect": false },
      { "offset": -20, "isCorrect": false }
    ]
  },


  { category: 1, type: "qcm", text: "Quel est le nom de la salle réseau au rez-de-chaussée?", image: "/astus.png", options: [{ t: "Salle ISO", isCorrect: true }, { t: "Plateforme Radiocom", isCorrect: false }, { t: "TP Info A", isCorrect: false }, { t: "Salle de Torture TC💀", isCorrect: false }] },
  { category: 1, type: "qcm", text: "Lequel parmi ces profs n’a pas de compte Linkedin?", image: "/linkedin.png", options: [{ t: "Sébastien Peychet", isCorrect: false }, { t: "Chantal Muller", isCorrect: false }, { t: "Tanguy Risset", isCorrect: false }, { t: "Kevin Zagalo", isCorrect: true }] },
  { category: 1, type: "qcm", text: "Combien de câbles rouges ne sont pas branchés à eth1?", image: "/Switchs.png", options: [{ t: "0", isCorrect: false }, { t: "2", isCorrect: true }, { t: "4", isCorrect: false }, { t: "6", isCorrect: false }] },
  
  { category: 1, type: "qcm", text: "A quel professeur appartient cette voix ?", options: [{ t: "1", isCorrect: false }, { t: "vrai", isCorrect: true }, { t: "3", isCorrect: false }, { t: "4", isCorrect: false }] },

  { category: 1, type: "qcm", text: "Reliez chaque prof à sa matière !", options: [{ t: "1", isCorrect: false }, { t: "vrai", isCorrect: true }, { t: "3", isCorrect: false }, { t: "4", isCorrect: false }] },

  { category: 1, type: "qcm", text: "Quelle est la moyenne des admis au FIMI sur Parcoursup ?", options: [{ t: "19,5", isCorrect: false }, { t: "16,5", isCorrect: true }, { t: "17,5", isCorrect: false }, { t: "67,67", isCorrect: false }] },
  { category: 1, type: "qcm", text: "Qui est le nouveau directeur des études TC?", options: [{ t: "TRO", isCorrect: true }, { t: "RST", isCorrect: false }, { t: "SPE", isCorrect: false }, { t: "TRI", isCorrect: false }] },
  { category: 1, type: "image-order", text: "Trie ces professeurs TC du plus vieux au plus jeune", items: [{ id: "event2", label: "HBC", image: "/2.png" }, { id: "event4", label: "CGO", image: "/4.png" }, { id: "event1", label: "SFR", image: "/1.png" }, { id: "event3", label: "FVA", image: "/3.png" }], correctOrder: ["event3", "event1", "event2", "event4"] },
  { category: 1, type: "qcm", text: "Comment s’écrit le nom de famille de Razmig?", options: [{ t: "KECHICHAN", isCorrect: false }, { t: "KEICHICHIAN", isCorrect: false }, { t: "KECHICHIAN", isCorrect: true }, { t: "KESKILÉCHIANT", isCorrect: false }] },
  { category: 1, type: "qcm", text: "Où a lieu la soirée Retrouvailles chaque année?", options: [{ t: "Barberousse", isCorrect: true }, { t: "Boston", isCorrect: false }, { t: "Au WEI", isCorrect: false }, { t: "Dans le jardin du voisin près de l'Astus", isCorrect: false }] },
  { category: 1, type: "image-click", text: "Où se trouve le RI sur cette carte de l’INSA ?", image: "/carte-insa.png", correctZone: { xMin: 16.6, xMax: 19.5, yMin: 67.8, yMax: 72.5 } },
  { category: 2, type: "image-click", text: "Où se trouve le RI sur cette carte de l’INSA ?", image: "/carte-insa.png", correctZone: { xMin: 16.6, xMax: 19.5, yMin: 67.8, yMax: 72.5 } }
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