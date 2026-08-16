const formulario = document.getElementById("login-form");

const nombreInput = document.getElementById("nombre");

const avatares = document.querySelectorAll(".avatar");

let avatarSeleccionado = null;


avatares.forEach((avatar) => {

    avatar.addEventListener("click", () => {

        avatares.forEach((item) => {
            item.classList.remove("avatar--selected");
        });

        avatar.classList.add("avatar--selected");

        avatarSeleccionado = avatar.dataset.avatar;

        console.log("Avatar seleccionado:", avatarSeleccionado);

    });

});


formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const nombre = nombreInput.value.trim();

    if (!avatarSeleccionado) {
        alert("Selecciona un avatar");
        return;
    }

    console.log("Jugador:", nombre);
    console.log("Avatar:", avatarSeleccionado);

});