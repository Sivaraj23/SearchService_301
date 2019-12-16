var express = require('express');
var router = express.Router();
import logger from "../utilities/Logger"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Search home' });
});

module.exports = router;
