import { mapas } from "../data/cartas.js";


const mapSelectionContainer =
    document.getElementById("map-selection-container");

const cardsContainer =
    document.getElementById("cards-container");

const selectionCounter =
    document.getElementById("selection-counter");

const mapMessage =
    document.getElementById("map-message");

const startBattleButton =
    document.getElementById("start-battle");


let selectedMap = null;

let selectedCards = [];


/* CREAR MAPA */

function crearMapa(mapa) {

    const mapElement = document.createElement("article");

    mapElement.classList.add("map");


    const title = document.createElement("h3");

    title.textContent = mapa.nombre;


    const description = document.createElement("p");

    description.textContent = mapa.descripcion;


    mapElement.appendChild(title);

    mapElement.appendChild(description);


    mapElement.addEventListener("click", () => {

        seleccionarMapa(mapa, mapElement);

    });


    return mapElement;
}


/* SELECCIONAR MAPA */

function seleccionarMapa(mapa, mapElement) {

    selectedMap = mapa;


    const maps =
        document.querySelectorAll(".map");

    maps.forEach((map) => {

        map.classList.remove("map--selected");

    });


    mapElement.classList.add("map--selected");


    mapMessage.textContent =
        `Mapa seleccionado: ${mapa.nombre}`;


    mostrarCartas();

}


/* CREAR CARTA */

function crearCarta(carta) {

    const card = document.createElement("article");

    card.classList.add("card");


    const title = document.createElement("h3");

    title.textContent = carta.nombre;


    const type = document.createElement("p");

    type.classList.add("card__type");

    type.textContent = `Tipo: ${carta.tipo}`;


    const description = document.createElement("p");

    description.classList.add("card__description");

    description.textContent = carta.descripcion;


    const stats = document.createElement("div");

    stats.classList.add("card__stats");


    const life = document.createElement("span");

    life.textContent = `❤️ ${carta.vida}`;


    const attack = document.createElement("span");

    attack.textContent = `⚔️ ${carta.ataque}`;


    stats.appendChild(life);

    stats.appendChild(attack);


    const ability = document.createElement("p");

    ability.classList.add("card__ability");

    ability.textContent =
        `Habilidad: ${carta.habilidad}`;


    card.appendChild(title);

    card.appendChild(type);

    card.appendChild(description);

    card.appendChild(stats);

    card.appendChild(ability);


    card.addEventListener("click", () => {

        seleccionarCarta(carta, card);

    });


    return card;
}


/* SELECCIONAR CARTA */

function seleccionarCarta(carta, cardElement) {

    const cardAlreadySelected =
        selectedCards.includes(carta);


    if (cardAlreadySelected) {

        selectedCards =
            selectedCards.filter(
                (selectedCard) =>
                    selectedCard !== carta
            );

        cardElement.classList.remove(
            "card--selected"
        );

    } else {

        if (selectedCards.length >= 5) {

            return;

        }


        selectedCards.push(carta);

        cardElement.classList.add(
            "card--selected"
        );

    }


    actualizarSeleccion();

}


/* ACTUALIZAR SELECCIÓN */

function actualizarSeleccion() {

    selectionCounter.textContent =
        `Cartas seleccionadas: ${selectedCards.length}/5`;


    startBattleButton.disabled =
        selectedCards.length !== 5;

}


/* MOSTRAR MAPAS */

function mostrarMapas() {

    mapas.forEach((mapa) => {

        const mapElement =
            crearMapa(mapa);

        mapSelectionContainer.appendChild(
            mapElement
        );

    });

}


/* MOSTRAR CARTAS */

function mostrarCartas() {

    cardsContainer.innerHTML = "";

    selectedCards = [];

    actualizarSeleccion();


    mapas.forEach((mapa) => {

        mapa.cartas.forEach((carta) => {

            const cardElement =
                crearCarta(carta);

            cardsContainer.appendChild(
                cardElement
            );

        });

    });

}


/* INICIAR */

mostrarMapas();

startBattleButton.addEventListener("click", () => {

    const gameData = {
        mapa: selectedMap,
        cartas: selectedCards
    };

    localStorage.setItem(
        "cardWarsGame",
        JSON.stringify(gameData)
    );
    
    window.location.href = "./batalla.html";
});