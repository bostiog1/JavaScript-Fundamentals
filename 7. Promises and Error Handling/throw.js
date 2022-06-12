try {
    //code here
    throw new Error('my costum error');
}
catch(error) {
    console.log('error: ', error);
}
finally {
    console.log('this always executes');
}


// you can create your own error object