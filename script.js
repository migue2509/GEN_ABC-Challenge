
// Contador de letras descubiertas
let letrasDescubiertas = 0;

// Función para girar las tarjetas
 function voltear(card) {

    card.classList.toggle("volteada");

    if (card.classList.contains("volteada")) {

        letrasDescubiertas++;

    } else {

        letrasDescubiertas--;

    }

    document.getElementById("contador").textContent = letrasDescubiertas;

}

// Función para filtrar tarjetas
function filtrar(tipo) {

    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach(function (tarjeta) {

        if (tipo === "todas") {

            tarjeta.style.display = "block";

        } else if (tipo === "vocales") {

            if (tarjeta.dataset.tipo === "vocal") {

                tarjeta.style.display = "block";

            } else {

                tarjeta.style.display = "none";

            }

        }

    });

}