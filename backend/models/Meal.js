const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  meal: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Meal', MealSchema);

