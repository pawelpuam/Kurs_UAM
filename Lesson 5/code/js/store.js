UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.selected=0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.addItem = function (value) {
if(-1===UAM.utils.getObjectIndex(this.data, value, "content")){	
	this.data.push({content:value, selected:0});
	this.emit("addViewListElement", value);
	console.log("store?", this);
	 UAM.utils.exectuteHttpRequest('/api/todos','POST',function (res) {}, data);
	this.emit("addItemFooterView", this.data.length); 
	}
};

UAM.Store.prototype.updateListItem = function (string) {
var id = UAM.utils.getObjectIndex(this.data,string,"content")
if(this.data[id].selected===0){
	this.data[id].selected=1;
	this.selected++;
	UAM.utils.exectuteHttpRequest('/api/todos','POST',function (res) {}, data);
	this.emit("footerSelectedUpdate", this.selected);
}
};
