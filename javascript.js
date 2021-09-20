// Klick-Funktion für #hamburger hinzufügen

document.getElementById('hamburger').addEventListener('click', navStatus);

// Prüfen ob die Navigation geöffnet oder geschlossen ist

function navStatus() {
    if (document.body.classList.contains('hamburger-active')) {
        navClose();
    }
    else {
        navOpen();
    }
}

// Wenn die Navi geschlossen wird, Klasse für »offen« entfernen

function navClose() {
    document.body.classList.remove('hamburger-active');
}

// Wenn die Navi geöffnet wird, Klasse für »geschlossen« entfernen

function navOpen() {
    document.body.classList.add('hamburger-active');
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}