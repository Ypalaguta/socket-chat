const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
  res.json({name:'name', id: 0}).end();
});

module.exports = router;
