let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if (value === "") return;

    tasks.push(value);

    // ascending order
    tasks.sort();

    input.value = "";
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}