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
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
