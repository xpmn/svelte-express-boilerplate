const express = require('express');
const router = express.Router();

router.get('/example', (req, res) => {
  res.status(200).send({message: 'This is example API'});
});

router.use('*', (req, res) => {
  res.status(404).send({message: 'API not found'});
});

module.exports = router;
