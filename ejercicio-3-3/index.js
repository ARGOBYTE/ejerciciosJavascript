/*
    EJERCICIO 3-3:
    * Crea una función que permita comprobar si un string es un palíndromo.
    ** Un palíndromo e una palabra o frase que se lee igual de izquierda a
       derecha que de derecha a izquierda.
    * Ahora haz la misma comprobación pero con un array de strings.
*/

const esPalindromo = ( palabra => {
    // Se convierte la palabra en minúsculas para poder comparar
    const palabraMinusculas = palabra.toLowerCase();
    // Ahora se almacena en una nueva variable, en el proceso, primero la
    // convierte en un array con "split", luego la reversa con el método "reverse"
    // y po último la vuelve a convertir en string con "join"
    const palabraReversada = palabraMinusculas.split("").reverse().join("");
    if (palabraReversada === palabraMinusculas) {
        console.log(palabra + " es palíndromo");
    } else {
        console.log(palabra + " no es palíndromo");
    }
});

esPalindromo("oso");
esPalindromo("hola");
esPalindromo("Omo");

// Se utiliza la comprobación con un array de strings

const esPalindromoArray = ( palabra => {
    const minusculas = palabra.toLowerCase();
    const arrayPalabra = palabra.split("");
    const arrayReversada = minusculas.split("").reverse();
    
})