UAM.InputView = function (input_container) {
	UAM.EventEmitter.call(this);
	
	this.inputBox = input_container.querySelector("#input_1");
	this.buttonView = input_container.querySelector("#button_1");
	var me =this;
	this.addTask = function() {
		var inputText = me.inputBox.value;
		me.emit("addTask", inputText);
		me.inputBox.value = "";
		};
	this.buttonView.addEventListener("click", this.addTask);
	
};


UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);