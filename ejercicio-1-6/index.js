/* 
EJERCICIO 1-6:
    * Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener "nombre", "tipoDePokemon".
    * Crea una condición y si el tipo de pokemon es "fuego" muestra por consola el mensaje "¡Es un pokemon de fuego!".
*/

// Crea los objetos de los tres pokemons con "nombre" y "tipoDePokemon"
const venusaur = {
     nombre: 'Venusaur',
     tipoDePokemon: 'Planta'       
}

const charizard = {
    nombre: 'Charizard',
    tipoDePokemon: 'Fuego'       
}

const blastoise = {
    nombre: 'Blastoise',
    tipoDePokemon: 'Agua'       
}

// Se crea el array que contiene los objetos creados anteriormente
const pokemon = [venusaur, charizard, blastoise]

var conteo = 0;

// Muestra el listado de pokemons con un bucle
// e identifica el tipo fuego con un mensaje

while(conteo <= 2){
    console.log(pokemon[conteo]);
    if(pokemon[conteo]['tipoDePokemon'] == 'Fuego'){
        console.log('¡Es un pokemon tipo fuego!');
    }
    conteo ++;
}