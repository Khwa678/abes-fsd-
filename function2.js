function isODD(a){
    if( a%2!==0)
    {
        return false;

    }
    else 
    {
        return true;
    }


}
function isODDUSING(a)
{
    return a%2!==0?false:true;
}
console.log(isODD(5));
console.log(isODD(4));
console.log(isODDUSING(5));
console.log(isODDUSING(4));

//function as expression ::
let funAsExpression=function isODD(){

    return a%2!==0?"value is odd ":"value is even ";
}
console.log(funAsExpression(5));
console.log(funAsExpression(4));
//function as expression without name ::

console.log("invoketion  using the expression name::"+isODD(8));
//arrow function ::
const arrowFunction=(a)=>{
    return a%2!==0?"value is odd ":"value is even ";

}
console.log(arrowFunction(5));
console.log(arrowFunction(4));
const arrowFunction2=(a)=>  a%2!==0?"value is odd ":"value is even ";
console.log(arrowFunction2(5));
console.log(arrowFunction2(4));

//iiffe function (immediately invoked function expression) ::
(function(a){
    console.log("iiffe function::"+(a%2!==0?"value is odd ":"value is even "));
})(8);


