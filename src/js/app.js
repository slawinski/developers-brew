'use strict';

document.getElementById('getData').addEventListener('click', getData);

function getData() {
  fetch('https://api.punkapi.com/v2/beers/random').then(function (res) {
    return res.json();
  }).then(function (jsonData) {
    var output = '';
    jsonData.forEach(function (beer) {
      output += '<div><h3>' + beer.name + '</h3>\n                  <p>' + beer.description + '</p>\n                  <img class="beer" src="' + beer.image_url + '" alt="" /></div>';
    });
    document.getElementById('output').innerHTML = output;
  });
};
//# sourceMappingURL=app.js.map
