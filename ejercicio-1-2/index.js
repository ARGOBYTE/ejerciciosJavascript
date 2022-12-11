/* 
EJERCICIO 1-2:
    * Crea una variable llamada "nombre" y asígnale tu nombre como valor.
    * Crea una variable llamada "edad" y asígnale tu edad como valor.
    * Crea una variable llamada "mayorDeEdad" y asígnale un valor booleano que indique si eres mayor de edad.
    * Crea una variable llamada "direccion" y asígnale un objeto con tu dirección.
    * Crea una variable llamada "coloresFavoritos" y asígnale un array con tus colores favoritos.
    * Crea una variable llamada "lenguajesFavoritos" y asígnale un array con tus lenguajes de programación favoritos.
    * Crea una variable llamada "mejorLenguaje" y asígnale el primer elemento del array "lenguajesFavoritos".
    * Crea una variable llamada "peorLenguaje" y asígnale el último elemento del array "lenguajesFavoritos".
*/

const nombre = 'Jhon Fredy';
const edad = 36;
const mayorEdad = true;
const direccion = {
    carrera: '17A',
    calle: '6B',
    numeroCasa: '21',
    barrio: 'La Floresta'
}
const coloresFavoritos = ['negro', 'blanco', 'rojo', 'naranja'];
const lenguajesFavoritos = ['JavaScript', 'Python', 'C++','Java', 'Cobol', 'Fortran'];
const mejorLenguaje = lenguajesFavoritos[0];
const peorLenguaje = lenguajesFavoritos[5];

console.log(nombre);
console.log(edad);
console.log(mayorEdad);
console.log(direccion);
console.log(coloresFavoritos);
console.log(lenguajesFavoritos);
console.log(mejorLenguaje);
console.log(peorLenguaje);