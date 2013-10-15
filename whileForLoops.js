var sL = true;

var soloLoop = function () {
    while(sL) {
        console.log("This is the soloLoop!");
        sL = false;
    }
};

var doubleTrouble = function () {
    for (var i = 0; i < 101; i+=10) {
        console.log(i);
        }
};

soloLoop();
doubleTrouble();