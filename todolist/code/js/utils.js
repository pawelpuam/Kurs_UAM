UAM.utils = {
	inherits : function (Parent, Child) {
		Child.prototype = Object.create(Parent.prototype);
		Child.prototype.constructor = Child;
	},
	
	getObjectIndex : function (array, element, nameOfAttr) {
		var elements = array.map(function (x) {
				return x[nameOfAttr];
			});
		return elements.indexOf(element);
	},
	
	exectuteHttpRequest: function(path, type, callback, requestData) {
    var httpRequest = new XMLHttpRequest();
    UAM.loading.show();
    httpRequest.onload = function () {
			if (httpRequest.status !== 200) {
				alert('Request failed');
			} else {
			  callback(httpRequest.response);
			  UAM.loading.hide();
			}
		};
		httpRequest.open(type, path);
    httpRequest.responseType="json";
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(requestData));
  }
};