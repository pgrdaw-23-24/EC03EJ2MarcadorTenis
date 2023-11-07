let puntos = [0, 0]

// Inicializa la puntuación del juego
function iniciarJuego() {
    puntos = [0, 0]
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
        return 'exception'
    }
}

// Devuelve una cadena indicando el resultado actual del juego.
function resultado() {
    if (puntos[0] < 3 || puntos[1] < 3) {
        return (transformar(puntos[0]) + ' - ' + transformar(puntos[1]))
    } else if (puntos[0] == 3 && puntos[1] == 3) {
        return 'Deuce'
    } else if (puntos[0] > 3 || puntos[1] == 3) {
        return 'Ventaja al servicio'
    } else if (puntos[0] == 3 || puntos[1] > 3) {
        return 'Ventaja al resto'
    } else {
        return 'exception'
    }
}

function transformar(puntos) {
    switch (puntos) {
        case 0: return 'nada';
        case 1: return ' 15 ';
        case 2: return ' 30 ';
        case 3: return ' 40 ';
        default: return 'exception';
    }
}

export { iniciarJuego, puntoJugador, resultado }    // interface