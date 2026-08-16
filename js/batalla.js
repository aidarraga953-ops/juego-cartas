/* =========================
   DATOS DEL JUEGO
========================= */

const battleData =
    localStorage.getItem("cardWarsGame");


if (!battleData) {

    window.location.href =
        "./seleccion.html";

}


const gameData =
    JSON.parse(battleData);


/* =========================
   ELEMENTOS DEL HTML
========================= */

const battleMap =
    document.getElementById(
        "battle-map"
    );


const playerCardsContainer =
    document.getElementById(
        "player-cards"
    );


const activePlayerCardContainer =
    document.getElementById(
        "active-player-card"
    );


const activeEnemyCardContainer =
    document.getElementById(
        "active-enemy-card"
    );


/* =========================
   CARTAS DEL JUGADOR
========================= */

let playerCards =
    gameData.cartas.map(
        (carta) => ({

            ...carta,

            vida: carta.vida,

            vidaMaxima: carta.vida

        })
    );


/* =========================
   CARTAS DEL ENEMIGO
========================= */

let enemyCards = [];


/* =========================
   ESTADO DE LA BATALLA
========================= */

let selectedPlayerCard = null;

let activeEnemyCard = null;

let turno = "jugador";


/* =========================
   MAPA
========================= */

battleMap.textContent =
    `Mapa: ${gameData.mapa.nombre}`;


/* =========================
   CREAR CARTA GRANDE
========================= */

function crearCartaGrande(carta) {

    const card =
        document.createElement(
            "article"
        );


    card.classList.add(
        "battle-card",
        "battle-card--large"
    );


    /* NOMBRE */

    const title =
        document.createElement(
            "h3"
        );

    title.textContent =
        carta.nombre;


    /* TIPO */

    const type =
        document.createElement(
            "p"
        );

    type.textContent =
        `Tipo: ${carta.tipo}`;


    /* VIDA */

    const healthText =
        document.createElement(
            "p"
        );


    healthText.classList.add(
        "health__text"
    );


    healthText.textContent =
        `❤️ ${carta.vida} / ${carta.vidaMaxima}`;


    /* BARRA */

    const health =
        document.createElement(
            "div"
        );


    health.classList.add(
        "health"
    );


    const healthBar =
        document.createElement(
            "div"
        );


    healthBar.classList.add(
        "health__bar"
    );


    const porcentajeVida =
        (
            carta.vida /
            carta.vidaMaxima
        ) * 100;


    healthBar.style.width =
        `${porcentajeVida}%`;


    health.appendChild(
        healthBar
    );


    /* ATAQUE */

    const attack =
        document.createElement(
            "p"
        );


    attack.textContent =
        `⚔️ ${carta.ataque}`;


    /* HABILIDAD */

    const ability =
        document.createElement(
            "p"
        );


    ability.classList.add(
        "battle-card__ability"
    );


    ability.textContent =
        `✨ ${carta.habilidad}`;


    /* AGREGAR INFORMACIÓN */

    card.appendChild(title);

    card.appendChild(type);

    card.appendChild(
        healthText
    );

    card.appendChild(
        health
    );

    card.appendChild(
        attack
    );

    card.appendChild(
        ability
    );


    return card;

}


/* =========================
   CREAR MINI CARTA
========================= */

function crearMiniCarta(
    carta,
    index
) {

    const card =
        document.createElement(
            "article"
        );


    card.classList.add(
        "battle-card",
        "battle-card--small"
    );


    /* NOMBRE */

    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        carta.nombre;


    /* VIDA */

    const health =
        document.createElement(
            "p"
        );


    health.textContent =
        `❤️ ${carta.vida}`;


    card.appendChild(title);

    card.appendChild(health);


    /* SELECCIONAR */

    card.addEventListener(
        "click",
        () => {

            seleccionarCarta(
                index
            );

        }
    );


    return card;

}


/* =========================
   SELECCIONAR CARTA
========================= */

function seleccionarCarta(index) {

    if (
        turno !== "jugador"
    ) {

        return;

    }


    selectedPlayerCard =
        index;


    const carta =
        playerCards[index];


    /* MOSTRAR CARTA GRANDE */

    mostrarCartaActivaJugador(
        carta
    );


    /* ACTUALIZAR MINI CARTAS */

    mostrarMiniCartas();


    console.log(
        `Carta seleccionada: ${carta.nombre}`
    );

}


/* =========================
   MOSTRAR CARTA ACTIVA
========================= */

function mostrarCartaActivaJugador(
    carta
) {

    activePlayerCardContainer.innerHTML =
        "";


    const card =
        crearCartaGrande(
            carta
        );


    /* CONTENEDOR DE BOTONES */

    const actions =
        document.createElement(
            "div"
        );


    actions.classList.add(
        "battle-card__actions"
    );


    /* BOTÓN ATACAR */

    const attackButton =
        document.createElement(
            "button"
        );


    attackButton.type =
        "button";


    attackButton.textContent =
        "⚔️ Atacar";


    attackButton.addEventListener(
        "click",
        atacar
    );


    /* BOTÓN HABILIDAD */

    const abilityButton =
        document.createElement(
            "button"
        );


    abilityButton.type =
        "button";


    abilityButton.textContent =
        "✨ Habilidad";


    abilityButton.addEventListener(
        "click",
        usarHabilidad
    );


    /* AGREGAR BOTONES */

    actions.appendChild(
        attackButton
    );


    actions.appendChild(
        abilityButton
    );


    card.appendChild(
        actions
    );


    activePlayerCardContainer.appendChild(
        card
    );

}


/* =========================
   MOSTRAR CARTA ENEMIGA
========================= */

function mostrarCartaActivaEnemigo(
    carta
) {

    activeEnemyCardContainer.innerHTML =
        "";


    if (!carta) {

        return;

    }


    const card =
        crearCartaGrande(
            carta
        );


    activeEnemyCardContainer.appendChild(
        card
    );

}


/* =========================
   MOSTRAR MINI CARTAS
========================= */

function mostrarMiniCartas() {

    playerCardsContainer.innerHTML =
        "";


    playerCards.forEach(
        (carta, index) => {

            const miniCard =
                crearMiniCarta(
                    carta,
                    index
                );


            /* CARTA SELECCIONADA */

            if (
                index ===
                selectedPlayerCard
            ) {

                miniCard.classList.add(
                    "battle-card--selected"
                );

            }


            playerCardsContainer.appendChild(
                miniCard
            );

        }
    );

}


/* =========================
   CREAR EQUIPO ENEMIGO
========================= */

function crearEquipoEnemigo() {

    const todasLasCartas =
        gameData.cartas;


    while (
        enemyCards.length < 5
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                todasLasCartas.length
            );


        const randomCard =
            todasLasCartas[
                randomIndex
            ];


        const enemyCard = {

            ...randomCard,

            vida: randomCard.vida,

            vidaMaxima: randomCard.vida

        };


        const alreadyExists =
            enemyCards.some(
                (carta) =>
                    carta.nombre ===
                    enemyCard.nombre
            );


        if (!alreadyExists) {

            enemyCards.push(
                enemyCard
            );

        }

    }

}


/* =========================
   ATACAR
========================= */

function atacar() {

    if (
        turno !== "jugador"
    ) {

        return;

    }


    if (
        selectedPlayerCard === null
    ) {

        alert(
            "Selecciona una carta."
        );

        return;

    }


    if (
        enemyCards.length === 0
    ) {

        return;

    }


    const playerCard =
        playerCards[
            selectedPlayerCard
        ];


    /* ENEMIGO ALEATORIO */

    const randomEnemyIndex =
        Math.floor(
            Math.random() *
            enemyCards.length
        );


    const enemyCard =
        enemyCards[
            randomEnemyIndex
        ];


    activeEnemyCard =
        enemyCard;


    /* MOSTRAR ENEMIGO */

    mostrarCartaActivaEnemigo(
        enemyCard
    );


    /* DAÑO */

    enemyCard.vida -=
        playerCard.ataque;


    if (
        enemyCard.vida < 0
    ) {

        enemyCard.vida = 0;

    }


    console.log(
        `${playerCard.nombre} atacó a ${enemyCard.nombre}`
    );


    /* ACTUALIZAR CARTA */

    mostrarCartaActivaEnemigo(
        enemyCard
    );


    /* ENEMIGO MUERTO */

    if (
        enemyCard.vida === 0
    ) {

        enemyCards.splice(
            randomEnemyIndex,
            1
        );


        activeEnemyCard =
            null;


        activeEnemyCardContainer.innerHTML =
            "";

    }


    /* COMPROBAR GANADOR */

    if (
        verificarGanador()
    ) {

        return;

    }


    /* CAMBIAR TURNO */

    turno =
        "enemigo";


    setTimeout(
        turnoEnemigo,
        1000
    );

}


/* =========================
   TURNO DEL ENEMIGO
========================= */

function turnoEnemigo() {

    if (
        playerCards.length === 0
    ) {

        return;

    }


    if (
        enemyCards.length === 0
    ) {

        return;

    }


    /* ENEMIGO ALEATORIO */

    const randomEnemyIndex =
        Math.floor(
            Math.random() *
            enemyCards.length
        );


    const enemyCard =
        enemyCards[
            randomEnemyIndex
        ];


    /* JUGADOR ALEATORIO */

    const randomPlayerIndex =
        Math.floor(
            Math.random() *
            playerCards.length
        );


    const playerCard =
        playerCards[
            randomPlayerIndex
        ];


    /* MOSTRAR ENEMIGO */

    mostrarCartaActivaEnemigo(
        enemyCard
    );


    /* ATAQUE */

    playerCard.vida -=
        enemyCard.ataque;


    if (
        playerCard.vida < 0
    ) {

        playerCard.vida = 0;

    }


    console.log(
        `${enemyCard.nombre} atacó a ${playerCard.nombre}`
    );


    /* CARTA MUERTA */

    if (
        playerCard.vida === 0
    ) {

        playerCards.splice(
            randomPlayerIndex,
            1
        );


        /*
            Si murió la carta
            seleccionada, quitamos
            la selección.
        */

        if (
            selectedPlayerCard ===
            randomPlayerIndex
        ) {

            selectedPlayerCard =
                null;

            activePlayerCardContainer.innerHTML =
                "";

        }

    }


    /* ACTUALIZAR MINI CARTAS */

    mostrarMiniCartas();


    /* COMPROBAR GANADOR */

    if (
        verificarGanador()
    ) {

        return;

    }


    turno =
        "jugador";


    /*
        Si ya no hay carta
        seleccionada, elegimos
        automáticamente la primera.
    */

    if (
        selectedPlayerCard === null
    ) {

        seleccionarCarta(0);

    }

}


/* =========================
   HABILIDAD
========================= */

function usarHabilidad() {

    if (
        turno !== "jugador"
    ) {

        return;

    }


    if (
        selectedPlayerCard === null
    ) {

        return;

    }


    const carta =
        playerCards[
            selectedPlayerCard
        ];


    console.log(
        `Habilidad de ${carta.nombre}:`
    );


    console.log(
        carta.habilidad
    );


    alert(
        `✨ ${carta.nombre}\n\n${carta.habilidad}`
    );

}


/* =========================
   GANADOR
========================= */

function verificarGanador() {

    if (
        enemyCards.length === 0
    ) {

        alert(
            "¡Ganaste la batalla! 🎉"
        );


        return true;

    }


    if (
        playerCards.length === 0
    ) {

        alert(
            "Perdiste la batalla 😭"
        );


        return true;

    }


    return false;

}


/* =========================
   INICIAR BATALLA
========================= */

function iniciarBatalla() {

    crearEquipoEnemigo();


    mostrarMiniCartas();


    /*
        Seleccionamos la primera
        carta automáticamente.
    */

    seleccionarCarta(0);


    /*
        Mostramos una carta
        enemiga inicialmente.
    */

    mostrarCartaActivaEnemigo(
        enemyCards[0]
    );

}


/* =========================
   INICIAR
========================= */

iniciarBatalla();