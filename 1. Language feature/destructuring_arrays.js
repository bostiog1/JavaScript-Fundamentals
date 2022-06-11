let carIds = [100,200,300];
let car1,car2,theRest;

[,car2, ...theRest] = carIds;

console.log(car1, car2, theRest);

//200 , [300]