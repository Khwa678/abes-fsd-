const student ={
    name:"john",
    branch:"cs",
    phoneno:{
        phoneno1:345345435,
        phoneno2:3456676778,

    },
    address:{
        city:"ghaziabad",
        state:"up",
        pincode:201001
    }
}
console.log("before modification");
console.log(student);
console.log("after modification");

const newStudent=Object.assign({},student );
console.log(newStudent);
newStudent.name="rahuliya";
newStudent.phoneno.phoneno1=9876543210;
newStudent.address.city="noida";
console.log(newStudent);
console.log(student);




