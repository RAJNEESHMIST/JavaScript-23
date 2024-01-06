//this program tells us basic understaning of object in js
// there are two way to declare object -> 1st is like literal and 2nd is like constructor
//singleton -> when we create object using constructor then only one reference created
//when we made object like literal then there is no singleton made


//singleton 
// Object.create()


const mySym=Symbol("Key1")
//literals
const JsUser={
"Name":"Rajneesh ",
"Uid":"23bcs80093",
// mySym:"MyKey 1",//this is not a correct syntax to add a symbol in the object as a key
[mySym]:"MyKey 1",//this is the correct way to add a symbol to an object
"college":"Chandigarh University",
email:"rajneeshv525@gmail.com",
number:8756699455
}

console.log(JsUser.Name)//we can access the element of the object using dot operator
//but also another way to acces that is also important
console.log(JsUser["Uid"])
console.log(JsUser["number"])
// console.log(JsUser.mySym)//an symbol as a key cannot be access using the dot operator
console.log(JsUser[mySym])
console.log(typeof[mySym])
// console.log(typeof JsUser.mySym)//this shows the type string that is not correct its correct type is symbol

//we can change the value of the a key in an object
JsUser.email="rajneesh2@verma.com"
console.log(JsUser)
//we can also freeze the object that means no further change cannot entertain for example
// Object.freeze(JsUser)
JsUser.number="9984520578"//this cannot through error but change can not be entertained
console.log(JsUser)

//we can also use function as a function like that
JsUser.greeting=function(){
    console.log("Hello Js User ")
}
JsUser.greetingTwo=function(){
    console.log(`Hello js user ,${this.Name}`)
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())

console.log(JsUser.greetingTwo())
