var saveBtn = document.getElementById("js_saveBtn");
var ulList = document.getElementById("js_ulList");
var input = document.getElementById("js_input");

saveBtn.style.cursor = "pointer";

function listPlus() {
	var li = document.createElement("li");
	var checkbox = document.createElement("input")

	checkbox.type = "checkbox"

	li.innerText = input.value;
	if (!input.value || input.value === "" || input.value === " ") {
		return false;
	} else {
		ulList.appendChild(li);
	}
	function listRemove() {
		ulList.removeChild(li);
	}
	li.addEventListener("click", listRemove);
	li.style.cursor = "pointer";

	input.value = null;

	input.select();
}

saveBtn.addEventListener("click", listPlus);
input.addEventListener("onkeyup", listPlus);

function init() {
	input.focus();
}

init();