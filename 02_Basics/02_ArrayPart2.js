//this program helps to do more understanding about array
const marvel_heros=["thor","Ironman","Spiderman"]
const dc_heros=["Flash","Batman","Superman"]

//if we puch 2nd array into the first one then it results an array of array like that we can see below
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])//accessing element of an array of array

//if we use concat() function then we merge two array
//concat() -> method return a new array which is made using two array as
// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

//we can also merge or we can say that store individually into a new array
const all_new_heros=[...dc_heros,...marvel_heros]//this is known as spread operator
console.log(all_new_heros)


const another=[1,2,[3,4,[5,6,7,8,9]]]//this is the multilevel depth array
console.log(another)
//we can merge these into a normal array using flat() opertion as
const usable_array=another.flat(Infinity)
console.log(usable_array)

//we can also change a string or another object in array object as
console.log(Array.isArray("Rajneesh"))//checking it is array or not
console.log(Array.isArray(["Rajneesh"]))

//we can also change it as an array like this
console.log(Array.from("Rajneesh"))

let num1=100
let num2=200
let num3=300

console.log(Array.of(num1,num2,num3))//this is the another way to create an array using existing value
