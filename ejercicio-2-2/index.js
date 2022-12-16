/* 
EJERCICIO 2-2:
    * Crea una función que reciba un número y devuelva el cuadrado de ese número.
*/

function cuadrado(num){
    console.log(num * num)
}

cuadrado(4)
cuadrado(32)

// Usando la función Math.pow(base, exponente)

function cuadrado2(num){
    console.log(Math.pow(num, 2))
}

cuadrado2(2)
cuadrado2(64)