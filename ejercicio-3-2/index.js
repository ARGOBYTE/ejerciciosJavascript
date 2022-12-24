/*
    EJERCICIO 3-2:
    * Escribe un programa que permita a alguien adivinar un PIN de 4 dígitos
      exactamente 3 veces. Si el usuario adivina el número correctamente, imprime
      "¡Eso fue correcto!" de lo contrario, imprimirá "Lo siento, eso estaba mal".
      El programa se detiene despues del 4° intento o si lo adivinaron correctamente.

      Puedes usar este código para obtener el PIN de entrada del usuario:

      const pin = prompt(´Introduce el PIN: ´);
*/

let pin = prompt("Introduce el PIN: ");

while (pin == null || /\D/.test(pin) || pin == "" || pin.length < 4 || pin.length > 4) {
    pin = prompt("Entre un PIN válido: ");
};

let adivina = prompt("Intenta adivinar el PIN: ");

let aviso = 0;
while (aviso < 2) {
    if (adivina === pin) {
        console.log("¡Eso fue correcto!");
        aviso = 5;
    } else {
        console.log("Lo siento, eso estaba mal");
        adivina = prompt("Intenta de nuevo: ");
        aviso ++;
    }
}