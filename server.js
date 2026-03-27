// c'est le point d’entrée du backend, il : lance Express, charge les middlewares, connecte MongoDB, branche les routes, démarre le serveur

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/questions', require('./routes/questionRoutes'));
app.use('/api/scores', require('./routes/scoreRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});