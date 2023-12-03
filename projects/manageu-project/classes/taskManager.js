export default class TaskManager {
	constructor() {
		this.tasks = localStorage.getItem("tasks")
			? JSON.parse(localStorage.getItem("tasks"))
			: [];
	}
	addTask(task) {
		this.tasks.push(task);
	}
	deleteTask(taskId) {
		let indexToDelete = this.tasks.findIndex((task) => task.id == taskId);
		this.tasks.splice(indexToDelete, 1);
	}
	updateTask(taskId, newTask) {
		let indexToUpdate = this.tasks.findIndex((task) => task.id == taskId);
		this.tasks[indexToUpdate].taskDescription = newTask;
	}
	completedTask(taskId) {
		let indexToComplet = this.tasks.findIndex((task) => task.id == taskId);
		this.tasks[indexToComplet].completed = true;
	}
}
