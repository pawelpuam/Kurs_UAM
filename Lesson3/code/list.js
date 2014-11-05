(function (global) {

	var deleteStr = "Usuń";
	var listItemClass = "list_item"
	var classItemName="button delete_button";

	var textInput = document.getElementById("input_1");
	var strings=[];
	var event = function () {
	console.log(strings);
		if(strings.indexOf(textInput.value)==-1){
			var item = document.createElement("li");
			item.className=listItemClass;
			var deleteButton = document.createElement("div");
			
			deleteButton.addEventListener("click", function() {
			this.parentNode.parentNode.removeChild(this.parentNode);
			delete strings[strings.indexOf(textInput.value)];
			});
			deleteButton.className=classItemName;
			
			deleteButton.innerHTML = deleteStr;
			item.innerHTML = textInput.value;
			strings.push(textInput.value);
			item.appendChild(deleteButton);
			document.getElementById("list_1").appendChild(item);
		}
	}
	
	var button = document.getElementById("button_1");
	button.addEventListener("click", event);

}(window));