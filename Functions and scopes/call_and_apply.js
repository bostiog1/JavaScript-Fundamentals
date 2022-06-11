let o = {
    carId: 123,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};
let newCar = { carId:456 };
console.log( o.getId.apply(newCar, ['ID: ']) );

//call: now "this" refer to the new object newCar

//apply: you can pass arguments
// we passed the argument 'ID: ' to the 'prefix'

//call and apply are used to change the value of 'this