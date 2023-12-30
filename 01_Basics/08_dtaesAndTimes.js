//javaScript ia have a pain point regarding to date and time
//dates

let myDate=new Date()//create a instance of the date object which dispaly the current date and time 
console.log(myDate);//this is less readable 

//changing into string
console.log(myDate.toString());//now this is more readible than above one
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toTimeString())

console.log(typeof myDate)//object

//we can decalare our own date 
//Note -> months starts from 0 in javascript
let myCreatedDate=new Date(2005,2,17);
console.log(myCreatedDate.toLocaleDateString());

let newDate=new Date();//this create a current date 
console.log(newDate);
console.log(newDate.getMonth());//we can access day month and like such informations 

//Note -> Months start from the 0 s that why the above line print 11 in december

console.log(newDate.getFullYear());//this print the year like 2023
console.log(newDate.getDate());//this will print the current date like 30
console.log(newDate.getDay());//this will print the day number like 6 for saturday
// console.log(newDate.setDate(2024));// not understanding the use of this

//most useful method for date and time
console.log(newDate.toLocaleString('default',{
    weekday:"long"//this will print the name of the day whole as per as today Saturday
}))


