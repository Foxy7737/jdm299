
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
