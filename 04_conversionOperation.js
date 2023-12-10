//conversion  


let age="7885";
//here we do conversion of one datatype to another datatype
console.log(typeof(age))
let vauleInNumber = Number(age);//we do conversion like this 
console.log(typeof(vauleInNumber))

let str="78hu";
console.log(str);
console.log(typeof str);
let InNum=Number(str);//here this value is not to be converted totally into the number that's why it is stored as NaN
console.log(InNum)
console.log(typeof InNum)

let bool=true;
console.log(bool);
console.log(typeof bool)
let boolInNum=Number(bool);
console.log(boolInNum);
console.log(typeof(boolInNum));

let Nul=null;
console.log(Nul);
console.log(typeof Nul)
let NilInNum=Number(Nul);
console.log(NilInNum)
console.log(NilInNum)

let un;//bydefault it contain an undefined value
console.log(un);
console.log(typeof un);
let unInNum=Number(un)
console.log(unInNum)
console.log(typeof unInNum);

//Note- if we convert a string like this "898" into number is totally converted
//but if we try to convert like this "786gh" into number convterted value obtain as NaN(not a number)
//if we convert a boolean value into number the corresponding value is obtained like 'true' as '1' and 'false' as '0'.
//if we convert a 'null' into Number then we obtain value as '0';
//if we try to convert a 'undefined value then the converted value obtaned as 'NaN'.


//Note-> in the same way if we are trying to convert some other datatype int another datatype as
let isLogin=1;
console.log(isLogin)
console.log(typeof(isLogin))

let isLoginInBool=Boolean(isLogin)
console.log(isLoginInBool)
console.log(typeof isLoginInBool);

//*********************Opertaions***************** */
//in this we have many opertaions like arithetic operations, concatination and many more
let num=9;
let negNum=-num;
console.log(negNum)

//like other programming arithmetic operation works as work in another language
console.log(5 + 7)//addition
console.log(5 - 7)//substraction
console.log(5 * 7)//multiplication
console.log(5 / 7)//division
console.log(5 ** 7)//exponent
console.log(5 % 7)//modulo

//concatenate two or more string
let str1="Rajneesh ";
let str2="Anshu"
console.log(str1+str2)

console.log("1" + 2)//first string come so whole can be converted into string
console.log(1 + "2");//here after one a string come to next all to be consider as string
console.log("1" + 2 + 2)//here all is treated as string 
console.log(1 + 2+ "5");//here only 5 is consider as string

console.log(+true)//it gives 1 i.e boolean is converted into number
console.log(+" ")//it gives 0 because of the conversion into number
