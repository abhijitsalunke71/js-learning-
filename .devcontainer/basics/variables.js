// const accountNumber= 1234;
// var name="abhijit"
// let address = "vadgaon rasai "


// console.log(accountNumber);
// console.log(address);


// console.table([accountNumber,name,address])

// let newname = Number(name);
// console.log(newname)
// var printing = typeof(newname);
// console.log(printing);



let name = "abhijit";
var age = 23;

console.log(typeof(name));
console.log(typeof(age));

let ISPresent = true;
console.log(typeof ISPresent);


const RoomTemp=null;
console.log(typeof(RoomTemp));

let character = undefined;
console.log(typeof(character));

const classing = Symbol('123');
console.log(typeof(classing));

var stockmarket = 123456789132n;
console.log(typeof(stockmarket));






// for stack 

let name1 = "nana";
let name2 = name1;
name2 = "abhiii"
console.log(name1);
console.log(name2);

//for heap

let details ={
    name :"abhijit",
    address:"vadgaon rasai"
}

let nameof = details.name;

nameofuser = nameof;

console.log(nameof);
console.log(nameofuser);


