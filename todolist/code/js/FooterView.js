UAM.FooterView = function (footer_container) {
	UAM.EventEmitter.call(this);
	this.setCurrentSize = function(size){
		footer_container.querySelector("#footer_all").innerHTML = size;
	}
	
	this.setSelectedCount = function(selectedCount){
		footer_container.querySelector("#footer_selected").innerHTML = selectedCount;
	}
	
};


UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);