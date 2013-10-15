//Remember to set your condition outside the loop!
var loops = 0;

var loop = function() {
	while(loops < 3) {
		console.log("I'm looping!") + loops++;
	}
};

loop();