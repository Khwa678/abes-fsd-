//let and const 
//let -block scope 
//var -error generate if not defined shows the undefined but it should show the error and also reinitialisation is also possible 
//const -global scope and reinitialisation is not possible
//const =constant value 
//arrow function =no access before initialisation 
//use after the initialization only .
//default parameter ::
//
//
const greet =(first,middle,last=" ")=>{  //this is called as the default parameter because we are getting the undefined written on the console .
    return` hello${first}${middle}${last}`;

}

console.log(greet("sara","alia","khoana"));
console.log(greet("kiara"," ","avantika"));
console.log(greet("kiara"));

//class 

