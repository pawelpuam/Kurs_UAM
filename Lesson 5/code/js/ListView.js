UAM.ListView = function (listview) {
	var listItemClass = "list_item"
	console.log("listview", listview);
	UAM.EventEmitter.call(this);
	var context = this;
	this.addListElement= function (value) {
			var item = document.createElement("li");
			item.className=listItemClass; // add class
			item.innerHTML = value;
			listview.appendChild(item);
			
			item.addEventListener("click", function(){
			console.log("kliknalem");
			item.className="marked list_item";
			context.emit("updateItem", item.innerHTML);
			});
	};
};



UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);