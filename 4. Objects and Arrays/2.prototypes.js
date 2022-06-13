function car() {
    this.carId = id;
}

car.prototype.start = function() {
    console.log('start: ' + this.carId);
};

let car = new car(123);
car.start(); 

//start: 123

// nu avem de 100 de functii start(de exemplu) 
// pentru asta folosim prototype
// car are o proprietate numita prototype
// folosim metodele direct pe prototype