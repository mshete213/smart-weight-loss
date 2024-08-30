const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

router.post('/', async (req, res) => {
  const { date, meal, calories } = req.body;
  try {
    const newMeal = new Meal({ date, meal, calories });
    await newMeal.save();
    res.json(newMeal);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

