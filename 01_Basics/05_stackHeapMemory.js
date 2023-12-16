//this program os to understand the various concept of the memory used in the program 
//1.stack memory - stack memory is used by the primitive data type 
//in the stack memory a copy instead of refernce or orginal value of variable is passed to do operation on it so if we change in the value the change not happened in tha original value
//for example

let myName="Rajneesh verma";

let Name=myName;
Name="Anshu verma";


console.log(myName)
console.log(Name)//now here we can see that the name changes on changing the name variable but there is no effect on myName which is already assign to the Name means a copy of myName is passed to the Name variable



//2. heap memory - it is the memory in which a reference or the original value is passed to another variable unlike the stack.
//means if we change in value of the another variable it will also affect in the variable which is passed
//heap memory is usually used by the Non - primitive data types(Array and Objects)

//for example
let Rajneesh={
    Name:"Rajneesh verma",
    Mo_No:8756699455
}

//now if we assign the value of myObject to another object then the refernce of myObject passed to another object instead of copy because of it uses the heap memory.
console.log(Rajneesh)
let Anshu=Rajneesh
console.log(Anshu)

//updating the detail of Anshu
Anshu.Name="Anshu Saini"
Anshu.Mo_No=7983247879

//we can access the value of the object by the (.) operator

console.log(Anshu)
console.log(Rajneesh)
//now here we see that if we update the value of the Anshu object then the the value of the Rajneesh object also get changed because of both the objects reference same

