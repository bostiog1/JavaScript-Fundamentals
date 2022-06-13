let getId = (prefix, suffix) => prefix + 123 + suffix;

console.log( getId('ID: ', '!') ); //ID: 123!
//prefix = 'ID: '
//suffix = '!'




let getId1 = () => 123;
console.log( getId() ); // 123
//daca nu sunt argumente si nu sunt parametrii tot avem nevoie de '()'


let getId2 = _ => 123;
console.log( getId() ); // 123




//Arrow function do not have thei own "this" value.
// "this" refers to the enclosing context