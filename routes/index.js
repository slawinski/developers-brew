const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const data = require('./skills.json');

router.get('/', function (req, res) {
  res.render('skillList', {
    data: data,
  });
});

router.get('/brewdog', function (req, res) {
  let url = ('https://api.punkapi.com/v2/beers?ids=' + req.query.ids);
  console.log('>>>>>>>>>>>>>> Hi, I\'m fetching,', url, 'and rendering new layout');
  fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (results) {
        res.render('brewDogData', {
          showResults: results,
          layout: 'brewdog-layout.hbs',
        });
      });
});

module.exports = router;
