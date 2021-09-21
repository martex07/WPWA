// Klick-Funktion für #hamburger hinzufügen

document.getElementById('hamburger').addEventListener('click', navStatus);

// Prüfen ob die Navigation geöffnet oder geschlossen ist

function navStatus() {

    if (document.body.classList.contains('hamburger-active')) {

        document.body.classList.remove('hamburger-active');
    }
    else {
        document.body.classList.add('hamburger-active');
    }
}
