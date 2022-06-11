for(let i=0; i<5; i++) {
    console.log(i);
    if( i===3)
        break;
}
// 0 
// 1 
// 2 
// 3

for(let i=0; i<5; i++) {
    if( i===3)
        continue;
    console.log(i);
}

// 0 
// 1
// 2
// 4