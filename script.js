const modoOscuroBtn = document.getElementById('modo-oscuro-btn');//aqui creamos una referencia al boton que se encuentra en nuestro html en este caso es id=modo-oscuro-btn//
const body = document.body;
// aqui hacemos referencia al body de nuestro html, lo que nos permitira manipular las clases de este elemento para cambiar los estilos.

modoOscuroBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// en las ultimas 2 lineas lo que hacemos es en la primera crear un evento para realizar una accion cada vez que clikeamos en nuestro boton, en la segunda  body.classList nos permite acceder a la lista de clases del body y con .toggle('dark-mode') creamos la clase dark mode sino se encutra presente y la elimina en caso de que ya este. esto nos deja cambiar entre modo oscuro y claro al hacer click//


//En resumen JavaScript busca el botón con el ID 'modo-oscuro-btn', obtiene una referencia al elemento body, y luego agrega  eventos al botón. Cuando se hace clic en el botón, se cambia la clase 'dark-mode' en el elemento body, lo que cambia los estilos según la hoja de estilos CSS //