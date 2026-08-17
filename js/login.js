const loginForm = document.getElementById("login-form");

const nombreInput = document.getElementById("nombre");

const avatarButtons =
    document.querySelectorAll(".avatar");

let avatarSeleccionado = null;


/* =========================================
   SELECCIONAR AVATAR
========================================= */

avatarButtons.forEach((avatar) => {

    avatar.addEventListener("click", () => {

        // Quitar selección anterior
        avatarButtons.forEach((item) => {

            item.classList.remove("selected");

        });


        // Seleccionar nuevo avatar
        avatar.classList.add("selected");


        // Guardar el avatar seleccionado
        avatarSeleccionado =
            avatar.dataset.avatar;

    });

});


/* =========================================
   LOGIN
========================================= */

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const nombre =
        nombreInput.value.trim();


    if (nombre === "") {

        alert("Escribe tu nombre.");

        return;

    }


    if (!avatarSeleccionado) {

        alert("Selecciona un avatar.");

        return;

    }


    /* =====================================
       GUARDAR INFORMACIÓN DEL JUGADOR
    ===================================== */

    const jugador = {

        nombre: nombre,

        avatar: avatarSeleccionado

    };


    localStorage.setItem(
        "cardWarsJugador",
        JSON.stringify(jugador)
    );


    /* =====================================
       IR AL INICIO
    ===================================== */

    window.location.href =
        "./pages/inicio.html";

});