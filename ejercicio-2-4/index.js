/* 
EJERCICIO 2-4:
    * Crea una función que reciba un número y muestre por consola si es par o impar.
*/

function parImpar(num) {
    if (num % 2 == 0) {
        console.log(num + ' es par')
    } else {
        console.log(num + ' es impar')
    }
}

parImpar(13)
parImpar(64)