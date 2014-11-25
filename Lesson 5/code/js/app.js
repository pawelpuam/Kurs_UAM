window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	var store = new UAM.Store();

	var inputView = new UAM.InputView(document.querySelector('#input_container'));
	var listView = new UAM.ListView(document.querySelector('#list_1'));
	var footerView = new UAM.FooterView(document.querySelector('#footer_container'));

	new InputCtrl(inputView, store);
	new ListCtrl(listView, store);
	new FooterCtrl(footerView, store);
});
