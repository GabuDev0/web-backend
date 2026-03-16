// définit les routes API liées aux questions, il relie juste : une URL à une fonction du contrôleur
// Par exemple: GET /api/questions

const express = require('express');
const router = express.Router();
const { getQuestions } = require('../controllers/questionController');

router.get('/', getQuestions);

module.exports = router;