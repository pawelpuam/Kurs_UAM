window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	var store = new UAM.Store();

<<<<<<< HEAD
	var inputView = new UAM.InputView(document.querySelector('#input_container'));
	var listView = new UAM.ListView(document.querySelector('#list_1'));
	var footerView = new UAM.FooterView(document.querySelector('#footer_container'));
=======
	var inputView = new UAM.InputView(document.querySelector('#inputview'));
	var listView = new UAM.ListView(document.querySelector('#listview'));
	var footerView = new UAM.FooterView(document.querySelector('#footerview'));
>>>>>>> fd1717c088d7c05a2fdecadbd2ba5592dbe3b312

	new InputCtrl(inputView, store);
	new ListCtrl(listView, store);
	new FooterCtrl(footerView, store);
});
