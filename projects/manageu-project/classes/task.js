export default class Task {
	constructor(taskDescription, completed) {
		this.taskDescription = taskDescription;
		this.completed = completed || false;
		this.id = Math.floor(Math.random() * 1000);
	}
	get(propName) {
		return this[propName];
	}
	set(propName, newValue) {
		this[propName] = newValue;
	}
}
