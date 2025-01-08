//creating a simple object 

let myInfo ={
    name : "abhijit",
    address : "vadgaon",
    age : 23
}

console.log(myInfo["address"]);


//accessing symbol in the object 

let mysym = Symbol("key1");
let newInfo = {
        [mysym] : "key1",
}
console.log(newInfo);


//function inside the object 

myInfo.newfunc = function(){
    console.log(`hie my name is ${this.name} `);
    
}
console.log(myInfo.newfunc());


//constructor //
const userInfo = {}
userInfo.name="abhijit"
userInfo.email="abhi@gmail.com"
console.log(userInfo);


reguser = {
    email:"nana@gmail.com",
    fullname :{
        userfullname : {
            firstname : "yes it is",
             lastname : "hahaha"
        }
    }
}

console.log(reguser.fullname);
