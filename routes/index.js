var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/search', function(req, res) {
  var url = ('https://api.punkapi.com/v2/beers?ids=' + req.query.ids);
  console.log('>>>>>>>>>>>>>> GET using Node', url)
  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(results) {
      res.render('brewDogData', {
        showResults: results
      });
    });
});

module.exports = router;
