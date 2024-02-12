import Task from "./classes/Task.js";
import TaskManager from "./classes/taskManager.js";

let manager;

function createTaskElement(action) {
	const listItem = document.createElement("li");
	listItem.className = "list-group-item active d-flex justify-content-between";
	listItem.textContent = action.description;
	listItem.style.backgroundColor = "#A0A0A0";

	const box = document.createElement("div");
	box.className = "box ";
	box.style.cursor = "pointer";

	if (action.completed) {
		listItem.style.textDecoration = "line-through";
		listItem.style.color = "black";
		listItem.style.backgroundColor = "#319705";
	} else {
		const checkIcon = document.createElement("i");
		checkIcon.className = "fa-solid fa-check fa-beat";
		checkIcon.style.marginLeft = "0.5rem";
		checkIcon.onclick = () => updateCompleteTask(action.id);
		box.appendChild(checkIcon);

		const penIcon = document.createElement("i");
		penIcon.className = "fa-solid fa-pen fa-beat";
		penIcon.style.marginLeft = "0.5rem";
		penIcon.onclick = () => updateActionInTask(action.id);
		box.appendChild(penIcon);
	}

	const trashIcon = document.createElement("i");
	trashIcon.className = "fa-solid fa-trash fa-beat";
	trashIcon.style.marginLeft = "0.5rem";
	trashIcon.onclick = () => deleteActionFromManager(action.id);
	box.appendChild(trashIcon);

	listItem.appendChild(box);

	return listItem;
}

function showTasks() {
	const ulElement = document.querySelector("#uncompleted");
	const ulCompleted = document.querySelector("#completed");

	ulElement.innerHTML = "";
	ulCompleted.innerHTML = "";

	if (manager && manager.actions) {
		for (let action of manager.actions) {
			const listItem = createTaskElement(action);

			if (action.completed) {
				ulCompleted.appendChild(listItem);
			} else {
				ulElement.appendChild(listItem);
			}
		}

		manager.saveToLocalStorage();
	}
}

window.addEventListener("load", () => {
	let storedActions;

	storedActions = JSON.parse(localStorage.getItem("actions"))?.actions || [];

	TaskManager && TaskManager.prototype.hasOwnProperty("addTask");
	manager = new TaskManager(storedActions);
	showTasks();
});

window.addAction = () => {
	let input = document.querySelector("#taskDescrption").value;
	if (input == null || input == "") alert("Please write a new task");
	else {
		const action = new Task(input);

		manager && manager.addTask && manager.saveToLocalStorage;
		manager.addTask(action);
		showTasks();
	}

	document.querySelector("#input").value = "";
};

window.deleteActionFromManager = function (id) {
	if (confirm("Are you sure you want to delete it for good?")) {
		manager && manager.deleteTask;
		manager.deleteTask(id);
		manager.saveToLocalStorage();
		showTasks();
	}
};

window.updateActionInTask = function (id) {
	let newTask = prompt("Edit the task: ");
	if (newTask == null || newTask == "") alert("You forgot to write something");
	else {
		manager && manager.updateTaskDescription;
		manager.updateTaskDescription(id, newTask);
		manager.saveToLocalStorage();
		showTasks();
		document.querySelector("#input").value = "";
	}
};

window.updateCompleteTask = function (id) {
	manager && manager.completeTask;
	manager.completeTask(id);
	manager.saveToLocalStorage();
	showTasks();
};

window.deleteCompletedTask = function () {
	if (confirm("Are you sure?")) {
		if (manager) {
			if (manager.actions) {
				manager.actions = manager.actions.filter((action) => !action.completed);
				manager.saveToLocalStorage();
				showTasks();
			}
		}
	}
};
