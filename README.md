This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br>
(Última Actualización 2:00 p.m. 27/09/2019)

Pokedex
======================

 - [Introducción](#introducción)
  - [Instalación](#instalación)
  - [Herramientas usadas](#herramientas-usadas)
  - [Bugs](#bugs)
  - [Cosas por mejorar](#cosas-por-mejorar)

## Introducción

**La mejor forma de organizar tus pokemons. <br>
Con la pokedex, podrás encontrar todos los pokemons de la región de Kanto. Anímate y vuélvete el mejor, mejor que nadie más.** <br>
<br>
La aplicación se puede visualizar en línea en la siguiente dirección: [Pokeapi](https://pokedex-prueba.herokuapp.com/). Está actualizada al último commit hecho en el repositorio. <br>
Si se requiere probar en local, seguir los pasos de la sección [Instalación](#instalación) <br>
<br>
Utilizando la pokeapi, se obtienen los datos (nombre, imagen, tipo y habilidades) de la primera generación de Pokemones (150 datos).
Al traer los datos, se muestra un Loader para que el usuario pueda saber que los datos se están cargando y no encuentre algunos campos vacíos. Incluye un buscador para encontrar de forma más sencilla a los Pokemones. <br>
La selección del usuario se mostrará al presionar el botón Guardar

## Instalación

Debes de instalar los paquetes con el siguiente comando

### `npm install`

Después podrás inicializar tu aplicación con el siguiente comando

### `npm start`

Podrás empezar a visualizar la aplicación y los cambios que hagas en la siguiente dirección: [http://localhost:3000](http://localhost:3000). La página se refresca automáticamente.
 
 ## Herramientas usadas
 
 * React
 * Bootstrap
 * React-Router
 * React Hooks
 * Cloudinary (Sólo para almacenar las imágenes del proyecto)
 
 ## Bugs

 Durante la elaboración del proyecto, empezaron a salir algunos bugs que no se han podido arreglar, los cuales son: 
 * Al hacerse responsive el sitio:
    * ~~El botón para abrir el Header no funciona. Probablemente por el hecho de que estoy usando un elemento Link, y el componente navbar de Bootstrap necesita una etiqueta <a> para poder funcionar correctamente.~~ El botón funciona perfectamente. El problema que tenía era que no había instalado la dependencia de jquery
    ni había importado el archivo bootstrap.js en el index.js.
    * ~~El listado de pokemons no cuadra con la tabla, lo cual ocasiona que algunos elementos estén encima de otros.~~ Utilicé un formato de tabla que proporciona
    bootstrap para lograr hacer el responsive, ya que fue la forma más rápida que encontré.
 * Al hacer la búsqueda de pokemons:
    * Si le das click al checkbox del pokemón que encontraste, al regresar al listado completo el checkbox se reinicia y nunca aparece que lo seleccionaste, pero el dato si se queda guardado en tu selección.
 * Al confirmar los datos seleccionados: 
    * ~~Más que un bug, tuve problemas tratando de pasar los datos seleccionados a un modal para mostrarlos. Entonces en la aplicación no se puede mostrar dicha selección.~~ Ya se pueden visualizar los pokemones seleccionados al dar Guardar, y están limitados a sólo los primeros 10 seleccionados.

 ## Cosas por mejoras

 * Darle un aviso al usuario de que ya no puede añadir más pokemones al tener ya 10 seleccionados
 * Crear una alerta para notificarle al usuario que sus pokemones fueron 'guardados' con éxito.