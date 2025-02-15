function mergeSort(arr) {
    
    const len = arr.length

    if(len <= 1) return arr;
    else {
        const mid = Math.ceil(len / 2);
        const arr1 = arr.slice(0, mid);
        const arr2  = arr.slice(mid); 
        const sortedArr1 = mergeSort(arr1);
        const sortedArr2 = mergeSort(arr2);
        const merged = merge(sortedArr1, sortedArr2);
        return merged;
    }


}

function merge(arr1, arr2) {

    let arr1Index = 0, arr2Index = 0, copyIndex = 0, copyArr = [], arr1Len = arr1.length, arr2Len = arr2.length;

    while(arr1Index < arr1Len && arr2Index < arr2Len) {
        if(arr1[arr1Index] < arr2[arr2Index]) {
            copyArr[copyIndex++] = arr1[arr1Index++];
        } else {
            copyArr[copyIndex++] = arr2[arr2Index++];
        }
    }

    for(arr1Index; arr1Index < arr1Len; arr1Index++) {
        copyArr[copyIndex++] = arr1[arr1Index];
    }

    for(arr2Index; arr2Index < arr2Len; arr2Index++) {
        copyArr[copyIndex++] = arr2[arr2Index];
    }    
    

    return copyArr;

}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]))