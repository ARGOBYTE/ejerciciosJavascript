/* 
EJERCICIO 1-5:
    * Crea un array de 3 pokemons.
    * Muestra por consola el nombre de cada pokemon.
    * Bonus de investigación: ¿Cómo se puede mostrar el nombre de cada pokemon en una línea?
    * Bonus extra: ¿Cómo se puede hacer esto con bucles?
*/

const pokemon = ['Venusaur', 'Charizard', 'Blastoise'];
var conteo = 0;

// Muestra el listado de pokemons contenidos en el array

console.log(pokemon[0]);
console.log(pokemon[1]);
console.log(pokemon[2]);

// Muestra el listado de pokemons en una linea

console.log(pokemon[0], pokemon[1], pokemon[2]);

// Muestra el listado de pokemons con un bucle

while(conteo <= 2){
    console.log(pokemon[conteo]);
    conteo ++;
}