  document.getElementById('getData').addEventListener('click', getData);

  function getData(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(jsonData => {
      let output = '<h2>Posts</h2>';
      jsonData.forEach(post => {
        output +=`<div><h3>${post.title}</h3><p>${post.body}</p></div>`;
      });
      document.getElementById('output').innerHTML = output;
    })         
  };