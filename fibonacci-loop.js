function fibs(num) {
    
    if(num < 2) return;

    let fibArray = [0, 1];

    for(let i = 2; i < num; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        console.log(fibArray);
    }

    return fibArray
}

console.log(fibs(10));