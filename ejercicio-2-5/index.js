/* 
EJERCICIO 2-5:
    * Dado el siguiente array de personas:
        const personas = [
            { nombre: 'Juan', edad: 18 },
            { nombre: 'María', edad: 16 },
            { nombre: 'Pedro', edad: 20 },
            { nombre: 'Pablo', edad: 15 },
            { nombre: 'Laura', edad: 19 },
        ];
    * Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
    * Dime cual es la persona más joven del array.
    * Dime cual es la persona más mayor del array.
*/

const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },
    { nombre: 'Laura', edad: 19 },
];

// Función para array que contenga las personas mayores de edad

function mayoresDeEdad(listadoDePersonas) {
        //listadoDePersonas.forEach(persona => console.log(persona));
        const mayores = [];
        listadoDePersonas.forEach(function(persona) {
            if (persona['edad'] >= 18)
                mayores.push(persona)
        });
        return mayores;
    }

console.log(mayoresDeEdad(personas));

// Indica cual de las personas es la más joven

function masJoven(listadoDePersonas) {
    let joven = listadoDePersonas[0];
    listadoDePersonas.forEach(function(persona) {
        if (persona.edad < joven.edad) {
            joven = persona;
        }
    });
    return joven;
}

console.log(masJoven(personas));

// Indica cual de las personas es la mayor

function masMayor(listadoDePersonas) {
    let mayor = listadoDePersonas[0];
    listadoDePersonas.forEach(function(persona) {
        if (persona.edad > mayor.edad) {
            mayor = persona;
        }
    });
    return mayor;
}

console.log(masMayor(personas));