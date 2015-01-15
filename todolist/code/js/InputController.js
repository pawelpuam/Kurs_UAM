InputCtrl = function (inputView, store) {
	inputView.on("addTask", function (text) {
		if (text) {
			store.addItem(text);
		}
	})
};
