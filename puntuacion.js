
let marcador = []

function iniciarJuego() {
    console.log(`[ START ] - iniciarJuego() - ${marcador}`)
    marcador = [0, 0]
}

function puntoJugador(jugador) {            // jugadores 0 y 1
    console.log(`[ START ] - puntoJugador(${jugador}) - ${marcador}`)
    
}

function resultado() {
    console.log(`[ START ] - resultado() - ${marcador}`)
    if (marcador[0] === 40 && marcador[1] === 40) {
        return 'deuce'
    } else {
        return marcador.toString()

        
    }
}

function incrementar(marcador) {
    switch (marcador) {
        case 0: return 15;
        case 15: return 30;
        case 30: return 40;
        default: return exception;
    }

}
