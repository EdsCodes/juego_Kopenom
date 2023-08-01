
    export function ataqueFuego(){
        ataqueJugador = 'fuego'
        ataqueEnemigo()
    }
    export function ataqueAgua(){
        ataqueJugador = 'agua'
        ataqueEnemigo()
    }
    export function ataqueTierra(){
        ataqueJugador = 'tierra'
        ataqueEnemigo()
    }

    export function AtaqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)-   

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'fuego'}
    else if(ataqueAleatorio == 2){
        ataqueAleatorio = 'agua'
    } else {ataqueAleatorio = 'tierra'
    }
} return ataqueEnemigo
