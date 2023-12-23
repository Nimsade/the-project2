export default class TaskManager {
	constructor(actions = []) {
		this.actions = actions;
	}

	addTask(task) {
		this.actions.push(task);
		this.saveToLocalStorage();
	}

	deleteTask(id) {
		let deleteIndex = this.actions.findIndex((action) => action.id == id);
		this.actions.splice(deleteIndex, 1);
		this.saveToLocalStorage();
	}

	updateTaskDescription(id, newDescription) {
		let updateIndex = this.actions.findIndex((action) => action.id == id);
		this.actions[updateIndex].description = newDescription;
		this.saveToLocalStorage();
	}

	completeTask(id) {
		const taskIndex = this.actions.findIndex((action) => action.id === id);
		if (taskIndex !== -1) {
			const task = this.actions[taskIndex];
			task.completed = true;
			this.saveToLocalStorage();
		}
	}

	saveToLocalStorage() {
		localStorage.setItem("actions", JSON.stringify({ actions: this.actions }));
	}
}
