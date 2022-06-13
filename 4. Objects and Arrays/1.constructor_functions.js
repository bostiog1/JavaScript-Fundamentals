function car() {
    this.carId = id;
    this.start = function() {
        console.log('start: ' + this.carId);
    };
}

var vehicle = new car(123);
vehicle.start();

//start: 123