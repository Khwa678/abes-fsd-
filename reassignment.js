var a =34;
var a=354;
a=56;
console.log(s);
let b =34;
 b=56;//generate error in declaration again .but we can reassign again 

console.log(b);
const s=90;
// s=45; //generate error in reassignment
console.log(s);
//we can not redeclare the let 
//let is block scope.
//const is global scope in nature.

//var is function scope in nature.

let boolVAl =false;
if(!boolVAl)
{
    let b=90;
    console.log(b);
}
console.log(b);
//console.log(b); //error
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(s));
console.log(typeof(boolVAl));


let strTonum ="34"-34;
console.log(strTonum);
console.log(typeof(strTonum));

let numTostr=34+"34";
console.log(numTostr);
console.log(typeof(numTostr));

let a ="34"+34+(-32)+"35";
console.log(a);
console.log(typeof(a));

function fun(){
var a=b=10;
console.log(a);
console.log(b);
}
fun();
console,log(b);// 10
console.log(a);//undefined 

function f()

{
    a=b=20;
    console.log(a);
    console.log(b);
}
f();
console.log(a);
console.log(b);
//in company type script is used .


