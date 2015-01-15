ListCtrl = function(listview, store){
	
	UAM.utils.exectuteHttpRequest('/api/todos', 'GET', function (res) {
	console.log("httpexecute restore" );
		if (res) {
			 store.restoreData(res);
		}
	});
	
	var addElement = function(value){
		listview.addListElement(value);
	};
	
	var updateItem = function(string){
		store.updateListItem(string); //ogarniam
	};
	
	store.on("addViewListElement", addElement);
	listview.on("updateItem", updateItem);
}