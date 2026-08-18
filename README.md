# 🃏 Card Wars

> Un juego de cartas web inspirado en el universo de **Adventure Time**, donde el jugador podrá formar su equipo, elegir un territorio de Ooo y enfrentarse en batallas por turnos.

---

## 🎮 Descripción

**Card Wars** es un proyecto web desarrollado como un juego de cartas inspirado en los personajes y territorios de la Tierra de Ooo.

El jugador comienza en una pantalla de inicio donde debe introducir su nombre y seleccionar un avatar. Después podrá acceder al inicio del juego, conocer las reglas, explorar los diferentes territorios, seleccionar sus cartas y finalmente entrar en batalla.

El proyecto busca combinar la funcionalidad de un juego web con una experiencia visual inspirada en **Adventure Time**, utilizando imágenes, colores y elementos propios de cada territorio.

---

## 🗺️ Flujo del juego

```text
                    🃏 CARD WARS
                         │
                         ▼
                    🔐 LOGIN
                  index.html
                         │
                      Jugar
                         ▼
                     🏠 INICIO
                  inicio.html
                         │
                         ▼
                  🗺️ SELECCIÓN
                seleccion.html
                         │
                         ▼
                    ⚔️ BATALLA
                  batalla.html
                         │
                         ▼
                   🏆 RESULTADO
                 resultado.html
```

---

# 🔐 Login

El archivo `index.html` funciona como **punto de entrada del proyecto** y contiene la pantalla de login.

El jugador debe:

* 👤 Introducir su nombre.
* 🖼️ Seleccionar un avatar.
* 🎮 Presionar **Jugar**.

El sistema valida que el jugador haya introducido un nombre y seleccionado un avatar antes de continuar.

La información del jugador se almacena utilizando `localStorage`.

```javascript
const jugador = {
    nombre: nombre,
    avatar: avatarSeleccionado
};

localStorage.setItem(
    "cardWarsJugador",
    JSON.stringify(jugador)
);
```

La información almacenada contiene:

```text
nombre
avatar
```

Después de completar el login, el jugador es enviado a:

```text
pages/inicio.html
```

---

# 🏠 Inicio

La página `inicio.html` funciona como el punto central de la experiencia del jugador.

Actualmente contiene:

* 👤 Información del jugador.
* 🖼️ Avatar seleccionado.
* 🃏 Presentación de Card Wars.
* 📖 Explicación de cómo jugar.
* 🗺️ Sección **"Elige tu destino"**.
* 🌍 Los cinco territorios principales de Ooo.

El nombre y avatar seleccionados durante el login pueden utilizarse posteriormente dentro de esta página.

---

# 🗺️ Elige tu destino

Una de las secciones principales del inicio es:

> **LA TIERRA DE OOO — Elige tu destino**

En esta sección se presentan los cinco territorios disponibles mediante cartas visuales organizadas en forma de abanico.

Cada carta contiene:

* 🔢 Número del territorio.
* 🖼️ Imagen representativa.
* 🗺️ Nombre.
* ✨ Descripción.
* 🖱️ Efecto visual al pasar el cursor.

La estructura actual es:

| #  | Territorio          | Descripción        |
| -- | ------------------- | ------------------ |
| 01 | 🍬 Reino Dulce      | azúcar y orden     |
| 02 | ❄️ Reino Helado     | cumbres solitarias |
| 03 | 🌑 Nocheosfera      | sombras profundas  |
| 04 | 🌳 Tierras Salvajes | naturaleza salvaje |
| 05 | 🌌 Reino Cósmico    | más allá de Ooo    |

Las cartas utilizan diferentes colores para representar visualmente la identidad de cada territorio.

---

# 🌎 Territorios

Los cinco territorios principales del proyecto son:

## 🍬 Reino Dulce

Territorio caracterizado por sus colores rosados y su ambiente dulce.

Imagen utilizada:

```text
assets/src/dulce reino.webp
```

---

## ❄️ Reino Helado

Territorio de clima frío y paisajes helados.

Imagen utilizada:

```text
assets/src/reino helado.webp
```

---

## 🌑 Nocheosfera

Territorio relacionado con ambientes oscuros y sobrenaturales.

Imagen utilizada:

```text
assets/src/nocheosfera.webp
```

---

## 🌳 Tierras Salvajes

Territorio representado mediante el paisaje de la Casa del Árbol y la naturaleza de Ooo.

Imagen utilizada:

```text
assets/src/casa del arbol.webp
```

---

## 🌌 Reino Cósmico

Territorio relacionado con el espacio y los elementos cósmicos del universo de Ooo.

Imagen utilizada:

```text
assets/src/reino cosmico.webp
```

---

# 🎨 Diseño visual

El proyecto busca una estética inspirada en **Adventure Time**, pero adaptada a una interfaz de videojuego.

La idea principal es evitar una interfaz excesivamente moderna o cargada.

Se utilizan:

* 🎨 Colores propios de cada territorio.
* 🗺️ Imágenes como fondos.
* 🃏 Cartas visuales.
* 📜 Elementos inspirados en mapas y pergaminos.
* ✨ Animaciones y efectos hover.
* 🌈 Diferentes paletas para cada reino.
* 🖼️ Fondos visuales que mantienen la identidad de cada escenario.

### Fondos de los territorios

Cada sección utiliza su propia imagen como fondo.

La intención es **conservar los colores originales de las imágenes** en lugar de cubrirlas completamente con filtros.

Cuando sea necesario, se utilizan capas de color o efectos sutiles para mejorar la lectura del contenido.

---

# 👤 Avatares

El login actualmente permite seleccionar diferentes personajes como avatar.

Los avatares disponibles son:

* 🧑 Finn
* 🐶 Jake
* 🧛 Marceline
* 🍬 Princesa Chicle
* ❄️ Rey Helado
* 🔥 Flama
* 🌱 Mentita

Cada avatar tiene una imagen propia dentro de:

```text
assets/src/
```

El avatar seleccionado se guarda junto con el nombre del jugador en `localStorage`.

---

# 💾 LocalStorage

Para mantener los datos básicos del jugador entre las páginas se utiliza `localStorage`.

La información se guarda utilizando la clave:

```text
cardWarsJugador
```

El objeto almacenado tiene la siguiente estructura:

```javascript
{
    nombre: "Nombre del jugador",
    avatar: "avatar-seleccionado"
}
```

Esto permite recuperar los datos del jugador posteriormente sin tener que volver a introducirlos.

---

# ⚔️ Sistema de batalla

El juego está diseñado para utilizar un sistema de combate por turnos.

La idea general del sistema es:

1. 👤 El jugador selecciona sus cartas.
2. 🃏 Forma un equipo de cinco cartas.
3. 🗺️ Selecciona un territorio.
4. ⚔️ Comienza la batalla.
5. 🃏 El jugador utiliza una carta para atacar.
6. ✨ Las cartas pueden utilizar sus habilidades.
7. 🤖 El enemigo realiza acciones de forma aleatoria.
8. ❤️ Las cartas cuentan con puntos de vida.
9. 🏆 La batalla termina cuando uno de los equipos es derrotado.

---

# 📁 Estructura del proyecto

La estructura actual del proyecto está organizada de la siguiente manera:

```text
Card-Wars/
│
├── index.html
│
├── assets/
│   └── src/
│       ├── dulce reino.webp
│       ├── reino helado.webp
│       ├── nocheosfera.webp
│       ├── casa del arbol.webp
│       ├── reino cosmico.webp
│       │
│       ├── finn.webp
│       ├── jake.webp
│       ├── marceline.webp
│       ├── dulce.webp
│       ├── rey helado.webp
│       ├── princesa flama.webp
│       ├── mentita.webp
│       │
│       └── dulce reino.mp4
│
├── css/
│   ├── style.css
│   ├── login.css
│   ├── inicio.css
│   ├── seleccion.css
│   └── batalla.css
│
├── js/
│   ├── login.js
│   ├── inicio.js
│   ├── seleccion.js
│   └── batalla.js
│
├── pages/
│   ├── inicio.html
│   ├── seleccion.html
│   ├── batalla.html
│   └── resultado.html
│
└── README.md
```

### 📌 Punto de entrada

El punto de entrada del proyecto es:

```text
index.html
```

Este archivo contiene el login y desde allí comienza el flujo del juego.

---

# 🧩 Tecnologías utilizadas

El proyecto está desarrollado utilizando tecnologías web:

* 🌐 **HTML5** — estructura de las páginas.
* 🎨 **CSS3** — diseño, animaciones y estilos.
* ⚡ **JavaScript** — lógica e interacción.
* 💾 **LocalStorage** — almacenamiento de los datos básicos del jugador.
* 🔀 **Git** — control de versiones.
* 🐙 **GitHub** — almacenamiento y colaboración del proyecto.

---

# 🔀 Git Flow

El proyecto utiliza una metodología basada en **Git Flow** para organizar el desarrollo.

La rama principal es:

```text
main
```

El desarrollo se realiza principalmente en:

```text
develop
```

Las nuevas funcionalidades se desarrollan mediante ramas `feature`.

Ejemplo:

```text
main
 │
 └── develop
       │
       ├── feature/inicio
       │
       ├── feature/seleccion
       │
       └── feature/batalla
```

---

# 🌱 Flujo de trabajo con Git

Para comenzar una nueva funcionalidad:

```bash
git checkout develop
```

Crear una nueva rama:

```bash
git checkout -b feature/nombre-feature
```

Después de realizar los cambios:

```bash
git add .
```

Crear el commit:

```bash
git commit -m "✨ feat: descripción del cambio"
```

Finalmente, la feature se integra a `develop` mediante un merge.

```bash
git checkout develop

git merge feature/nombre-feature
```

---

# 📝 Gitmojis

Los commits del proyecto utilizan **Gitmoji** para identificar rápidamente el tipo de cambio realizado.

| Gitmoji | Significado | Uso                           |
| ------- | ----------- | ----------------------------- |
| ✨       | Feature     | Nueva funcionalidad           |
| 🎨      | Style       | Cambios visuales              |
| 🐛      | Fix         | Corrección de errores         |
| 🔧      | Chore       | Configuración o mantenimiento |
| ♻️      | Refactor    | Refactorización               |
| 📝      | Docs        | Documentación                 |
| 🔀      | Merge       | Integración de ramas          |
| 📦      | Package     | Dependencias o paquetes       |
| 🧹      | Cleanup     | Limpieza del código           |
| 🚀      | Deploy      | Despliegue                    |

### Ejemplos de commits

```bash
git commit -m "✨ feat: agregar sistema de login"
```

```bash
git commit -m "🎨 style: mejorar diseño visual del inicio"
```

```bash
git commit -m "✨ feat: agregar selección de territorios"
```

```bash
git commit -m "🐛 fix: corregir redirección del login"
```

```bash
git commit -m "🎨 style: agregar cartas de los territorios"
```

```bash
git commit -m "🔀 merge: integrar feature/inicio en develop"
```

---

# 🚧 Estado del proyecto

## ✅ Completado

* [x] Estructura inicial del proyecto.
* [x] `index.html` como punto de entrada.
* [x] Sistema de login.
* [x] Selección de avatar.
* [x] Registro del nombre del jugador.
* [x] Almacenamiento mediante `localStorage`.
* [x] Redirección desde el login hacia Inicio.
* [x] Visualización del nombre del jugador.
* [x] Visualización del avatar.
* [x] Video de fondo en el login.
* [x] Diseño visual de la pantalla de login.
* [x] Página de Inicio.
* [x] Sección de bienvenida.
* [x] Sección "¿Cómo se juega?".
* [x] Sección "Elige tu destino".
* [x] Cinco territorios definidos.
* [x] Cartas visuales de los territorios.
* [x] Efectos hover de las cartas.
* [x] Fondos individuales para los territorios.
* [x] Organización mediante Git Flow.
* [x] Rama `feature/inicio`.

## 🔨 En desarrollo

* [ ] Conectar las cartas de destino con los territorios.
* [ ] Completar visualmente las cinco secciones de mapas.
* [ ] Completar la sección "¿Cómo se juega?".
* [ ] Página de selección de cartas.
* [ ] Selección de cinco cartas.
* [ ] Selección del mapa.
* [ ] Sistema de batalla.
* [ ] Sistema de turnos.
* [ ] Sistema de vida.
* [ ] Habilidades especiales.
* [ ] Sistema de ataque.
* [ ] Sistema de enemigo aleatorio.
* [ ] Pantalla de resultado.

---

# 🎯 Objetivo final

El objetivo de **Card Wars** es crear una experiencia web que combine:

```text
        🎨 DISEÑO
           +
        🃏 CARTAS
           +
       🗺️ EXPLORACIÓN
           +
       ⚔️ BATALLAS
           +
        ✨ HABILIDADES
           +
       🌈 TIERRA DE OOO
```

La intención es que el proyecto no sea únicamente funcional, sino que transmita la sensación de estar explorando y jugando dentro del universo de Ooo.

---

## 🃏 Card Wars

**Explora Ooo. Elige tus cartas. Prepárate para la batalla.** ⚔️

