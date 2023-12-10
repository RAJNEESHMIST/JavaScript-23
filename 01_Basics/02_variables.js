//we can declare varibel in js by using the keywords like ->
//1.const - we can declare variable by using const keyword which denote the variable is constant can not be changed 
const accountId=785295;
console.log("Account Id : "+accountId);
// accountId=7854;//this line through an error because of this variable declare as const
// console.log(accountId);

//2.let- the most recomended method is used to to decalre the variable using the let keyword because of the scope problem with the var keyword

let accountEmail="verma@rajneesh.com";
console.log("Account Mail : "+accountEmail)
accountEmail="anshu@main.com";
console.log("Account Mail : "+accountEmail)

//variable decalare using the let keyword can be mutable as required

var cusName="Rajneesh verma";
console.log("Name : "+cusName)
cusName="Anshu Saini";
console.log("Name : "+cusName)
//variable that declare by using the keyword var can also be mutable

//Note:- we prefer let to decalre the variable instead of using the var keyword

cityName="Ayodhya";
console.log("City : "+ cityName);
cityName="Chandigarh";
console.log("City : "+ cityName);
//variable can also be decalre without using none of the keyword but it is not a good way to decalre a varible

let accountState;//if we only define the variable then bydefault the undefined value stored in that variable
console.log("Account State : "+accountState)

//console.log() ->this function is used to print something of print the value of the variable

//Note-> console.table()- function is used to print the value multiple variable in the tabular form for example
console.log();//this will also print the blank line
console.table([cusName,accountId,accountEmail,accountState]);
console.table([])//this will print the empty table with index column and no index