import { showPage } from "./dom.service.js";

window.openContainer = () => {
	document.getElementById("movingContainer").style.display = "block";
};

window.closeContainer = () => {
	document.getElementById("movingContainer").style.display = "none";
};
window.showPage = () => {
	let container = document.createElement("div");
	container.classList.add("classDiv");
	container.style.width = "100px";
	container.style.height = "100px";
	container.style.border = "1px solid #000;";
};
