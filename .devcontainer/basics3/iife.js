//Immediately invoked function expression

(function xyz (addre){
    //we can say this function named iife due to the this function has a name 
    console.log(`this is my village ${addre}`);
    
})("kuldharan");
//() is used to call the function 
//this is the example of iife we use this expression for to remove the global scope pollution for that we use iife 

(newfunc = () => {
    console.log(`nothing special than that`);
    
})();

//by adding the (;) to the function we can break the iife expression...

// we are directly able to pass the value in it by just giving the numbers in it... like

((name)=> {
    console.log(`this is my name ${name}`);
    
})("abhijit")// this is giving error due to the ; we are not pass the semicolun to the preveious function t
// that's why that are giving a error 
