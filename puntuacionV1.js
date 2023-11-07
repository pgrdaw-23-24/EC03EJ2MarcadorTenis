
let puntos = []

// Inicializa la puntuación del juego
function iniciarJuego() {
    puntos = [0, 0]
    console.log(`[ OK ] - iniciarJuego() - ${puntos}`)
}

// Indica que uno de los jugadores (0, 1) ha ganado el punto. 
// Si el juego ha finalizado, lanzará una excepción.
function puntoJugador(jugador) {
    puntos[jugador]++
    if (puntos[jugador] > 3 && Math.abs(puntos[0] - puntos[1]) >= 2) {
        return 'exception'
    } else {
        console.log(`[ OK ] - puntoJugador(${jugador}) - ${resultado()}`)
    }
}

// Devuelve una cadena indicando el resultado actual del juego.
function resultado() {
    console.log(`[ OK ] - resultado() - ${puntos}`)
    switch (puntos) {
        case ((puntos[0] >= 3 || puntos[1] >= 3) && Math.abs(puntos[0] - puntos[1]) == 1): return `ventaja`;
        case ((puntos[0] >= 3 || puntos[1] >= 3) && Math.abs(puntos[0] - puntos[1]) == 0): return `deuce`;
        default: return (transformar(puntos[0]) + ' / ' + transformar(puntos[1]));
    }
}

function transformar(puntos) {
    switch (puntos) {
        case 0: return '0';
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
puntoJugador(0)
puntoJugador(0)
puntoJugador(0)
puntoJugador(1)
puntoJugador(1)
puntoJugador(0)
puntoJugador(0)

