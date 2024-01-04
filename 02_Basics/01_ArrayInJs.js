// Array in javascript is slightly different from another language in js array we can also store the different types of element in single array

const arr=[0,1,2,3,4,5]
console.log(arr);

//ulike other programming array in js can be resizable 

//different types of array declaration
// const arr2=new Array("Rajneesh","Tushar","Laxmi");
// const name=["Rajneesh","Anshu","Ruchi","Sangam"]
// console.log(arr2)
// console.log(name)

//array methods
arr.push(8)
arr.push(6)
//push() -> this method is used to add new element in the array
console.log(arr)

arr.pop()
//this method is used to delete the last element of an array
console.log(arr)

arr.unshift(7)
//this method add a new element in the begining of an array after shifting all the element to right
console.log(arr)

arr.shift()//-this method delete element from the starting
console.log(arr)

console.log(arr.includes(6))//this check whether the value present or not
console.log(arr.includes(8))

console.log(arr.indexOf(8))//this method tell the index of an element 

const newArr=arr.join()//this change the type of array into string
console.log(arr)
console.log(newArr)
console.log(typeof(arr))//array is type object

console.log(typeof(newArr))//and this object type converted into string using the join()

//slice ,splice

console.log("A ",arr)
console.log(arr.slice(1,5))//slice()-> function is used to print the section of an array

console.log("B ",arr)

const newa=arr.splice(1,4);//splic() -> function remove the specific part of the array from the orginal array
console.log("C ",arr)
console.log(newa)

//most important between the slice and splice method of the array from the interview point of view
