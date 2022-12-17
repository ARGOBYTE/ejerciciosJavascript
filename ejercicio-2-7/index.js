/* 
EJERCICIO 2-7:
    * Haz los ejercicios anteriores con funciones flecha.
*/

// Devuelve el doble de un número con función flecha

const doble = num => {
    console.log(num * 2)
}

doble(4)
doble(32)

// Devuelve el cuadrado de un número con función flecha

const cuadrado = num => {
    console.log(num * num)
}

cuadrado(4)
cuadrado(32)

// Función flecha para calcular área del rectágulo

const rectangulo = (largo, ancho) => {
    return largo * ancho
}

console.log('El área del rectángulo es: ' + rectangulo(4, 10) + ' mts2')

// Función flecha para indicar si un número es par o impar

const parImpar = num => {
    if (num % 2 == 0) {
        console.log(num + ' es par')
    } else {
        console.log(num + ' es impar')
    }
}

parImpar(13)
parImpar(64)

// Array de personas

const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },
    { nombre: 'Laura', edad: 19 },
];

// Devuelve mayores de edad del array personas con función flecha

const mayoresDeEdad = listadoDePersonas => {
    const mayores = [];
    listadoDePersonas.forEach(persona => {
        if (persona['edad'] >= 18) {
            mayores.push(persona);
        }
    });
    return mayores
}

console.log(mayoresDeEdad(personas));

// Indica cual de las personas es la más joven con función flecha

const masJoven = listadoDePersonas => {
    let joven = listadoDePersonas[0];
    listadoDePersonas.forEach(persona => {
        if (persona.edad < joven.edad) {
            joven = persona;
        }
    });
    return joven;
}

console.log(masJoven(personas));

// Indica cual de las personas es la mayor con función flecha

const masMayor = listadoDePersonas => {
    let mayor = listadoDePersonas[0];
    listadoDePersonas.forEach(persona => {
        if (persona.edad > mayor.edad) {
            mayor = persona;
        }
    });
    return mayor;
}

console.log(masMayor(personas));

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

// Lista de pokemons con función flecha

const nombrePokemons = listaDePokemons => {
    listaDePokemons.forEach(pokedex => {
        console.log(pokedex.nombre);
    });
}

nombrePokemons(pokemon);

// Muestra en consola la lista de los pokemons tipo fuego con función flecha

const pokemonFuego = listaDePokemons => {
    console.log("Los siguientes son los pokemons tipo fuego:")
    listaDePokemons.forEach(pokedex => {
        if (pokedex['tipoDePokemon'] == 'Fuego') {
            console.log(pokedex.nombre);
        }
    });
}

pokemonFuego(pokemon);