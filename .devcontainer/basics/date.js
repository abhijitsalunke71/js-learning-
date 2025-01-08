 let CuurentDate = new Date();
// console.log(CuurentDate);

// console.log(CuurentDate.toString());
// console.log(CuurentDate.toDateString());
// console.log(CuurentDate.toLocaleDateString());


let createdDate = new Date(2024,12,2);
console.log(createdDate.toDateString());

let Pred = new Date("2025-1-12")
console.log(Pred);

let timestamp = Date.now();
console.log(Math.floor(timestamp/1000));


let newDate = new Date();

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());

console.log(`the date is ${CuurentDate.toLocaleDateString()} and the day is ${CuurentDate.getDay()}`);




