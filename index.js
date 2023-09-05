const API_URL = "https://jsonplaceholder.typicode.com/users";
const buttonEnviar = document.getElementById('envio');
const formulario = document.getElementById('datos');

  buttonEnviar.addEventListener('click', function() {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const apellido = document.getElementById('apellido').value;
    const nacimiento = document.getElementById('nacimiento').value;

  let datos = {
        name: name,
        username: apellido,
        nacimiento: nacimiento
  }

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(error => console.error('Error:', error));
});
  
 