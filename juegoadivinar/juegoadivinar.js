// Crea un juego de adivinar un numero aleatorio entre 1 y 100.

// El juego debe de permitir al usuario ingresar un numero y la computadora debe de generar un numero aleatorio
// entre 1 y 100.

// El juego debe de imprimir si el numero ingresado por
// el usuario es mayor, menor o igual al numero generado
// por la computadora.

// El juego debe de terminar cuando el usuario adivine
// el numero.

// Ademas debes de tener un contador que se reste uno cada
// vez que el usuario ingrese un numero.

// El usuario debe de tener un maximo de 6 intentos para adivinar el numero.

function adivinarNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  let intentosRestantes = 6;
  let adivinado = false;

  alert("¡Bienvenido al juego de adivinar el número!");

  while (intentosRestantes > 0 && !adivinado) {
    const eleccionJugador = parseInt(prompt("Introduce un número entre 1 y 100:"));

    if (isNaN(eleccionJugador) || eleccionJugador < 1 || eleccionJugador > 100) {
      alert("Por favor, introduce un número válido entre 1 y 100.");
      continue;
    }

    intentosRestantes--;

    if (eleccionJugador === numeroAleatorio) {
      alert("¡Felicidades! ¡Has adivinado el número!");
      adivinado = true;
    } else if (eleccionJugador < numeroAleatorio) {
      alert("El número es mayor. Te quedan " + intentosRestantes + " intentos.");
    } else {
      alert("El número es menor. Te quedan " + intentosRestantes + " intentos.");
    }
  }

  if (!adivinado) {
    alert("Lo siento, se te acabaron los intentos. El número era: " + numeroAleatorio);
  }

  alert("¡Gracias por jugar!");
}

// Iniciar el juego
adivinarNumero();
