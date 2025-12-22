const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const totalTodos = document.getElementById("totalTodos");
const completedTodos = document.getElementById("completedTodos");
const clearBtn = document.getElementById("clearBtn");
const emptyMsg = document.getElementById("emptyMsg");


let totalCount = 0;
let completedCount = 0;


function updateEmptyMsg() {
emptyMsg.style.display = totalCount === 0 ? "block" : "none";
}


addBtn.addEventListener("click", function () {
const text = todoInput.value.trim();


if (text === "") {
alert("Please enter a todo");
return;
}


const li = document.createElement("li");
const span = document.createElement("span");
span.textContent = text;


const completeBtn = document.createElement("button");
completeBtn.textContent = "Complete";


const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.style.backgroundColor = "#e74c3c";


completeBtn.addEventListener("click", function () {
span.classList.toggle("completed");
completedCount += span.classList.contains("completed") ? 1 : -1;
completedTodos.textContent = completedCount;
});


deleteBtn.addEventListener("click", function () {
if (span.classList.contains("completed")) {
completedCount--;
completedTodos.textContent = completedCount;
}


li.remove();
totalCount--;
totalTodos.textContent = totalCount;
updateEmptyMsg();
});


li.appendChild(span);
li.appendChild(completeBtn);
li.appendChild(deleteBtn);
todoList.appendChild(li);


totalCount++;
totalTodos.textContent = totalCount;
todoInput.value = "";
updateEmptyMsg();
});


clearBtn.addEventListener("click", function () {
todoList.innerHTML = "";
totalCount = 0;
completedCount = 0;
totalTodos.textContent = 0;
updateEmptyMsg();
