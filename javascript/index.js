// LISTADO DE JUGADORES
function listadoFichajes(){
    let contenido = "";

    futbolistas.forEach(jugador => {
        contenido += `
        <div class="col-md-2">
            <div class="card m-2" style="width: auto;">
            <img src="images/${jugador.imagen}" class="card-img-top" alt="${jugador.nombre}">
            <div class="card-body">
                <h5 class="card-title">${jugador.nombre}</h5>
                <p>Posición: ${jugador.posicion} <br> Nacionalidad: ${jugador.nacionalidad}</p>
                <a class="btn btn-success" onclick="ficharJugador(${jugador.id})">+ Fichar</a>
            </div>
            </div>
        </div>`;
    });

    document.getElementById("fichajes").innerHTML = contenido;
}

listadoFichajes();
contadorJugadores();