UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data = [];
	var me = this;
	this.selected = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.addItem = function (value) {
	if (-1 === UAM.utils.getObjectIndex(this.data, value, "content")) {
		var toReturn = {
			content : value,
			selected : 0
		};
		this.data.push(toReturn);
		
		UAM.utils.exectuteHttpRequest('/api/todos','POST',function (res) {}, this.data);
		this.emit("addViewListElement", toReturn);
		this.emit("addItemFooterView", this.data.length);
	}
};

UAM.Store.prototype.updateListItem = function (string) {
	var id = UAM.utils.getObjectIndex(this.data, string, "content")
		if (this.data[id].selected === 0) {
			this.data[id].selected = 1;
			this.selected++;
			 UAM.utils.exectuteHttpRequest('/api/todos','POST',function (res) {}, this.data);
			this.emit("footerSelectedUpdate", this.selected);
		}
};

UAM.Store.prototype.restoreData = function (res) {
	this.data = res;
	var that = this;
	console.log("ile razy" );
	this.emit("addItemFooterView", this.data.length);
	this.data.forEach(function (entry) {
	console.log("cośtam" );
	console.log(entry);
	that.emit("addViewListElement", entry);
		if (entry.selected === 1) {
			that.selected++;
			// that.emit("listViewUpdateItem", entry);
		}
	});
	this.emit("footerSelectedUpdate", this.selected);
};
