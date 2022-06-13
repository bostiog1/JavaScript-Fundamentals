function startCar(carId){
    let message = 'Starting...';
}
startCar(123);
console.log(message);
// error, message is not defined
//because line 2 of code(message) is out of scope


function startCar(carId){
    let message = 'Starting...';
    let startFn = function turnKey(){
        console.log(message);
    };
startFn();
}
startCar(123);
// Starting...
// pentru ca a cautat "message" in functia parinte

