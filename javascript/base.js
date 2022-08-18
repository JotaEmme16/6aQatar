// ARRAY DE FUTBOLISTAS A FICHAR
const futbolistas = [
    // ARQUEROS
    {id: 1, imagen: "alisson.webp", nombre: "Alisson Becker", edad: 29, nacionalidad: "Brasil", posicion: "Arquero", valor: 35000000},
    {id: 2, imagen: "courtois.webp", nombre: "Thibaut Courtois", edad: 30, nacionalidad: "Bélgica", posicion: "Arquero", valor: 60000000},
    {id: 3, imagen: "dibumartinez.webp", nombre: "Emiliano Martínez", edad: 29, nacionalidad: "Argentina", posicion: "Arquero", valor: 28000000},
    {id: 4, imagen: "lloris.webp", nombre: "Hugo Lloris", edad: 35, nacionalidad: "Francia", posicion: "Arquero", valor: 7000000},
    {id: 5, imagen: "pickford.webp", nombre: "Jordan Pickford", edad: 28, nacionalidad: "Inglaterra", posicion: "Arquero", valor: 20000000},
    {id: 6, imagen: "unaisimon.webp", nombre: "Unai Simón", edad: 25, nacionalidad: "España", posicion: "Arquero", valor: 25000000},
    // DEFENSORES
    {id: 7, imagen: "thiagosilva.webp", nombre: "Thiago Silva", edad: 37, nacionalidad: "Brasil", posicion: "Defensor", valor: 2500000},
    {id: 8, imagen: "alderweireld.webp", nombre: "Toby Alderweireld", edad: 33, nacionalidad: "Bélgica", posicion: "Defensor", valor: 7000000},
    {id: 9, imagen: "cutiromero.webp", nombre: "Cristian Romero", edad: 24, nacionalidad: "Argentina", posicion: "Defensor", valor: 48000000},
    {id: 10, imagen: "kounde.webp", nombre: "Jules Koundé", edad: 23, nacionalidad: "Francia", posicion: "Defensor", valor: 60000000},
    {id: 11, imagen: "tao.webp", nombre: "Alexander-Arnold", edad: 23, nacionalidad: "Inglaterra", posicion: "Defensor", valor: 80000000},
    {id: 12, imagen: "martinez.webp", nombre: "Iñigo Martínez", edad: 31, nacionalidad: "España", posicion: "Defensor", valor: 25000000},
    // MEDIOCAMPISTAS
    {id: 13, imagen: "casemiro.webp", nombre: "Carlos Casemiro", edad: 30, nacionalidad: "Brasil", posicion: "Mediocampista", valor: 40000000},
    {id: 14, imagen: "tielemans.webp", nombre: "Youri Tielemans", edad: 25, nacionalidad: "Bélgica", posicion: "Mediocampista", valor: 55000000},
    {id: 15, imagen: "rodrigodepaul.webp", nombre: "Rodrigo De Paul", edad: 28, nacionalidad: "Argentina", posicion: "Mediocampista", valor: 40000000},
    {id: 16, imagen: "kante.webp", nombre: "N'Golo Kanté", edad: 31, nacionalidad: "Francia", posicion: "Mediocampista", valor: 40000000},
    {id: 17, imagen: "foden.webp", nombre: "Phil Foden", edad: 22, nacionalidad: "Inglaterra", posicion: "Mediocampista", valor: 90000000},
    {id: 18, imagen: "busquets.webp", nombre: "Sergio Busquets", edad: 34, nacionalidad: "España", posicion: "Mediocampista", valor: 9000000},
    //DELANTEROS
    {id: 19, imagen: "neymarjr.webp", nombre: "Neymar Jr", edad: 30, nacionalidad: "Brasil", posicion: "Delantero", valor: 75000000},
    {id: 20, imagen: "hazard.webp", nombre: "Eden Hazard", edad: 31, nacionalidad: "Bélgica", posicion: "Delantero", valor: 12000000},
    {id: 21, imagen: "liomessi.webp", nombre: "Lionel Messi", edad: 35, nacionalidad: "Argentina", posicion: "Delantero", valor: 50000000},
    {id: 22, imagen: "mbappe.webp", nombre: "Kylian Mbappé", edad: 23, nacionalidad: "Francia", posicion: "Delantero", valor: 160000000},
    {id: 23, imagen: "harrykane.webp", nombre: "Harry Kane", edad: 29, nacionalidad: "Inglaterra", posicion: "Delantero", valor: 90000000},
    {id: 24, imagen: "ferrantorres.webp", nombre: "Ferran Torres", edad: 22, nacionalidad: "España", posicion: "Delantero", valor: 45000000},
];

// ARRAY Y LOCALSTORAGE DEL EQUIPO A ARMAR
const tu_equipo = [];

function almacenarEquipo(futbolistas){
    localStorage.setItem("tu_equipo", JSON.stringify(futbolistas));
}

function devolverEquipo(){
    return JSON.parse(localStorage.getItem("tu_equipo")) || [];
}

// AGREGAR JUGADORES
function buscarJugador(id){
    return futbolistas.find(jugador => jugador.id === id);
}

function ficharJugador(id){
    const tu_equipo = devolverEquipo();
    let duplicado = tu_equipo.findIndex(item => item.id === id)
    if (tu_equipo.length < 6){
        if (duplicado > -1){
            alert("Este jugador ya forma parte de tu equipo, seleccioná otro.");
        } else {
            const jugador = buscarJugador(id);
            tu_equipo.push(jugador);
        }
        almacenarEquipo(tu_equipo);
        contadorJugadores();
    } else{
        alert("Ya tenés a los seis jugadores necesarios para tu equipo.");
    }
}

function contadorJugadores(){
    const tu_equipo = devolverEquipo();
    let plantilla = tu_equipo.length;
    let contenido = `
    <button type="button" class="btn btn-warning position-relative">
    <img src="images/cancha.png" alt="Ver Plantilla" width="50">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
        ${plantilla}
        </span>
    </button>`;

    if (window.location.pathname === "/proyecto-final/index.html" || window.location.pathname === "/index.html"){
        document.getElementById("btnplantilla").innerHTML = contenido;
    }
}