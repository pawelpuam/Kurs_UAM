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
	}
};
