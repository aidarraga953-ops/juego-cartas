export const mapas = [
    {
        id: "reino_dulce",
        nombre: "Reino Dulce",
        imagen: "../assets/cartas/princesa-chicle.webp",
        descripcion:
            "El corazón del Dulce Reino, gobernado con mano firme por la Princesa Chicle. Un lugar brillante, colorido y muy ordenado, donde la ciencia y el azúcar se mezclan.",
        cartas: [
            {
                nombre: "Princesa Chicle",
                tipo: "Dulce",
                imagen: "../assets/img/personaje dulce princesa.webp",
                descripcion: "La dulce dictadora",
                vida: 5,
                ataque: 4,
                habilidad: "Cura 2 de vida a otra carta Dulce por turno"
            },
            {
                nombre: "Mentita",
                tipo: "Dulce",
                imagen: "../assets/img/mentita.webp",
                descripcion: "El mayordomo con secretos",
                vida: 4,
                ataque: 5,
                habilidad: "+2 ataque el primer turno que entra en juego"
            },
            {
                nombre: "Dulce Tronquitos",
                tipo: "Elefante",
                imagen: "../assets/img/Dulce_Tronquitos.webp",
                descripcion:
                    "El anciano sabio y tranquilo",
                vida: 8,
                ataque: 2,
                habilidad:
                    "Bloquea: reduce a la mitad el daño del próximo ataque recibido"
            },
            {
                nombre: "Lemongrab",
                tipo: "Limón",
                imagen: "../assets/img/limon.webp",
                descripcion: "El gobernante gritón e injusto",
                vida: 6,
                ataque: 6,
                habilidad:
                    "Grita '¡UNACEPTABLE!': el rival pierde 1 carta de la mano"
            },
            {
                nombre: "NEPTR",
                tipo: "Robot",
                imagen: "../assets/img/NEPTR.webp",
                descripcion: "El horno con maldad programada",
                vida: 4,
                ataque: 6,
                habilidad:
                    "Puede autodestruirse: inflige 3 de daño al objetivo"
            }
        ]
    },

    {
        id: "reino_helado",
        nombre: "Reino Helado",
        imagen: "../assets/cartas/princesa-chicle.webp",
        descripcion:
            "Tierras heladas y solitarias en la cima de las montañas, dominadas por la magia caótica y la soledad del Rey Helado.",
        cartas: [
            {
                nombre: "Rey Helado",
                tipo: "Hielo",
                imagen: "../assets/img/rey.webp",
                descripcion: "El rey loco",
                vida: 8,
                ataque: 5,
                habilidad:
                    "Congela: reduce en 2 el ataque enemigo por 1 turno"
            },
            {
                nombre: "Simon Petrikov",
                tipo: "Hielo",
                imagen: "../assets/img/simon.webp",
                descripcion: "El hombre detrás del Rey Helado",
                vida: 7,
                ataque: 4,
                habilidad:
                    "Al morir, invoca al Rey Helado con la mitad de su vida"
            },
            {
                nombre: "Gunter",
                tipo: "Pingüino",
                imagen: "../assets/img/gunter.webp",
                descripcion: "El pingüino misterioso",
                vida: 3,
                ataque: 2,
                habilidad:
                    "Al morir, revela 1 carta random de la mano rival"
            },
            {
                nombre: "Multicolor (Lady Rainicornio)",
                tipo: "Arcoíris",
                imagen: "../assets/img/arcoiris.webp",
                descripcion: "La unicornio arcoíris, novia de Jake",
                vida: 5,
                ataque: 4,
                habilidad: "Se puede colocar en cualquier mapa"
            },
            {
                nombre: "Beemo",
                tipo: "Robot",
                imagen: "../assets/img/BMO.webp",
                descripcion:
                    "La consola viviente",
                vida: 4,
                ataque: 3,
                habilidad:
                    "Puede escanear la próxima carta del rival"
            },
        ]
    },

    {
        id: "nightosfera",
        nombre: "Nightosfera",
        imagen: "../assets/cartas/princesa-chicle.webp",
        descripcion:
            "El inframundo oscuro, hogar de demonios, vampiros y criaturas del caos, gobernado por Hunson Abadeer.",
        cartas: [
            {
                nombre: "Marceline",
                tipo: "Vampiro",
                imagen: "../assets/img/Marceline_bat.webp",
                descripcion: "La vampira roquera",
                vida: 6,
                ataque: 7,
                habilidad: "Roba 2 de vida al atacar"
            },
            {
                nombre: "Hunson Abadeer",
                tipo: "Tinieblas",
            imagen: "../assets/img/hudson.webp",
                descripcion:
                    "El señor de las tinieblas, padre de Marceline",
                vida: 9,
                ataque: 8,
                habilidad:
                    "Roba 1 punto de ataque a una carta enemiga permanentemente"
            },
            {
                nombre: "Flama (Princesa Llama)",
                tipo: "Fuego",
                imagen: "../assets/img/flama.webp",
                descripcion: "La princesa de fuego",
                vida: 5,
                ataque: 9,
                habilidad:
                    "+1 daño extra si el rival es tipo Hielo"
            },
            {
                nombre: "Prismo",
                tipo: "Cósmico",
                imagen: "../assets/img/prismo.webp",
                descripcion:
                    "El ser que concede deseos, atrapado fuera del tiempo",
                vida: 9,
                ataque: 6,
                habilidad:
                    "Concede un deseo: roba una carta extra (una vez por partida)"
            },
            {
                nombre: "Maga Cazadora",
                tipo: "Bosque",
                imagen: "../assets/img/maga.webp",
                descripcion:
                    "La guerrera oculta entre los árboles",
                vida: 6,
                ataque: 6,
                habilidad:
                    "Invisibilidad: no puede ser objetivo de ataques el turno que entra"
            }
        ]
    },

    {
        id: "tierras_salvajes",
        nombre: "Tierras Salvajes",
        imagen: "../assets/cartas/princesa-chicle.webp",
        descripcion:
            "Bosques, llanuras y cuevas fuera de cualquier reino, donde los aventureros y las criaturas mágicas conviven libremente.",
        cartas: [
            {
                nombre: "Fin",
                tipo: "Humano",
                imagen: "../assets/img/finnH.webp",
                descripcion: "Hermano",
                vida: 7,
                ataque: 6,
                habilidad:
                    "+1 ataque si ataca junto a Jake"
            },
            {
                nombre: "Jake",
                tipo: "Perro Mágico",
                imagen: "../assets/img/jakee.webp",
                descripcion: "Mejor amigo de Fin",
                vida: 6,
                ataque: 8,
                habilidad:
                    "Se estira: ataca a 2 objetivos por turno"
            },
            {
                nombre: "Fionna",
                tipo: "Humano",
                imagen: "../assets/img/Fionna.webp",
                descripcion:
                    "La aventurera de otro universo",
                vida: 7,
                ataque: 6,
                habilidad:
                    "+1 ataque si ataca junto a Cake"
            },
            {
                nombre: "Cake",
                tipo: "Gato Mágico",
                imagen: "../assets/img/Cake.webp",
                descripcion:
                    "La gata elástica, mejor amiga de Fionna",
                vida: 6,
                ataque: 7,
                habilidad:
                    "Cambia de tamaño: +3 vida por 1 turno"
            },
             {
                nombre: "Tronquitos",
                tipo: "Dulce",
                imagen: "../assets/img/Trunks.webp",
                descripcion: "El consejero sabio",
                vida: 6,
                ataque: 3,
                habilidad: "Otorga +1 vida a todas las cartas Dulces en juego"
            }
        ]
    },

    {
        id: "reino_cosmico",
        nombre: "Reino Cósmico",
        imagen: "../assets/cartas/princesa-chicle.webp",
        descripcion:
            "Un plano fuera del tiempo y el espacio, habitado por seres todopoderosos, héroes legendarios y magos errantes.",
        cartas: [
            {
                nombre: "Ceniza (Ash)",
                tipo: "Humano",
                imagen: "../assets/img/Ash.webp",
                descripcion: "El ex mago tramposo",
                vida: 4,
                ataque: 5,
                habilidad:
                    "Puede robar un objeto/carta descartada"
            },
            {
                nombre: "LSP",
                tipo: "Lumpy",
                imagen: "../assets/img/grumosa.webp",
                descripcion: "La dramática",
                vida: 5,
                ataque: 3,
                habilidad:
                    "Ignora el primer ataque que recibe cada partida"
            },
            {
                nombre: "Billy",
                tipo: "Héroe",
                imagen: "../assets/img/billy.webp",
                descripcion:
                    "El héroe legendario retirado",
                vida: 9,
                ataque: 9,
                habilidad:
                    "Al entrar, todas tus cartas ganan +1 ataque"
            },
            {
                nombre: "Búho Cósmico",
                tipo: "Cósmico",
                imagen: "../assets/img/buho.webp",
                descripcion: "El vigilante de los sueños",
                vida: 5,
                ataque: 3,
                habilidad:
                    "Al entrar, mira las 3 cartas superiores de tu mazo y elige una"
            },
            {
                nombre: "Betty Grof",
                tipo: "Humano/Bruja",
                imagen: "../assets/img/betty.webp",
                descripcion:
                    "La bruja del tiempo, antigua novia de Simon",
                vida: 6,
                ataque: 5,
                habilidad:
                    "Puede intercambiar de lugar con otra carta en juego"
            }
        ]
    }
];