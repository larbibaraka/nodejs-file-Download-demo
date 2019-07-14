var express = require('express');
var router = express.Router();
var downloadFile = require('../controllers/indexController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file' , (req, res, next) =>{
  downloadFile(req, res, next);  

});

module.exports = router;
