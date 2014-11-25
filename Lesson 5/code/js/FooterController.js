FooterCtrl = function(footerView, store) {


	var addItemFooter = function(size){
		footerView.setCurrentSize(size);
	}

	var updateItemFooter = function(selectedCount){
		footerView.setSelectedCount(selectedCount);
	}
	store.on("addItemFooterView", addItemFooter)
	store.on("footerSelectedUpdate", updateItemFooter);

}