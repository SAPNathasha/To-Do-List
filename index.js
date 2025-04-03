document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");

    listItem.innerHTML = `${taskText} <button onclick="removeTask(this)">❌</button>`;

    taskList.appendChild(listItem);
    saveTasks();
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(task => {
        tasks.push(task.innerText.replace("❌", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach(task => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${task} <button onclick="removeTask(this)">❌</button>`;
        taskList.appendChild(listItem);
    });
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
