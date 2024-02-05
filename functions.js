document.addEventListener("DOMContentLoaded", function () {
    const diceElement = document.getElementById("dice");

    // Lisää click-kuuntelija nopan elementille
    diceElement.addEventListener("click", function () {
        // Arvo satunnaisluku väliltä 1-6
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        // Aseta uusi kuva nopalle arvotun satunnaisluvun perusteella
        diceElement.innerHTML = `<img src="./img/inverted-dice-${randomNumber}.png" />`;
    });
});

