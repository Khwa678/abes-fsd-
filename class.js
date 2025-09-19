class student {
    constructor(name,branch,phoneno,address)
    {
        this.name =name;
        this.branch =branch;
        this.phoneno=phoneno;
        this.address=address;

    }

}

const student1=new Student("john","cs",{phoneno1:345345435,phoneno2:3456676778},{city:"ghaziabad",state:"up",pincode:201001});
console.log(student1);
const student2=new Student("rahul","it",{phoneno1:9876543210,phoneno2:8765432109},{city:"noida",state:"up",pincode:201301});
console.log(student2);

