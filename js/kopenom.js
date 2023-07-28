function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    if (document.getElementById('Firekick').checked){
        alert("Seleccionaste a firekick")}
    else if (document.getElementById('Waterhit').checked)
        alert("Seleccionaste a Waterhit")
    else if (document.getElementById('Earthpunch').checked)
        alert("Seleccionaste a Earthpunch")
    else {
        alert("por favor selecciona tu mascota para el combate")
    }
}

window.addEventListener('load', iniciarJuego)