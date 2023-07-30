function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputFirekick = document.getElementById('Firekick')
    let inputWaterhit = document.getElementById('Waterhit')
    let inputEarthpunch = document.getElementById('Earthpunch')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    

    if (inputFirekick.checked){
        spanMascotaJugador.innerHTML = 'Firekick'
        alert("Seleccionaste a Firekick")}
    else if (inputWaterhit.checked){
        spanMascotaJugador.innerHTML = 'Waterhit'
        alert("Seleccionaste a Waterhit")}
    else if (inputEarthpunch.checked){
        spanMascotaJugador.innerHTML = 'Earthpunch'
        alert("Seleccionaste a Earthpunch")}
    else {
        alert("por favor selecciona tu mascota para el combate")
    } return MascotaJugador
}

function seleccionarMascotaEnemigo(){
    
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    function aleatorio(min, max){
        return Math.floor(Math.random() * (max-min+1) + min)
    }
    function eleccion(jugada) {
        let MascotaEnemigo = ""
        if(jugada == 1) {
            MascotaEnemigo = "Firekick"
        } else if (jugada == 2) {
            MascotaEnemigo = "Waterhit"
        } else if (jugador == 3) {
            MascotaEnemigo = "Earthpunch"
        }
        return MascotaEnemigo
    }

    let pc = 0
    let triunfos = 0
    let perdidas = 0

    while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3)
    alert("Eligiste: " + seleccionarMascotaJugador(jugador))  
    alert("PC eligio: " + eleccion(pc)) 

    //combate
    if(pc == jugador) {
        alert("Empate")
        } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
            alert("Ganaste")
            triunfos = triunfos + 1
        } else {
            alert("Perdiste")
            perdidas = perdidas + 1
    }
}

if(triunfos == 1) {
alert("Ganaste " + triunfos + " vez y perdiste " + perdidas + " veces.")
} else {
alert("Ganaste " + triunfos + " veces y perdiste " + perdidas + " veces.")
}
}
window.addEventListener('load', iniciarJuego)