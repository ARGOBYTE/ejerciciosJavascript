/* 
EJERCICIO 2-6:
    * Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un array de pokemons
      y muestre por consola el nobre de cada pokemon.
    * También vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada
      pokemon que sea de tipo fuego.
*/

// Array con pokemons

const pokemon = [
    { nombre: 'Venusaur', tipoDePokemon: 'Planta' },
    { nombre: 'Charizard', tipoDePokemon: 'Fuego' },
    { nombre: 'Blastoise', tipoDePokemon: 'Agua' },
    { nombre: 'Raticate', tipoDePokemon: 'Normal' },
    { nombre: 'Arcanine', tipoDePokemon: 'Fuego' },
    { nombre: 'Rapidash', tipoDePokemon: 'Fuego' },
    { nombre: 'Hypno', tipoDePokemon: 'Psiquico' },
];

// Muestra en consola la lista de los nombre de los pokemons contenidos en el array

function nombrePokemons(listaDePokemons) {
    listaDePokemons.forEach(function(pokedex) {
        console.log(pokedex.nombre);
    });
}

nombrePokemons(pokemon);

// Muestra en consola la lista de los pokemons tipo fuego

function pokemonFuego(listaDePokemons) {
    console.log("Los siguientes son los pokemons tipo fuego:")
    listaDePokemons.forEach(function(pokedex) {
        if (pokedex['tipoDePokemon'] == 'Fuego') {
            console.log(pokedex.nombre);
        }
    });
}

pokemonFuego(pokemon);