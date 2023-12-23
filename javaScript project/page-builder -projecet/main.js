window.addEventListener("load", () => {
	// Call showPage on page load
	showPage();
});

window.openContainer = () => {
	document.getElementById("movingContainer").style.display = "block";
};

window.closeContainer = () => {
	document.getElementById("movingContainer").style.display = "none";
};

class PageElement {
	constructor(type, content, width, height, color, fontSize, fontType) {
		this.type = type;
		this.content = content;
		this.width = width;
		this.height = height;
		this.color = color;
		this.fontSize = fontSize;
		this.fontType = fontType;
	}

	createElement() {
		const element = document.createElement(this.type);
		element.textContent = this.content;
		element.style.width = this.width;
		element.style.height = this.height;
		element.style.color = this.color;
		element.style.fontSize = this.fontSize;
		element.style.fontFamily = this.fontType;

		return element;
	}
}

function savePage() {
	const elements = Array.from(
		document.getElementById("elementContainer").children
	).map((element) => element.outerHTML);
	localStorage.setItem("pageElements", JSON.stringify(elements));
}

function deletePage() {
	localStorage.removeItem("pageElements");
	document.getElementById("elementContainer").innerHTML = "";
}

function showPage() {
	const savedElements = localStorage.getItem("pageElements");
	const container = document.getElementById("elementContainer");

	if (savedElements) {
		const elements = JSON.parse(savedElements);

		elements.forEach((element) => {
			const tempElement = document.createElement("div");
			tempElement.innerHTML = element;
			container.appendChild(tempElement.firstChild);
		});
	} else {
	}
}

function addElementToPage() {
	const container = document.getElementById("elementContainer"); // Add this line

	const elementType = document.getElementById("sel1").value;
	const contentInput = document.getElementById("content");
	const content = contentInput.value;

	let newElement;

	switch (elementType) {
		case "Big headline":
			newElement = document.createElement("h1");
			break;
		case "Medium headline":
			newElement = document.createElement("h3");
			break;
		case "Small headline":
			newElement = document.createElement("h6");
			break;
		case "Paragraph":
			newElement = document.createElement("p");
			break;
		default:
			newElement = document.createElement("div");
	}

	newElement.textContent = content;
	newElement.style.width = document.getElementById("width").value + "px";
	newElement.style.height = document.getElementById("height").value + "px";
	newElement.style.color = document.getElementById("color").value;
	newElement.style.fontSize = document.getElementById("fontSize").value + "px";
	newElement.style.fontFamily = document.getElementById("fontType").value;

	container.appendChild(newElement);
	contentInput.value = "";
	document.getElementById("width").value = "";
	document.getElementById("height").value = "";
	document.getElementById("color").value = "";
	document.getElementById("fontSize").value = "";
	document.getElementById("fontType").value = "";
}

document
	.getElementById("showButton")
	.addEventListener("click", addElementToPage);
document.getElementById("saveButton").addEventListener("click", savePage);
document.getElementById("deleteButton").addEventListener("click", deletePage);
