const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks on page load
window.onload = loadTasks;

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = { text: taskText };
  appendTaskToDOM(task);
  saveTaskToLocal(task);

  taskInput.value = "";
}

function appendTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => {
    li.remove();
    removeTaskFromLocal(task.text);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function saveTaskToLocal(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromLocal(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => appendTaskToDOM(task));
}
