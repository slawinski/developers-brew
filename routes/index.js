var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/brewdog', function (req, res) {
  console.log('Hi, I\'m rendering new layout');
  res.render('brewDogData', {
    title: 'Brewdog API',
    layout: 'brewdog-layout.hbs'
  });
});

router.get('/search', function (req, res) {
  var url = ('https://api.punkapi.com/v2/beers?ids=' + req.query.ids);
  console.log('>>>>>>>>>>>>>> Hi, I\'m fetching,', url, 'and rendering new layout')
  fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (results) {
        res.render('brewDogData', {
          showResults: results,
          layout: 'brewdog-layout.hbs'
        });
      });
});

module.exports = router;
