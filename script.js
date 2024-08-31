document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('task-list');

    const newTask = document.createElement('li');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener('click', function() {
        if (taskCheckbox.checked) {
            newTask.classList.add('completed');
        } else {
            newTask.classList.remove('completed');
        }
    });

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(taskCheckbox);
    newTask.appendChild(taskLabel);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    document.getElementById('new-task').value = "";
});