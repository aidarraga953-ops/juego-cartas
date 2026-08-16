const battleData =
    localStorage.getItem("cardWarsGame");


if (!battleData) {

    window.location.href = "./seleccion.html";

}


const gameData =
    JSON.parse(battleData);


const battleMap =
    document.getElementById("battle-map");

const playerCardsContainer =
    document.getElementById("player-cards");

const enemyCardsContainer =
    document.getElementById("enemy-cards");

const attackButton =
    document.getElementById("attack-button");


/* =========================
   VARIABLES DEL JUEGO
========================= */

let playerCards =
    gameData.cartas.map((carta) => ({
        ...carta,
        vida: carta.vida,
        vidaMaxima: carta.vida
    }));


let enemyCards = [];


let selectedPlayerCard = null;


let turno = "jugador";


/* =========================
   MOSTRAR MAPA
========================= */

battleMap.textContent =
    `Mapa: ${gameData.mapa.nombre}`;


/* =========================
   CREAR CARTA
========================= */

function crearCarta(carta, tipo, index) {

    const card =
        document.createElement("article");


    card.classList.add("battle-card");


    const title =
        document.createElement("h3");

    title.textContent =
        carta.nombre;


    const type =
        document.createElement("p");

    type.textContent =
        `Tipo: ${carta.tipo}`;


    const healthText =
    document.createElement("p");

    healthText.classList.add("health__text");

    healthText.textContent =
        `❤️ ${carta.vida} / ${carta.vidaMaxima}`;


    const health =
        document.createElement("div");

    health.classList.add("health");


    const healthBar =
        document.createElement("div");

    healthBar.classList.add("health__bar");


    const porcentajeVida =
        (carta.vida / carta.vidaMaxima) * 100;


    healthBar.style.width =
        `${porcentajeVida}%`;


    health.appendChild(healthBar);


    const stats =
        document.createElement("p");

    stats.textContent =
        `⚔️ ${carta.ataque}`;


    card.appendChild(title);

    card.appendChild(type);
    card.appendChild(health);
    card.appendChild(healthText);

    card.appendChild(stats);


    /*
        SOLO las cartas del jugador
        se pueden seleccionar.
    */

    if (tipo === "player") {

        card.addEventListener(
            "click",
            () => {

                seleccionarCarta(
                    index,
                    card
                );

            }
        );

    }


    return card;
}


/* =========================
   SELECCIONAR CARTA DEL JUGADOR
========================= */

function seleccionarCarta(
    index,
    cardElement
) {

    /*
        Solo se puede seleccionar
        durante el turno del jugador.
    */

    if (turno !== "jugador") {

        return;

    }


    const cards =
        document.querySelectorAll(
            "#player-cards .battle-card"
        );


    cards.forEach((card) => {

        card.classList.remove(
            "battle-card--selected"
        );

    });


    cardElement.classList.add(
        "battle-card--selected"
    );


    selectedPlayerCard =
        index;


    console.log(
        `Seleccionaste: ${playerCards[index].nombre}`
    );

}


/* =========================
   MOSTRAR CARTAS DEL JUGADOR
========================= */

function mostrarCartasJugador() {

    playerCardsContainer.innerHTML = "";


    playerCards.forEach(
        (carta, index) => {

            const cardElement =
                crearCarta(
                    carta,
                    "player",
                    index
                );


            playerCardsContainer.appendChild(
                cardElement
            );

        }
    );

}


/* =========================
   MOSTRAR CARTAS DEL ENEMIGO
========================= */

function mostrarCartasEnemigo() {

    enemyCardsContainer.innerHTML = "";


    enemyCards.forEach(
        (carta, index) => {

            const cardElement =
                crearCarta(
                    carta,
                    "enemy",
                    index
                );


            enemyCardsContainer.appendChild(
                cardElement
            );

        }
    );

}


/* =========================
   OBTENER CARTAS
========================= */

function obtenerTodasLasCartas() {

    return gameData.cartas;

}


/* =========================
   CREAR EQUIPO ENEMIGO
========================= */

function crearEquipoEnemigo() {

    const todasLasCartas =
        obtenerTodasLasCartas();


    while (enemyCards.length < 5) {

        const randomIndex =
            Math.floor(
                Math.random() *
                todasLasCartas.length
            );


        const randomCard =
            todasLasCartas[randomIndex];


        /*
            Creamos una COPIA de la carta.

            Así la vida del enemigo
            no modifica la carta del jugador.
        */

        const enemyCard = {
            ...randomCard,
            vida: randomCard.vida,
            vidaMaxima: randomCard.vida
        };

        const alreadyExists =
            enemyCards.some(
                (carta) =>
                    carta.nombre === enemyCard.nombre
            );


        if (!alreadyExists) {

            enemyCards.push(
                enemyCard
            );

        }

    }

}


/* =========================
   ATAQUE DEL JUGADOR
========================= */

function atacar() {

    /*
        No puede atacar si no es
        su turno.
    */

    if (turno !== "jugador") {

        return;

    }


    /*
        Tiene que seleccionar
        una carta propia.
    */

    if (selectedPlayerCard === null) {

        alert(
            "Selecciona una carta para atacar."
        );

        return;

    }


    const playerCard =
        playerCards[selectedPlayerCard];


    /*
        EL SISTEMA ELIGE
        AL ENEMIGO.
    */

    const randomEnemyIndex =
        Math.floor(
            Math.random() *
            enemyCards.length
        );


    const enemyCard =
        enemyCards[randomEnemyIndex];


    /*
        Aplicamos daño.
    */

    enemyCard.vida -=
        playerCard.ataque;


    console.log(
        `${playerCard.nombre} atacó a ${enemyCard.nombre}`
    );


    console.log(
        `Vida de ${enemyCard.nombre}: ${enemyCard.vida}`
    );


    /*
        Si la carta muere,
        desaparece.
    */

    if (enemyCard.vida <= 0) {

        console.log(
            `${enemyCard.nombre} fue derrotado`
        );


        enemyCards.splice(
            randomEnemyIndex,
            1
        );

    }


    /*
        Quitamos la selección.
    */

    selectedPlayerCard = null;


    mostrarCartasEnemigo();


    /*
        Comprobamos si ganó.
    */

    if (verificarGanador()) {

        return;

    }


    /*
        Ahora le toca
        al enemigo.
    */

    turno = "enemigo";


    attackButton.disabled = true;


    setTimeout(
        turnoEnemigo,
        1000
    );

}


/* =========================
   TURNO DEL ENEMIGO
========================= */

function turnoEnemigo() {

    /*
        El enemigo elige
        una carta aleatoria.
    */

    const randomEnemyIndex =
        Math.floor(
            Math.random() *
            enemyCards.length
        );


    const enemyCard =
        enemyCards[randomEnemyIndex];


    /*
        El enemigo elige
        una de nuestras cartas.
    */

    const randomPlayerIndex =
        Math.floor(
            Math.random() *
            playerCards.length
        );


    const playerCard =
        playerCards[randomPlayerIndex];


    /*
        El enemigo ataca.
    */

    playerCard.vida -=
        enemyCard.ataque;


    console.log(
        `${enemyCard.nombre} atacó a ${playerCard.nombre}`
    );


    console.log(
        `Vida de ${playerCard.nombre}: ${playerCard.vida}`
    );


    /*
        Si nuestra carta
        llega a 0, desaparece.
    */

    if (playerCard.vida <= 0) {

        console.log(
            `${playerCard.nombre} fue derrotado`
        );


        playerCards.splice(
            randomPlayerIndex,
            1
        );

    }


    mostrarCartasJugador();


    /*
        Comprobamos si perdimos.
    */

    if (verificarGanador()) {

        return;

    }


    /*
        Regresa el turno
        al jugador.
    */

    turno = "jugador";


    attackButton.disabled = false;

}


/* =========================
   COMPROBAR GANADOR
========================= */

function verificarGanador() {

    if (enemyCards.length === 0) {

        alert(
            "¡Ganaste la batalla! 🎉"
        );


        attackButton.disabled = true;


        return true;

    }


    if (playerCards.length === 0) {

        alert(
            "Perdiste la batalla 😭"
        );


        attackButton.disabled = true;


        return true;

    }


    return false;

}


/* =========================
   INICIAR BATALLA
========================= */

function iniciarBatalla() {

    crearEquipoEnemigo();


    mostrarCartasJugador();


    mostrarCartasEnemigo();


    attackButton.disabled = false;

}


/* =========================
   BOTÓN ATACAR
========================= */

attackButton.addEventListener(
    "click",
    atacar
);


/* =========================
   INICIAR
========================= */

iniciarBatalla();