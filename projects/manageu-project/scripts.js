import TaskManager from "./classes/taskManager.js";
import task from "./classes/task.js";

window.addTaskToManager = function () {
	let taskDescrption = document.getElementById("taskDescrption").value;
	if (taskDescrption == null || taskDescrption == "")
		alert("Please write a new task");
	else {
		let action = new task(taskDescrption);
		manager.addTask(action);
	}

	showTasks();
};
window.deleteTaskFromManager = function (taskId) {
	if (confirm("Are you want to delete it for good?")) {
		manager.deleteTask(taskId);
		showTasks();
	}
};
window.updateTaskManager = function (taskId) {
	let editTask = prompt("Edit the task: ");
	if (editTask == null || editTask == "")
		alert("You forget to write something");
	else {
		manager.updateTask(taskId, editTask);
		showTasks();
	}
};
window.completedTaskManager = function (taskId) {
	let completedTask = (completedTaskManager = true);
	if (completedTask == false) {
		manager.completedTask(taskId);
		showTasksCompleted();
	}
};

function showTasks() {
	document.getElementById("uncomoleted").innerHTML = "";
	localStorage.setItem("tasks", JSON.stringify(manager.tasks));
	for (let task of manager.tasks) {
		document.getElementById("uncomoleted").innerHTML += `
	<li class="list-group-item d-flex justify-content-between align-items-center">
    ${task.taskDescription}
    <div class="d-flex justify-content-end align-items-center">
    <div style="margin-right: 10px;"onclick="completedTaskManager(${task.id})">
    <i class="fa-solid fa-circle-check"id="vBtn" style="color: #40cc24;cursor: pointer"></i>
    </div>
        <div style="margin-right: 10px;"onclick="updateTaskManager(${task.id})">
            <i class="fa-solid fa-file-pen" style="cursor: pointer; color: #0000e1;"></i>
        </div>
        <div style="margin-bottom: 1px;">
            <i style="cursor: pointer; color: #b12525;" onclick="deleteTaskFromManager(${task.id})">
                <i class="fa-solid fa-trash-can"></i>
            </i>
        </div>
    </div>
</li>
		`;
	}
}
function showTasksCompleted() {
	document.getElementById("Completed").innerHTML = "";
	for (let task of manager.tasks) {
		if (task.completedTask) {
			document.getElementById(
				"Completed"
			).innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
    ${task.taskDescription}
    <div class="d-flex justify-content-end align-items-center">
        <div style="margin-bottom: 1px;">
            <i style="cursor: pointer; color: #b12525;" onclick="deleteTaskFromManager(${task.id})">
                <i class="fa-solid fa-trash-can"></i>
            </i>
        </div>
    </div>
</li>`;
		}
	}
}
let manager = new TaskManager();
showTasks();
showTasksCompleted();
