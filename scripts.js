// Función para actualizar el reloj en la página web
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;

    setTimeout(updateClock, 1000);
}

// Función auxiliar para agregar un cero antes de los números menores a 10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Llamar a la función para actualizar el reloj
updateClock();


// Variables para el temporizador
var timer;
var secondsLeft;

// Función para iniciar el temporizador
function startTimer() {
    var inputSeconds = parseInt(prompt("Ingrese la cantidad de segundos para el temporizador:", "60"));
    if (isNaN(inputSeconds) || inputSeconds < 1) {
        alert("Ingrese un número entero positivo mayor que cero.");
        return;
    }
    secondsLeft = inputSeconds;
    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

// Función para detener el temporizador
function stopTimer() {
    clearInterval(timer);
}

// Función para restablecer el temporizador
function resetTimer() {
    secondsLeft = 0;
    updateTimer();
    clearInterval(timer);
}

// Función para actualizar el temporizador en la página web
function updateTimer() {
    document.getElementById("timer").innerHTML = secondsLeft + " segundos";
    secondsLeft--;

    if (secondsLeft < 0) {
        clearInterval(timer);
        alert("¡Tiempo terminado!");

        // Reproducir efecto de sonido
        var audio = new Audio("/elements/Palo de metal callendose sonido.mp3");
        audio.play();
    }
}

// Función para seleccionar un nombre aleatorio de la lista de nombres ingresados
function pickRandomName() {
    var names = document.getElementById("names").value.split(",");
    if (names.length < 2) {
        alert("Ingrese al menos dos nombres separados por comas.");
        return;
    }
    var randomIndex = Math.floor(Math.random() * names.length);
    var randomName = names[randomIndex].trim();
    document.getElementById("result").innerHTML = randomName;
}

// Función para activar/desactivar el modo oscuro
function toggleDarkMode() {
    var body = document.querySelector("body");
    var darkModeButton = document.getElementById("dark-mode-button"); 
    body.classList.toggle("dark-mode");
    darkModeButton.src = body.classList.contains("dark-mode") ? "elements/modo-oscuro.png" : "elements/modo claro.png";
}

  