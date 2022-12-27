/*
    EJERCICIO 3-6:
   1. Crea una función que reciba un array de strings y devuelva un array con las
      strings ordenadas alfabéticamente de menor a mayor.
   2. Dado el siguiente array de números, crea una función que devuelva un array
      sin los números duplicados.
   
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
*/

const strings = ['hola', 'soy', 'una', 'frase', 'en', 'desorden'];

const ordenadosAlfabeticamente = (strings) =>
    strings.sort((a, b) => a.localeCompare(b));

console.log(ordenadosAlfabeticamente(strings));

// Función que devuelva un array de números sin duplicar.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const sinDuplicar = numbers.filter((numero, index) => {
    return numbers.indexOf(numero) === index;
});

console.log(sinDuplicar);

/*
 filter itera sobre los elementos del arreglo y aplica la función argumento 
 en cada item retornando un valor _boolean, si el elemento pasa la condición 
 se retorna true indicando que este será agregado al nuevo arreglo.
 Para este caso de remover elementos duplicados utilizamos como método auxiliar 
 la función Array.indexOf. Este método retorna Array.indexOf retorna el primer 
 indice del arreglo en donde se encuentre un elemento dado.
 */

/* 3. Dado el siguiente array de objetos, crea una función que devuelva un array
      sin  los objetos duplicados.
*/

const users = [
    {   name: 'Juan',
        age: 25,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar'],
    },
    {   name: 'María',
        age: 30,
        city: 'Barcelona',
        hobbies: ['pintar', 'leer', 'programar'],
    },
    {   name: 'Pedro',
        age: 20,
        city: 'Madrid',
        hobbies: ['fútbol', 'programar'],
    },
    {   name: 'Laura',
        age: 35,
        city: 'Barcelona',
        hobbies: ['pintar', 'leer', 'programar'],
    },
    {   name: 'Pablo',
        age: 27,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar'],
    },
    {   name: 'Juan',
        age: 25,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar'],
    },
    {   name: 'María',
        age: 30,
        city: 'Barcelona',
        hobbies: ['pintar', 'leer', 'programar'],
    },
    {   name: 'Pedro',
        age: 20,
        city: 'Madrid',
        hobbies: ['fútbol', 'programar'],
    },
    {   name: 'Laura',
        age: 35,
        city: 'Barcelona',
        hobbies: ['pintar', 'leer', 'programar'],
    },
    {   name: 'Pablo',
        age: 35,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar'],
    },
];

const sinDuplicados = (users) => 
    users.filter((usuario, index) => {
        const stringDeUsuarios = JSON.stringify(usuario);
        return (
            users.findIndex((usuario) => JSON.stringify(usuario) === stringDeUsuarios) === index
        );
    });


console.log(sinDuplicados(users));