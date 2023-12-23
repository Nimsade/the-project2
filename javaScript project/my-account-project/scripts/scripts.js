import ActionsManger from "../classes/ActionsManager.js";
import Action from "../classes/Action.js";

window.addActionToManager = function () {
	let type = document.getElementById("type").value;
	let description = document.getElementById("description").value;
	let amount = +document.getElementById("amount").value;

	let action = new Action(type, description, amount);

	manager.addAction(action);
	showActionsInTable();
	console.log(manager.actions);

	document.getElementById("description").value = "";
	document.getElementById("amount").value = "";
};
window.deleteActionFromManager = function (actionId) {
	if (confirm("Are you sure?")) {
		manager.deleteAction(actionId);
		showActionsInTable();
	}
};
window.updateActionInManager = function (actionId) {
	let newAmount = prompt("Please enter new amount: ");
	if (newAmount == null || newAmount == "") alert("something went wrong");
	else {
		manager.updateAction(actionId, +newAmount);
		showActionsInTable();
	}
};

function showActionsInTable() {
	document.getElementById("actions").innerHTML = "";
	localStorage.setItem("actions", JSON.stringify(manager.actions));
	for (let action of manager.actions) {
		document.getElementById("actions").innerHTML += `<tr> <td class=${
			action.type == "income" ? "text-success" : "text-danger"
		}>${action.description} </td> <td class=${
			action.type == "income" ? "text-success" : "text-danger"
		}>${action.amount} </td>
        <td><a onclick="updateActionInManager(${
					action.id
				})"><i  class="fa-regular fa-pen-to-square"></i></a>
         <td> <i style="cursor: pointer" onclick="deleteActionFromManager(${
						action.id
					})"><i class="fa-solid fa-trash"></i></td>
        </tr>`;
	}
}

let manager = new ActionsManger();
console.log(manager.actions);
showActionsInTable();
