/*
    EJERCICIO 3-5:
    Dado el siguiente array de objetos:
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
];

/* 1. Crea una función que devuelva un array con los nombres de las personas que
      que viven en Madrid.
*/
const vivenEnMadrid = (usuarios => {
    const vivenEnMadrid = [];
    usuarios.forEach(usuario => {
        if (usuario['city'] === 'Madrid') {
            vivenEnMadrid.push(usuario['name']);
        }
    });
    return vivenEnMadrid;
});

console.log(vivenEnMadrid(users)); // ['Juan', 'Pedro', 'Pablo']

/* 2. Función que devuelve un array con los nombres de las personas que tengan más
      de 25 años
*/

const masDeVeinticinco = (usuarios => {
    const masDeVeinticinco = [];
    usuarios.forEach(usuario => {
        if (usuario['age'] > 25) {
            masDeVeinticinco.push(usuario['name']);
        }
    });
    return masDeVeinticinco;
});

console.log(masDeVeinticinco(users)); // ['María', 'Laura', 'Pablo']

/* 3. Función que devuelve un array con los nombres de las personas que tienen más
      de 25 años y viven en Madrid
*/

const veinticincoViveEnMadrid = (usuarios => {
    const veinticincoViveEnMadrid = [];
    usuarios.forEach(usuario => {
        if (usuario['age'] > 25 && usuario['city'] === 'Madrid') {
            veinticincoViveEnMadrid.push(usuario['name']);
        }
    });
    return veinticincoViveEnMadrid;
});

console.log(veinticincoViveEnMadrid(users)); // ['Pablo']

// 4. Encuentra la primera persona que le guste programar

const buscarProgramador = (usuario) => usuario.hobbies.includes('programar');
const programar = users.find(buscarProgramador);
console.log(programar); // {name: 'Juan', age: 25, city: 'Madrid', hobbies: Array(3)}

// 5. Haz la suma de todas las edades de las personas

const sumaDeEdades = (users) => 
    users.reduce((acumulador, usuario) => acumulador + usuario.age, 0);

console.log(sumaDeEdades(users)); // 137

/* 6. Crea un nuevo array solo con la ciudad de cada persona y su primer hobby.
      La escritura del array debe ser:
    [
        {
            city: 'Madrid',
            hobby: 'fútbol',
        },
        {
            city: 'Barcelona',
            hobby: 'pintar',
        },
        // ...
    ]
*/

const ciudadHobby = users.map((usuario) => ({
    city: usuario.city,
    hobby: usuario.hobbies[0],
}));

console.log(ciudadHobby);

/*  {city: 'Madrid', hobby: 'fútbol'}
    {city: 'Barcelona', hobby: 'pintar'}
    {city: 'Madrid', hobby: 'fútbol'}
    {city: 'Barcelona', hobby: 'pintar'}
    {city: 'Madrid', hobby: 'fútbol'}
*/