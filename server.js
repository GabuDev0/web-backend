require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // 1. On importe mongoose

const app = express();
app.use(cors());
app.use(express.json());

console.log("--- DEBUG CONNEXION ---");
console.log("Valeur de MONGO_URI :", process.env.MONGO_URI);
console.log("-----------------------");

mongoose.connect(process.env.MONGO_URI)
// ... reste du code

// 2. Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connecté à MongoDB avec succès !"))
  .catch((err) => console.error("Erreur de connexion MongoDB :", err));

app.get('/api/hello', (req, res) => {
    res.json({ message: process.env.MESSAGE });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur sur http://localhost:${PORT}`);
});