let arr=[1,2,3];
// let arr2=arr;
// arr2.push(4);
// console.log(arr);
// console.log(arr2);

//console.log(arr);// prints the array
//using spread operator (...) is k/a spread operator 
//console.log(...arr); // prints the lists after spreading 

let arr2=[...arr]; //store the list in new array and manipulate it.
//so that next variable gets new address
//we basically spread the old values 
arr2.push(4);
console.log(arr);
console.log(arr2);
// [ 1, 2, 3 ]
// [ 1, 2, 3, 4 ]

