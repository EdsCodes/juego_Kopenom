//variables globales
let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-Agua')
    botonFuego.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueTierra)

}

//seleccion de mascotas para jugador y aleatorio para pc

    function seleccionarMascotaJugador(){
        let inputFirekick = document.getElementById('Firekick')
        let inputWaterhit = document.getElementById('Waterhit')
        let inputEarthpunch = document.getElementById('Earthpunch')
        let spanMascotaJugador = document.getElementById('mascota-jugador')
    

        if (inputFirekick.checked){
                spanMascotaJugador.innerHTML = 'Firekick'
                alert("Seleccionaste a Firekick")
            }else if (inputWaterhit.checked){
                spanMascotaJugador.innerHTML = 'Waterhit'
                alert("Seleccionaste a Waterhit")
            }else if (inputEarthpunch.checked){
                spanMascotaJugador.innerHTML = 'Earthpunch'
                alert("Seleccionaste a Earthpunch")
            }else {
                alert("por favor selecciona tu mascota para el combate")
            } 

            seleccionarMascotaEnemigo()
     }

        function aleatorio(min, max){
            return Math.floor(Math.random() * (max-min+1) + min)
        }

        function seleccionarMascotaEnemigo(){
            let mascotaAleatorio = aleatorio(1,3)
            let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

            if (mascotaAleatorio == 1){
                   spanMascotaEnemigo.innerHTML = "Firekick"
               } else if (mascotaAleatorio == 2){
               spanMascotaEnemigo.innerHTML = "Waterhit" 
                } else {
                spanMascotaEnemigo.innerHTML = "Earthpunch"
            }
    }
    
    //combate entre las dos mascotas 

    function ataqueFuego() {
        ataqueJugador = 'fuego'
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua(){
        ataqueJugador = 'agua'
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra(){
        ataqueJugador = 'tierra'
        ataqueAleatorioEnemigo()
    }
        
    function ataqueAleatorioEnemigo() { 
        let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'fuego';
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'agua';
    } else {
        ataqueEnemigo = 'tierra';
    } 
    crearMensaje()
}

    function crearMensaje (){
        let sectionMensajes = document.getElementById('Mensajes')
        let parrafo = document.createElement('p')
        parrafo.innerHTML = 'tu mascota atacó con ' + ataqueJugador + ', la mascota de tu enemigo atacó con ' + ataqueEnemigo + '- (PERDISTE O GANASTE)'
        
        sectionMensajes.appenchild(parrafo)
    } 

    
        
window.addEventListener('load', iniciarJuego) 