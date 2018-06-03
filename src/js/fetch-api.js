  document.getElementById('getData').addEventListener('click', getData);

  function getData(){
  fetch('https://api.punkapi.com/v2/beers/random')
    .then(res => res.json())
    .then(jsonData => {
      let output = '';
      jsonData.forEach(beer => {
        output +=`
									<div>
                  <img style="width: 75px" src="${beer.image_url}" alt="" />
									<div style="display: inline-block">
									<h3 style="">${beer.name}</h3>
                  <p>${beer.description}</p>
									</div>
									</div>
									`;
      });
      document.getElementById('output').innerHTML = output;
    })         
  };