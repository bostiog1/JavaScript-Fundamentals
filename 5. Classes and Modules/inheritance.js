class Vehicle {
    constructor() {
        this.type = 'car';
    }
    start() {
        return `Starting: ${this.type}`;
    }
}

class Car extends Vehicle {
    constructor() {
        return 'in Car start ' + super.start();
    }
}

let car = new Car();
console.log( car.type );

//The output:
// in Car start starting: car