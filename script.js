// 1. Variables globales
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchInput");
const addBtn = document.getElementById("addBtn");


function renderTasks() {
    taskList.innerHTML = ""; 
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task + " "; 

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    
  
    console.log("Tareas totales: " + tasks.length);
}


function addTask() {
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push(text);
        taskInput.value = "";
        renderTasks();
    }
}


function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    const items = taskList.getElementsByTagName("li");
    let encontrados = 0;

    for (let item of items) {
        const text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = "";
            encontrados++;
        } else {
            item.style.display = "none";
        }
    }
    
    
    const titulo = document.querySelector("h1");
    if (filter === "") {
        titulo.textContent = "Mis Tareas";
    } else {
        titulo.textContent = "Resultados: " + encontrados;
    }
});


addBtn.onclick = addTask;


renderTasks();