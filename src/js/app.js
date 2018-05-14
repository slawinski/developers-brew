'use strict';

document.getElementById('getData').addEventListener('click', getData);

function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts').then(function (res) {
    return res.json();
  }).then(function (jsonData) {
    var output = '<h2>Posts</h2>';
    jsonData.forEach(function (post) {
      output += '<div><h3>' + post.title + '</h3><p>' + post.body + '</p></div>';
    });
    document.getElementById('output').innerHTML = output;
  });
};
//# sourceMappingURL=app.js.map
