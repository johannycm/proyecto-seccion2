function generareleccionpc() {
  const opciones = ["Piedra", "Papel", "Tijera"];
  const ordenAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[ordenAleatorio];
}

function elegirGanador(eleccionJugador, eleccionPc) {
  if (eleccionJugador === eleccionPc) {
    return "Empate";
  } else if (
    (eleccionJugador === "Piedra" && eleccionPc === "Tijera") ||
    (eleccionJugador === "Papel" && eleccionPc === "Piedra") ||
    (eleccionJugador === "Tijera" && eleccionPc === "Papel")
  ) {
    return "Jugador";
  } else {
    return "Computadora";
  }
}

function jugarPiedraPapelTijera() {
  let rondasJugadas = 0;
  let victoriasJugador = 0;
  let victoriasPc = 0;
  let seguirJugando = true;

  while (seguirJugando) {
    const eleccionJugador = prompt("Elige Piedra, Papel o Tijera:").trim().toLowerCase();
    // Validación de la elección del jugador
    if (!["piedra", "papel", "tijera"].includes(eleccionJugador)) {
      alert("Selección inválida. Por favor, elige Piedra, Papel o Tijera.");
      continue; // Si la entrada es inválida, se vuelve a preguntar
    }

    const eleccionPc = generareleccionpc().toLowerCase();
    alert(`La computadora eligió: ${eleccionPc.charAt(0).toUpperCase() + eleccionPc.slice(1)}`);

    const resultado = elegirGanador(eleccionJugador.charAt(0).toUpperCase() + eleccionJugador.slice(1), 
      eleccionPc.charAt(0).toUpperCase() + eleccionPc.slice(1));
    rondasJugadas++;

    if (resultado === "Empate") {
      alert("¡Es un empate!");
    } else if (resultado === "Jugador") {
      alert("¡Ganaste!");
      victoriasJugador++;
    } else {
      alert("¡La computadora ganó!");
      victoriasPc++;
    }

    alert(`
      Partidas jugadas: ${rondasJugadas}
      Victorias del usuario: ${victoriasJugador}
      Victorias de la computadora: ${victoriasPc}
    `);

    seguirJugando = confirm('¿Quieres seguir jugando?');
  }

  alert('¡Gracias por jugar!');
}

// Iniciar el juego
jugarPiedraPapelTijera();
