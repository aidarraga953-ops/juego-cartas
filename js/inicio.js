const jugadorGuardado =
    localStorage.getItem("cardWarsJugador");


/* =========================================
   COMPROBAR JUGADOR
========================================= */

if (!jugadorGuardado) {

    window.location.href = "./index.html";

}


/* =========================================
   OBTENER JUGADOR
========================================= */

const jugador =
    JSON.parse(jugadorGuardado);


/* =========================================
   ELEMENTOS DEL HTML
========================================= */

const playerName =
    document.querySelector(".navbar__player-name");


function obtenerImagenAvatar(avatar) {

    const imagenes = {

        finn: "finn.webp",

        jake: "jake.webp",

        marceline: "marceline.webp",

        "princesa-chicle": "dulce.webp",

        "rey-helado": "rey helado.webp",

        flama: "princesa flama.webp",

        mentita: "mentita.webp"

    };


    return imagenes[avatar];

}

const playerAvatar =
    document.getElementById("player-avatar");

/* =========================================
   MOSTRAR NOMBRE
========================================= */

playerName.textContent =
    jugador.nombre;
playerAvatar.src =
    `../assets/src/${obtenerImagenAvatar(jugador.avatar)}`;

/* =========================================
   BOTÓN COMENZAR PARTIDA
========================================= */

const startButton =
    document.getElementById("start-game");


startButton.addEventListener("click", () => {

    window.location.href =
        "./seleccion.html";

});