// function fibRec(num, arr = [0, 1]) {
//     if(num <= arr.length) {
//         return arr;
//     } else {
//         arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//         return fibRec(num, arr);
//     } 
// }


function fibRec(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const arr = fibRec(n - 1);
    return [...arr, arr.at(-1) + arr.at(-2)];
}

console.log(fibRec(8));