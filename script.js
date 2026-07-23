

let letrasDescubiertas = 0;

function voltear(card) {

    if (!card.classList.contains("volteada")) {

        card.classList.add("volteada");

        letrasDescubiertas++;

        document.getElementById("contador").textContent = letrasDescubiertas;
    }

}