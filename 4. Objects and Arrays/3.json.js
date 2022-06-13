let car = {
    id: 123,
    style: 'convertible'
};

console.log( JSON.stringyfy(car) );
// [{"id" :123}, "style":"convertible"]



//CONVERT ARRAY TO JSON
let carId = [
    { carId: 123},
    { carId: 456},
    { carId: 789}
];
console.log( JSON.stringyfy(carId) );

// [{"carId" :123},{"carId": 456}, {"carId": 789}]



// PARSING JSON
let jsonIn = 
`[
    { carId: 123},
    { carId: 456},
    { carId: 789}
]
`;

let carIds = JSON.parse(jsonIn);
console.log( JSON.stringify(carIds) );




