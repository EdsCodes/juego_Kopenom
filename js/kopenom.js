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
    }
}

function seleccionarMascotaEnemigo(){
    
    let MascotaEnemigo = ''
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    function aleatorio(min, max){
        return Math.floor(Math.random() * (max-min+1) + min)
    }

    function eleccionMascotaEnemigo(jugadaPc) {
        if(aleatorio == 1) {
            jugadaPc = "Firekick"
        } else if (aleatorio == 2) {
            jugadaPc = "Waterhit"
        } else if (aleatorio == 3) {
            jugadaPc = "Earthpunch"
        } 
        return MascotaEnemigo
    }
}
window.addEventListener('load', iniciarJuego)