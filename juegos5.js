const form = document.getElementById("accessForm");
const output = document.getElementById("terminalOutput");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que la página se recargue

    let access = true;
    const user = document.getElementById("playerName").value.trim();
    const mail = document.getElementById("playerEmail").value.trim();
    const k1 = document.getElementById("pass1").value;
    const k2 = document.getElementById("pass2").value;

    // Limpiar alertas previas
    document.getElementById("nameAlert").innerText = "";
    document.getElementById("emailAlert").innerText = "";
    document.getElementById("passAlert").innerText = "";
    document.getElementById("confirmAlert").innerText = "";

    // Validación Original
    if (user.length < 4 || user.includes(" ")) {
        document.getElementById("nameAlert").innerText = "❌ ID inválido (mínimo 4 letras y sin espacios)";
        access = false;
    }

    if (!mail.includes("@")) {
        document.getElementById("emailAlert").innerText = "❌ Enlace de comunicación roto (falta @)";
        access = false;
    }

    if (k1.length < 8) {
        document.getElementById("passAlert").innerText = "❌ Encriptación débil (mínimo 8 caracteres)";
        access = false;
    }

    if (k1 !== k2) {
        document.getElementById("confirmAlert").innerText = "❌ Las llaves no coinciden";
        access = false;
    }

    // Resultado final
    if (access) {
        output.innerText = ">> ACCESO CONCEDIDO. BIENVENIDO, SOLDADO.";
        form.style.display = "none";
    } else {
        output.innerText = ">> ACCESO DENEGADO. REVISA TUS DATOS.";
    }
});