/*
    EJERCICIO 3-1:
    * Crea una función que reciba un array de strings y devuelva un array
      con las strings que empiecen por "a" o "A".
*/

// Construimos un array con nombre de videojuegos

const videoJuegos = [
    'The legend of Zelda',
    'Pokemon',
    'Mario Kart',
    'Alone in the Dark',
    'Silent Hill',
    'Age of Empires',
    'Final Fantasy',
    'Adventure Island'
];

// Tambien se construye el array vacio en donde se copiarán los juegos que inicien por la letra "a"

const juegosPorA = [];

const buscarPorA = ( juegos => {
    return juegos.split('', [1]) == 'A'
});

const games = videoJuegos.filter(buscarPorA);
console.log(games);