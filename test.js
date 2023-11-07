import { iniciarJuego, puntoJugador, resultado } from "./puntuacion.js"

// Test

let jugador = 0

do {
    jugador = Math.floor(Math.random() + 0.5)
    console.log(resultado())
} while (puntoJugador(jugador) != 'exception')

switch (jugador) {
    case 0: console.log('Juego para el servicio'); break;
    case 1: console.log('Juego para el resto'); break;
}

