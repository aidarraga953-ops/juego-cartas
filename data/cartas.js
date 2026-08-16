export const mapas = [
    {
        id: "reino_dulce",
        nombre: "Reino Dulce",
        descripcion:
            "El corazón del Dulce Reino, gobernado con mano firme por la Princesa Chicle. Un lugar brillante, colorido y muy ordenado, donde la ciencia y el azúcar se mezclan.",
        cartas: [
            {
                nombre: "Princesa Chicle",
                tipo: "Dulce",
                descripcion: "La dulce dictadora",
                vida: 5,
                ataque: 4,
                habilidad: "Cura 2 de vida a otra carta Dulce por turno"
            },
            {
                nombre: "Mentita",
                tipo: "Dulce",
                descripcion: "El mayordomo con secretos",
                vida: 4,
                ataque: 5,
                habilidad: "+2 ataque el primer turno que entra en juego"
            },
            {
                nombre: "Árbol de las Manzanas",
                tipo: "Dulce",
                descripcion: "El consejero sabio",
                vida: 6,
                ataque: 3,
                habilidad: "Otorga +1 vida a todas las cartas Dulces en juego"
            },
            {
                nombre: "Lemongrab",
                tipo: "Limón",
                descripcion: "El gobernante gritón e injusto",
                vida: 6,
                ataque: 6,
                habilidad:
                    "Grita '¡UNACEPTABLE!': el rival pierde 1 carta de la mano"
            },
            {
                nombre: "NEPTR",
                tipo: "Robot",
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
        descripcion:
            "Tierras heladas y solitarias en la cima de las montañas, dominadas por la magia caótica y la soledad del Rey Helado.",
        cartas: [
            {
                nombre: "Rey Helado",
                tipo: "Hielo",
                descripcion: "El rey loco",
                vida: 8,
                ataque: 5,
                habilidad:
                    "Congela: reduce en 2 el ataque enemigo por 1 turno"
            },
            {
                nombre: "Simon Petrikov",
                tipo: "Hielo",
                descripcion: "El hombre detrás del Rey Helado",
                vida: 7,
                ataque: 4,
                habilidad:
                    "Al morir, invoca al Rey Helado con la mitad de su vida"
            },
            {
                nombre: "Gunter",
                tipo: "Pingüino",
                descripcion: "El pingüino misterioso",
                vida: 3,
                ataque: 2,
                habilidad:
                    "Al morir, revela 1 carta random de la mano rival"
            },
            {
                nombre: "Multicolor (Lady Rainicornio)",
                tipo: "Arcoíris",
                descripcion: "La unicornio arcoíris, novia de Jake",
                vida: 5,
                ataque: 4,
                habilidad: "Se puede colocar en cualquier mapa"
            },
            {
                nombre: "Búho Cósmico",
                tipo: "Cósmico",
                descripcion: "El vigilante de los sueños",
                vida: 5,
                ataque: 3,
                habilidad:
                    "Al entrar, mira las 3 cartas superiores de tu mazo y elige una"
            }
        ]
    },

    {
        id: "nightosfera",
        nombre: "Nightosfera",
        descripcion:
            "El inframundo oscuro, hogar de demonios, vampiros y criaturas del caos, gobernado por Hunson Abadeer.",
        cartas: [
            {
                nombre: "Marceline",
                tipo: "Vampiro",
                descripcion: "La vampira roquera",
                vida: 6,
                ataque: 7,
                habilidad: "Roba 2 de vida al atacar"
            },
            {
                nombre: "Hunson Abadeer",
                tipo: "Tinieblas",
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
                descripcion: "La princesa de fuego",
                vida: 5,
                ataque: 9,
                habilidad:
                    "+1 daño extra si el rival es tipo Hielo"
            },
            {
                nombre: "Prismo",
                tipo: "Cósmico",
                descripcion:
                    "El ser que concede deseos, atrapado fuera del tiempo",
                vida: 9,
                ataque: 6,
                habilidad:
                    "Concede un deseo: roba una carta extra (una vez por partida)"
            },
            {
                nombre: "Bruja Cazadora",
                tipo: "Bosque",
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
        descripcion:
            "Bosques, llanuras y cuevas fuera de cualquier reino, donde los aventureros y las criaturas mágicas conviven libremente.",
        cartas: [
            {
                nombre: "Fin",
                tipo: "Humano",
                descripcion: "Hermano",
                vida: 7,
                ataque: 6,
                habilidad:
                    "+1 ataque si ataca junto a Jake"
            },
            {
                nombre: "Jake",
                tipo: "Perro Mágico",
                descripcion: "Mejor amigo de Fin",
                vida: 6,
                ataque: 8,
                habilidad:
                    "Se estira: ataca a 2 objetivos por turno"
            },
            {
                nombre: "Fionna",
                tipo: "Humano",
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
                descripcion:
                    "La gata elástica, mejor amiga de Fionna",
                vida: 6,
                ataque: 7,
                habilidad:
                    "Cambia de tamaño: +3 vida por 1 turno"
            },
            {
                nombre: "Tronco Gordo",
                tipo: "Elefante",
                descripcion:
                    "El anciano sabio y tranquilo",
                vida: 8,
                ataque: 2,
                habilidad:
                    "Bloquea: reduce a la mitad el daño del próximo ataque recibido"
            }
        ]
    },

    {
        id: "reino_cosmico",
        nombre: "Reino Cósmico",
        descripcion:
            "Un plano fuera del tiempo y el espacio, habitado por seres todopoderosos, héroes legendarios y magos errantes.",
        cartas: [
            {
                nombre: "Ceniza (Ash)",
                tipo: "Humano",
                descripcion: "El ex mago tramposo",
                vida: 4,
                ataque: 5,
                habilidad:
                    "Puede robar un objeto/carta descartada"
            },
            {
                nombre: "LSP",
                tipo: "Lumpy",
                descripcion: "La dramática",
                vida: 5,
                ataque: 3,
                habilidad:
                    "Ignora el primer ataque que recibe cada partida"
            },
            {
                nombre: "Billy",
                tipo: "Héroe",
                descripcion:
                    "El héroe legendario retirado",
                vida: 9,
                ataque: 9,
                habilidad:
                    "Al entrar, todas tus cartas ganan +1 ataque"
            },
            {
                nombre: "Beemo",
                tipo: "Robot",
                descripcion:
                    "La consola viviente",
                vida: 4,
                ataque: 3,
                habilidad:
                    "Puede escanear la próxima carta del rival"
            },
            {
                nombre: "Betty Grof",
                tipo: "Humano/Bruja",
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