//this program is to understand some modern concept of using of the string in js

const name="Rajneesh "
const luckyNum=299
//in old syntyax we join or conctenate the string using the + opertaor as
console.log(name+luckyNum+" Anshu")//you an concatenate as many as required

//in the modern way we use bacticks(`....`) to concatenate string that is known as string intepulation
console.log(`Hello my name is ${name} and my lucky number is ${luckyNum}.`)//this is the new syntax of using string 

//we can also define the string as 
const UniversityName=new String("Chandigarh University");//basically it is a object whose key start from zero and length one less than the size of the string 
// const UniversityName=new String("Chandigarh University")
console.log(UniversityName)
console.log(UniversityName[0]);//this way we can acess each value by their key
// console.log(UniversityName[0,2])//if we do like this then it consider last one as a key and return the last key and return its value
console.log(__proto__)//prototype means many method that is used in string manipulation like change in uppercase and many more

//we can aslo find the length of the string as by the length as
console.log(UniversityName.length)//ot gives the length of the string
//we can also use the prototype in the same way as
console.log(UniversityName.toUpperCase())//to change whole string into upper case letter
//string have many predefined methods that we can use directly some are as follows
console.log(UniversityName.charAt(8))//this tells the character at the position   8
console.log(UniversityName.indexOf('r'));
