
function juegoAdivinar() {

    let numAl = Math.floor(Math.random() * 10) + 1;
    let numUs = 0;
    let intentos = 0;

    alert("🔥 ¡Bienvenido al Nitro Guess! Adivina el número del 1 al 100 🏎️");

    while (numUs !== numAl) {
        intentos++;
        numUs = parseInt(prompt(`Intento ${intentos}\nIngresa un número del 1 al 10:`));

        if (isNaN(numUs) || numUs < 1 || numUs > 10) {
            alert("❌ Número inválido. ¡Del 1 al 10, crack!");
        } else if (numUs < numAl) {
            alert("📈 ¡Muy bajo! Sube el nitro 💨");
        } else if (numUs > numAl) {
            alert("📉 ¡Demasiado alto! Baja marchas ⚙️");
        }
    }

    alert(`🎉 ¡ACERTASTE en ${intentos} intentos!\nEl rey del drift eres tú 🏆\nEl número era: ${numAl}`);
}

//Esto es para lo que escriba aparezca en la pagina wed
function datosUsuario() {
    const nombre = prompt("Nombre de Usuario:");
    const comentario = prompt("¿Qué opinas de esta web?");

    document.getElementById("usuario").textContent = nombre || "Anónimo";
    document.getElementById("subtitulo").textContent = comentario || "Sin comentario todavía";
}

//Esto es para que me diga los coches que le gustan
function datosCoches() {
    let listaCoches = [];
    let coches;

    while (true) {
        coches = prompt("Escribe los coches que mas te gusten (o salir para terminar):");

        if (coches === null || coches.trim().toLowerCase() == "salir") {
            alert("¡Vale! Terminamos de poner los coches que te gustan.");
            break;
        }

        if (coches.trim() !== "") {
            listaCoches.push(coches.trim());
        }
    }

    let texto = "Los coches que te gustan son: ";

    if (listaCoches.length === 0) {
        texto += "ninguno.. ¿solo te gustan los electricos o que?";
    } else {
        for (let i = 0; i < listaCoches.length; i++) {
            if (i === 0) {
                texto += listaCoches[i];
            } else if (i === listaCoches.length - 1) {
                texto += " y " + listaCoches[i];
            } else {
                texto += ", " + listaCoches[i];
            }
        }
        texto += ".";
    }

    document.getElementById("coches").textContent = texto;
}

//Esto es una calculadora
function limpiar() {
    pantalla.value = '0';
}

// Muestra un 0 al cargar la página
window.onload = function () {
    if (pantalla.value === '' || pantalla.value === undefined) {
        pantalla.value = '0';
    }
};

function agregar(valor) {
    // Si la pantalla tiene solo "0", al pulsar un número lo reemplaza en lugar de añadir el numero al lado
    if (pantalla.value === '0') {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}

function calcular() {
    try {
        let resultado = eval(pantalla.value);
        pantalla.value = resultado === Infinity || isNaN(resultado) ? 'Error' : resultado;
        // Si el resultado es 0 o vacío, mostramos '0'
        if (pantalla.value === '0' || pantalla.value === '') {
            pantalla.value = '0';
        }
    } catch {
        pantalla.value = 'Error';
    }
}