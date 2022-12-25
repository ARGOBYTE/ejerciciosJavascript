/*
    EJERCICIO 3-4:
    * Crea una función que reciba un array de nombres que le han dado like a una
      foto, e indica por consola quien ha dado like. En los siguientes formatos:

    Si nadie ha dado like
        const likes = [];
        'Nadie ha dado like'
    
    Si solo ha dado like una persona
        const likes = ['Juan'];
        'Juan ha dado like'
    
    Si han dado like dos personas
        const likes = ['Juan', 'María'];
        'Juan y María han dado like'
    
    Si han dado like tres personas
        const likes = ['Juan', 'María', 'Pedro'];
        'Juan, María y Pedro han dado like'
    
    Si han dado like más de tres personas
        const likes = ['Juan', 'María', 'Pedro', 'Pablo', 'Laura'];
        'Juan, María y 3 personas más han dado like'
*/

// Primero se debe construir el array con nombres, de los cuales se conocerá quien
// ha dado like a la foto

const contactos = [
    {nombre: 'Uniqua', likeFoto: false},
    {nombre: 'Pablo', likeFoto: true},
    {nombre: 'Tyrone', likeFoto: false},
    {nombre: 'Tasha', likeFoto: false},
    {nombre: 'Austin', likeFoto: true},
]

const cuentaLikes = ( listaDeContactos => {
    const likes = [];
    listaDeContactos.forEach( contacto => {
        if(contacto['likeFoto'] == true) {
            likes.push(contacto['nombre']);
        }
    });
    return likes;
});

const listaDeLikes = cuentaLikes(contactos);

const mostrarLikes = (listaDeLikes => {
    if (listaDeLikes == 0) {
        console.log('Nadie ha dado like :(');
    } else if (listaDeLikes.length == 1) {
        console.log(listaDeLikes[0] + ' ha dado like');
    } else if (listaDeLikes.length > 1 && listaDeLikes.length < 4) {
            if (listaDeLikes.length === 2 ) {
                console.log(listaDeLikes[0] + ' y ' + listaDeLikes[1] + ' han dado like')
            } else if (listaDeLikes.length === 3 ) {
                console.log(listaDeLikes[0] + ', ' + listaDeLikes[1] + ' y ' + listaDeLikes[2] + ' han dado like')
            }
    } else if (listaDeLikes.length >= 4) {
            console.log(listaDeLikes[0] + ", " + listaDeLikes[1] + ' y ' + (listaDeLikes.length - 2) + ' personas tambien dieron like');
    }
});

mostrarLikes(listaDeLikes);