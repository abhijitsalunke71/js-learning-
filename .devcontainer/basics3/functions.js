//basic function 

// function empinfo(name, empid){
//     return `employee name is ${name} and the id is ${empid}`;
// }
// console.log(empinfo("abhijit", 12));//if i print it only on that time it will prints the info either it will not return anyything 

// empinfo("sahil", 2)


//another example of function

// function addtwonumbers (num1, num2){
//     console.log(num1+num2)
// }
// addtwonumbers(1,2)// it will returns the addition of the two numbers 

// function addtwonumbers (num1, num2){
//         console.log(num1+num2)
//     }

//     let result = addtwonumbers(2,3)
//     console.log(result) // it will prints the undefined because in js the console was only displays the value in the scope of the functions 
    //instead of console we use return it will take value for this variable 

    //for example for the return ;

    // function example (number1, numbers2){
    //     return number1+numbers2;
    // }
    // let res = example(2,5);
    // console.log(res);
    

    //if the values was not taken then 

    // function makemyid (username){
    //     return `the id has been ready for ${username}`;
    // }

    // console.log(makemyid());//the output if for is undefined 

    // for this type of condition we use if loop to check is it right or not 
    
    // function makemyid (username){
    //     if(username === undefined){
    //         console.log("enter the username");
            
    //     }
    //     else{
    //     return `the id has been ready for ${username}`;
    // }}

    // console.log(makemyid());

    // function makemyid (username ="nana"){
        
    //         console.log("enter the username",username);
    //         return username
       
    // }

    // console.log(makemyid());

//Rest Operator (...)

// function CalculateCartPrice(price){
//     return `the price of the cart is ${price}`;
// }
// console.log(CalculateCartPrice(100,200,300));
// //--- this type of case we are facing the problem of multiple argument on that time we use a REST operator (...)


// //EG of Rest operator

// function calculateCartPrice(...price1){
//     return price1
// }

// console.log(calculateCartPrice(100,200,300,400));

// //accessing object in the function 


// //creating object 
// const user = {
//     usename : "abhijit",
//     id : "10"
// }

//accessing object in the function by using (anyobject)

// function userinffo(anyobject){
//     return ` the name of the user is ${anyobject.usename} and the id is ${anyobject.id}`
// }

// console.log(userinffo(user))

//this is one method to pass the object in the function 

//another method without creating the object directly pass the object in the function call 

// function userinffo(anyobject){
//     return ` the name of the user is ${anyobject.usename} and the id is ${anyobject.id}`
// }
// console.log(userinffo({
//     usename : "abhijit",
//     id : "20"
// }));

//passing array into the functions 

// let myarr = [1,2,3,4];

// function getarr(getArray){
//     console.log(getArray[0]);
    
// }

// console.log(getarr(myarr));

// function getarr(getArray){
//     return getArray[0];
    
// }
// console.log(getarr(myarr));

// //creating array in the calling of function

// function egarray (getArray){
//     return `${getArray[0]} and ${getArray[1]}`;
// }

// console.log(egarray([3,2,4]));


//#function scope 

// function one (){
//     const name = "abhijit"
//     function two (){
//         const last_name = "salunke"
//         console.log(name);
        
//     }
//     // console.log(last_name);
//     two()    
// }
// one()


//////////////////// arrow function +++++++++++++++++++

//in js this is used to refer a current contest 

// in the arrow and the simple function the whole thing is same 
// this in the function without accessing any value it returns  a empty set 


// EXAMPLE OF ARRWO FUNCTION

//regular 
// const abcd = (x,y) =>{
//        return  ` the addition of ${x},${y} is ${x+y}`
// }
// console.log(abcd(3,4))


//implesit return example
const abcd = (x,y) => ` the addition of ${x},${y} is ${x+y}` //write the whole thing in the single line is known as implisite return 
//or we are able to write this function like 
// const abcd = (x,y) => (` the addition of ${x},${y} is ${x+y}`)
console.log(abcd(3,4))


// example for object 
const abcde = () => ({
    nameing: "nana",
    std : "kidhar nhi",
    school : "ETHDC"
})

console.log(abcde());


