// LISTADO E INFORMACIÓN DE LOS JUGADORES FICHADOS
function fichajesEquipo(){
    const futbolistas = devolverEquipo();
    let contenido = "";

    futbolistas.forEach(jugador => {
        contenido += `
        <div class="col-4 col-sm-3 col-md-2">
            <div class="card m-2" style="width: auto;">
            <img src="images/${jugador.imagen}" class="card-img-top" alt="${jugador.nombre}">
            <div class="card-body">
                <h5 class="card-title">${jugador.nombre}</h5>
                <p>Posición: ${jugador.posicion} <br> Nacionalidad: ${jugador.nacionalidad}</p>
                <a class="btn btn-danger" onclick="eliminarJugador(${jugador.id})">- Eliminar</a>
            </div>
            </div>
        </div>`;
    });

    document.getElementById("fichajes").innerHTML = contenido;

    let valor_total = 0;
    let promedio_edad = 0;
    for (let jugador of futbolistas){
            valor_total += jugador.valor;
            promedio_edad += jugador.edad/futbolistas.length;
        }
    
    futbolistas.length == 0 ? document.getElementById("info_equipo").innerHTML = "<br><b>ATENCIÓN: TODAVÍA NO FICHASTE A NINGÚN JUGADOR.</b>" : document.getElementById("info_equipo").innerHTML = "Información | La cotización de mercado de tu equipo es de <b>USD " + valor_total.toLocaleString() + "</b>, mientras que el promedio de edad es de <b>" + promedio_edad.toFixed(1) + " años</b>.";
}

//ELIMINAR JUGADOR
function eliminarJugador(id){
    const tu_equipo = devolverEquipo();
    let eliminar = tu_equipo.findIndex(x => x.id === id);
    tu_equipo.splice(eliminar, 1);
    jugadorEliminado();

    almacenarEquipo(tu_equipo);
    fichajesEquipo();
    contadorJugadores();
}

// BOTÓN CREAR CLUB
let boton_nombreclub = document.getElementById("btncrearclub");
boton_nombreclub.addEventListener("click", ingresarClub);

function ingresarClub(){
    let nombre_club = document.getElementById("nombreclub").value;
    document.getElementById("tuequipo").innerHTML = nombre_club.toUpperCase() + " | PLANTILLA OFICIAL";
    document.getElementById("nombreclub").value = "";
}

// BOTÓN CONFIRMAR CLUB
let btnconfirmarclub = document.getElementById("btnconfirmarclub");
btnconfirmarclub.addEventListener("click", confirmarClub);

function confirmarClub(){
    alert("Ups, todavía estamos trabajando en esta sección, volvé más tarde.")
}

// BOTÓN ELIMINAR CLUB
let btneliminarclub = document.getElementById("btneliminarclub");
btneliminarclub.addEventListener("click", eliminarClub);

function eliminarClub(){
    document.getElementById("tuequipo").innerHTML = "PLANTILLA OFICIAL";
    document.getElementById("fichajes").innerHTML = "";
    document.getElementById("info_equipo").innerHTML = "<br><b>ATENCIÓN: TODAVÍA NO FICHASTE A NINGÚN JUGADOR.</b>";
    localStorage.removeItem("tu_equipo");
    clubEliminado();
}

fichajesEquipo();