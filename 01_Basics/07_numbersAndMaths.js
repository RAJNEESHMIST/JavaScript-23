//two ways we can define a number as we know that javascript is dynamically typed language means we can change the datatype of the variable at run time
//so we can declare a number simply decalaring a variable by using the variable name as      
const score=4800;
console.log(score)//it print the score which is number 

// console.log(score.toString());
// console.log(score.toString().length);
//we can also use this funtionality by declaring like this

//but we also define number which only store number value and provide some predefined functionality
const run=new Number(656);
console.log(run)//[Number: 656] return like this with some predefined functionality

//Note -> we can use these methods even we decalre either of both methods but recomed to decalre second one
console.log(run.toString())//it change the number value into the string value
console.log(run.toFixed(2))//we can take precisious value as we want means how many decimal place to show the number for example in this we take precision value upto two digit

//after changing the value of the number into string we can also able to use the string methods on it as
console.log(run.toString().length);//given the number of character in the string

const otherNum=1123.8966;
console.log(otherNum.toPrecision(3));//this method roundoff the value upto n digit bsed on parameter passed by u
console.log(otherNum.toPrecision(4));

const num=10000000
//sometimnes we have confusion to count the number of zeros
// javascript provides some extra funtionality to put the comma between zeros 
console.log(num.toLocaleString())//by default it put the commas like the indian style but we can do another style like in us style
console.log(num.toLocaleString('en-US'))//it put the commas in us style


//+++++++++++++++++Maths+++++++++++++++++++++++
//Maths provide many default mathmatics value of the maths in javascript
console.log(Math)//it tell many predifined values and functions when we do on browser console then these functionality are visible to us

//here we see some functions and their working
console.log(Math.abs(-8))//abs() -> is used to find the absolute value of given data
console.log(Math.PI)//we can directly access the value of pi
console.log(Math.sqrt(86))//we can easily find the square root of the element
console.log(Math.round(5.502))//this function round of the decimal value into whole

//we have also ceil and floor function which works like the ceiling and floor function in maths as
console.log(Math.ceil(5.89));//6 ->this resturns always the uper rounded value
console.log(Math.floor(5.89))//5 -> this returns the lower rounded value

//we have some funtcion to find the min and max vaule from the given array
console.log(Math.min(4,6,2,6,8,9))//2 -> return 2 because it is minimus value in the given array
console.log(Math.max(4,6,2,6,8,9))// reverse of he mi funtion





