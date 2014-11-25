ListCtrl = function(listview, store){
	
	var addElement = function(value){
		listview.addListElement(value);
	}
	
	var updateItem = function(string){
	store.updateListItem(string); //ogarniam
	}
	
	store.on("addViewListElement", addElement);
	listview.on("updateItem", updateItem);
}