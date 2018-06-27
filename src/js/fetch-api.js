  document.getElementById('getData').addEventListener('click', getData);

  function getData(){

  fetch('https://api.punkapi.com/v2/beers/random')
    .then(res => res.json())
    .then(jsonData => {
      let output = '';
      jsonData.forEach(beer => {
        output +=`<div><h3>${beer.name}</h3>
                  <p>${beer.description}</p>
                  <img class="beer" src="${beer.image_url}" alt="" /></div>`;
      });
      document.getElementById('output').innerHTML = output;
    })         
  };