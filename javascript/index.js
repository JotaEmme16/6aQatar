// LISTADO DE JUGADORES
function listadoFichajes(){
    let contenido = "";

    fetch('javascript/futbolistas.json')
        .then((response) => response.json())
        .then((data) => {
            data.forEach(jugador => {
                contenido += `
                <div class="col-6 col-sm-3 col-md-2">
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
});
}

// FILTROS POR POSICIÓN
// MOSTRAR TODOS
let btn_todos = document.getElementById("btn_todos");
btn_todos.addEventListener("click", listadoFichajes);
// MOSTRAR ARQUEROS
let btn_arqueros = document.getElementById("btn_arqueros");
btn_arqueros.addEventListener("click", botonArqueros);

function botonArqueros(){
    let contenido = "";
    const arqueros = futbolistas.filter(arquero => arquero.posicion === "Arquero");
    arqueros.forEach(jugador => {
        contenido += `
        <div class="col-6 col-sm-3 col-md-2">
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
// MOSTRAR DEFENSORES
let btn_defensores = document.getElementById("btn_defensores");
btn_defensores.addEventListener("click", botonDefensores);

function botonDefensores(){
    let contenido = "";
    const defensores = futbolistas.filter(defensor => defensor.posicion === "Defensor");
    defensores.forEach(jugador => {
        contenido += `
        <div class="col-6 col-sm-3 col-md-2">
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
// MOSTRAR MEDIOCAMPISTAS
let btn_mediocampistas = document.getElementById("btn_mediocampistas");
btn_mediocampistas.addEventListener("click", botonMediocampistas);

function botonMediocampistas(){
    let contenido = "";
    const mediocampistas = futbolistas.filter(medio => medio.posicion === "Mediocampista");
    mediocampistas.forEach(jugador => {
        contenido += `
        <div class="col-6 col-sm-3 col-md-2">
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
// MOSTRAR DELANTEROS
let btn_delanteros = document.getElementById("btn_delanteros");
btn_delanteros.addEventListener("click", botonDelanteros);

function botonDelanteros(){
    let contenido = "";
    const delanteros = futbolistas.filter(delantero => delantero.posicion === "Delantero");
    delanteros.forEach(jugador => {
        contenido += `
        <div class="col-6 col-sm-3 col-md-2">
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
// FUNCIONES
listadoFichajes();
contadorJugadores();