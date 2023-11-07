
let puntos = [0, 0]

// Inicializa la puntuación del juego
function iniciarJuego() {
    puntos = [0, 0]
    console.log(`[ OK ] - iniciarJuego()  - ${resultado()}`)
}

// Indica que uno de los jugadores (0, 1) ha ganado el punto. 
// Si el juego ha finalizado, lanzará una excepción.
function puntoJugador(jugador) {
    let contrincante = Math.abs(jugador - 1)
    if (puntos[jugador] < 3) {
        puntos[jugador]++
    } else if (puntos[jugador] - puntos[contrincante] == -1) {
        puntos[contrincante]--
    } else if (puntos[jugador] - puntos[contrincante] == 0) {
        puntos[jugador]++
    } else {
        console.log(`[ EXCEPTION ] - juego terminado`)
        return 'exception'
    }
    console.log(`[ OK ] - puntoJugador(${jugador}) - ${resultado()}`)
}

// Devuelve una cadena indicando el resultado actual del juego.
function resultado() {
    if (puntos[0] < 3 || puntos[1] < 3) {
        return (transformar(puntos[0]) + ' - ' + transformar(puntos[1]))
    } else if (puntos[0] == 3 && puntos[1] == 3) {
        return 'deuce'
    } else if (puntos[0] > 3 || puntos[1] == 3) {
        return 'ventaja al servicio'
    } else if (puntos[0] == 3 || puntos[1] > 3) {
        return 'ventaja al resto'
    } else {
        return `exception`
    }
}

function transformar(puntos) {
    switch (puntos) {
        case 0: return 'nada';
        case 1: return '15';
        case 2: return '30';
        case 3: return '40';
        default: return 'exception';
    }
}

// Test
iniciarJuego()
puntoJugador(1)
puntoJugador(1)
puntoJugador(1)
puntoJugador(0)
puntoJugador(0)
puntoJugador(0)     // deuce
puntoJugador(1)     // ventaja resto
puntoJugador(0)     //deuce
puntoJugador(0)     // ventaja servicio
puntoJugador(0)     // juego servicio
puntoJugador(0)

