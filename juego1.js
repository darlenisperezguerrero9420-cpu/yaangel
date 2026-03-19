// --- 1. REFERENCIAS ---
const body = document.getElementById("mainBody");
const title = document.getElementById("mainTitle");
const label = document.getElementById("label");
const display = document.getElementById("countDisplay");
const allButtons = document.querySelectorAll("button");

// --- 2. DISEÑO "QUIET LUXURY" DESDE JS ---
body.style.backgroundColor = "#fff9fa"; // Rosa casi blanco
body.style.textAlign = "center";
body.style.paddingTop = "100px";
body.style.fontFamily = "Garamond, serif";

title.style.letterSpacing = "5px";
title.style.color = "#d4a5a5";

display.style.fontSize = "100px";
display.style.color = "#ffb6c1";
display.style.margin = "20px";

// Estilo para todos los botones
allButtons.forEach(btn => {
    btn.style.padding = "10px 25px";
    btn.style.margin = "5px";
    btn.style.border = "1px solid #ffdae0";
    btn.style.backgroundColor = "white";
    btn.style.color = "#d4a5a5";
    btn.style.borderRadius = "20px";
    btn.style.cursor = "pointer";
    btn.style.textTransform = "uppercase";
});

// Resaltar el botón de sumar
document.getElementById("btnPlus").style.backgroundColor = "#ffdae0";

// --- 3. LÓGICA DEL CONTADOR ---
let count = 0;

function updateUI() {
    display.innerText = count;
    // Efecto de color dinámico
    display.style.color = count > 10 ? "#ff8fa3" : "#ffb6c1";
}

function increase() {
    count++;
    updateUI();
}

function decrease() {
    if (count > 0) {
        count--;
        updateUI();
    }
}

function reset() {
    count = 0;
    updateUI();
}

function save() {
    localStorage.setItem("lipstickCount", count);
    alert("✨ Tu colección ha sido guardada ✨");
}

function load() {
    let saved = localStorage.getItem("lipstickCount");
    if (saved !== null) {
        count = Number(saved);
        updateUI();
    }
}

// --- 4. ASIGNAR EVENTOS ---
document.getElementById("btnPlus").onclick = increase;
document.getElementById("btnMinus").onclick = decrease;
document.getElementById("btnReset").onclick = reset;
document.getElementById("btnSave").onclick = save;
document.getElementById("btnLoad").onclick = load;

// Cargar al abrir
load();