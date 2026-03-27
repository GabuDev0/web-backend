//définit le modèle Mongoose des questions

const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, default: null },

  options: [
    {
      t: String,
      img: String,
      isCorrect: Boolean
    }
  ],

  items: [
    {
      id: String,
      label: String,
      image: String
    }
  ],

  correctOrder: [String],

  correctZone: {
    xMin: Number,
    xMax: Number,
    yMin: Number,
    yMax: Number
  },

  duration: Number,
  targetClicks: Number,

  category: { type: Number, default: 0 } // the index of the category
});

module.exports = mongoose.model('Question', QuestionSchema);