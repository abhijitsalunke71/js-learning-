//definiation of array
const firstarr = [0,1,3,4,5,6,7]
// console.log(firstarr);

//another method to define array 

let secondarray = ["shaktiman","gangadhar","chota bhim"]

// console.log(secondarray);

// another method 

const thirdarray = new Array(1,2,4,"abhijit",2,4,6)
// console.log(thirdarray.length);




// console.log(`the length of third array is ${thirdarray.length}`);
// console.log(`the third array contains elements like ${thirdarray}`);

// console.log(thirdarray.at());
// console.log(thirdarray.concat("nahi baba","ase nahi hou shakat"));
// console.log(thirdarray.copyWithin(secondarray));
// console.log(thirdarray.entries());
// // console.log(thirdarray.fill('i am'));//adds the elements in the array 
// console.log(thirdarray.valueOf(thirdarray));//nothing returns 

// console.log(thirdarray.sort());
 
// console.log(thirdarray.slice(1,5));
// console.log(thirdarray.shift(4));//delete the first first element of an array
// console.log(thirdarray.toReversed());//same result like reverse
// console.log(thirdarray.reverse());

// console.log(thirdarray.toSorted());//returns ascending sorting 
// // console.log(thirdarray.reduce('abhijit'));
// console.log(thirdarray.push(1,2,4,5,8));
// console.log(thirdarray);
// console.log(thirdarray.pop());
// console.log(thirdarray.unshift("abhijit"));//adds the element in the first of the array 
// console.log(thirdarray.shift());//delete the first first element of an array

// console.log(thirdarray);

//spread operator 

const newarr = [...secondarray,...thirdarray]// spread operator to used to concanate the operator 
console.log(newarr);




