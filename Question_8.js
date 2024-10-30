function clone(arr){
    return [...arr];
}

console.log("Clone of array is: ", clone([6, 1, 5, 8]));
console.log("Clone of array is: ", clone([3, [1, 6], 5]));