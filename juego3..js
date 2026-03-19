// --- 1. VARIABLES Y ESTADO ---
let inventory = []; 


const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const inventoryList = document.getElementById("inventoryList");
const searchBox = document.getElementById("searchBox");
const clearBtn = document.getElementById("clearBtn");




function renderInventory() {
    inventoryList.innerHTML = "";

    inventory.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `📦 <b>${item}</b> `;

       
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Equipar/Tirar";
        deleteBtn.onclick = () => {
            inventory.splice(index, 1);
            renderInventory();
        };

        li.appendChild(deleteBtn);
        inventoryList.appendChild(li);
    });
}


function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName !== "") {
        inventory.push(itemName);
        itemInput.value = ""; 
        renderInventory();
    }
}




addBtn.onclick = addItem;


itemInput.onkeypress = (e) => {
    if (e.key === "Enter") addItem();
};


searchBox.onkeyup = () => {
    const filter = searchBox.value.toLowerCase();
    const allItems = inventoryList.getElementsByTagName("li");

    for (let li of allItems) {
        const text = li.textContent.toLowerCase();
        li.style.display = text.includes(filter) ? "" : "none";
    }
};


clearBtn.onclick = () => {
    if (confirm("¿Seguro que quieres vaciar tu mochila?")) {
        inventory = [];
        renderInventory();
    }
};