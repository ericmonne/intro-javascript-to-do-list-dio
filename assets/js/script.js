const FORM = document.getElementById("task-form");
const TASK_LIST = document.getElementById("tasks");

FORM.onsubmit = function(func){
    func.preventDefault();
    const inputField = document.getElementById("task-input");
    addTask(inputField.value);
    FORM.reset();
}

function addTask(taskDescription){
    const TASK_CONTAINER = document.createElement("div");
    const NEW_TASK = document.createElement("input");
    const TASK_LABEL = document.createElement("label");
    const TASK_DESCRIPTION_NODE = document.createTextNode(taskDescription);

    NEW_TASK.setAttribute("type", "checkbox");
    NEW_TASK.setAttribute("name", taskDescription);
    NEW_TASK.setAttribute("id", taskDescription);

    TASK_LABEL.setAttribute("for", taskDescription);
    TASK_LABEL.appendChild(TASK_DESCRIPTION_NODE);

    TASK_CONTAINER.classList.add("task-item");
    TASK_CONTAINER.appendChild(NEW_TASK);
    TASK_CONTAINER.appendChild(TASK_LABEL);

    TASK_LIST.appendChild(TASK_CONTAINER);

}