const router = require('express').Router();
const model = require('../model');

router.get('/', function (req, res) {
  res.send('server is working');
});

router.get('/api/flashcard', async (req, res) => {
  try {
    const data = await model.selectRandomFlashCard();
    res.send({data});
  } catch (error) {
    console.error(error);
    res.status(500).send('error');
  }
})

router.post('/api/flashcard', async (req, res) => {
  try {
    const {hint, answer} = req.body;
    const result = await model.insertFlashCard(hint, answer);
    res.send({success: 1});
  } catch (error) {
    console.error(error);
    res.status(500).send('error');
  }
})

module.exports = router;
