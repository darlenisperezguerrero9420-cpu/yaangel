// 1. REFERENCIAS
const modal = document.getElementById("modalContainer");
const box = document.getElementById("modalBox");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const sample = document.getElementById("colorSample");

// 2. DISEÑO DESDE JS (Sin CSS coño, directo al grano)
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.paddingTop = "50px";

// Estilo del contenedor del Popup (oculto al inicio)
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0,0,0,0.5)"; // Fondo oscuro traslúcido

// Estilo de la caja blanca
box.style.backgroundColor = "white";
box.style.width = "300px";
box.style.margin = "100px auto";
box.style.padding = "20px";
box.style.borderRadius = "15px";
box.style.position = "relative";

// Estilo del círculo de color
sample.style.width = "60px";
sample.style.height = "60px";
sample.style.backgroundColor = "#e91e63"; // Rosa intenso
sample.style.borderRadius = "50%";
sample.style.margin = "10px auto";

// 3. FUNCIONES (Abrir y Cerrar)
openBtn.onclick = function() {
    modal.style.display = "block"; // Muestra el popup
}

closeBtn.onclick = function() {
    modal.style.display = "none"; // Cierra el popup
}

// Cerrar si haces clic fuera de la caja blanca
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("addBtn").onclick = function() {
    alert("💄 ¡Añadido a tu tocador virtual!");
    modal.style.display = "none";
}