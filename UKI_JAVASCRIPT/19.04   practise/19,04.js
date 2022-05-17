alert("Hello world");
console.log("Hello World");
console.warn("AATHAV");
console.error("AATHAV");

//let,var,const
let age = 21;
console.log(age);
let score = 10;
console.log(score)


//data types (string,numbers,null,undefined,boolian)
const name = "AATHAV";
const age1 = 21;
const rating = 4.5;
const iscool = true;
const x = null;
let z;
console.log(iscool);
console.log(typeof name);
console.log(typeof age1);
console.log(typeof rating);
 

//concatenation
console.log("my name is " + name + "i am " + age1 + "years old");

const s = "samsung, apple, redmi";
console.log(s.length)
document.write(s.toUpperCase() + "<br>");
document.write(s.toLowerCase() + "<br>");
document.write(s.substring(0,9).toUpperCase() + "<br>");
console.log(s.split(', '));

/* this 
is
multi 
line 
comment*/

//arrays

const numbers = Array("1,2,3,4,5,6");
console.log(numbers);
const fruits = ["apples","orange","banana"];
console.log(fruits); 
fruits[1] = "grapes";
fruits.push("pine apple");
fruits.pop();
fruits.unshift("strawberries");
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("banana"));
console.log(fruits);

//object
const person = {
    firstName: "AATHAV",
    lastName: "sun",
    age2: 21,
    address: {
        city:"jaffna",
        village:["kopay","neervely"]
    } 
}
console.log(person.address.village[1]);
person.gmail = "aathavan4580@gmail.com";
document.write(person.gmail + "<br>");

function add(x,y){
    sum = x + y;
    return sum;
}
let a = add(5,2);
document.write(a + "<br>");
function aathav(b,c) {
    sum = b + c;
    return sum;
}
document.write(add(10,15) + "<br>");


 
function aathav(x,y) {sum = x + y;
    return sum;
}
document.write(aathav(5,6))


function myfunction() {
    document.getElementById("demo").innerHTML="buttonclicked"
}

function my() {
    document.getElementById("dem").innerHTML="buttonclicked"
}



function myf() {
    document.getElementById("de").innerHTML="buttonclicked"
}

function myfu() {
    document.getElementById("me").innerHTML="buttonclicked"
}


document.getElementById("my").addEventListener("click",myfun)
function myfun(){
   alert()
}



document.getElementById("mi").onkeypress = function() {myfun()}

function myfun(){
    document.getElementById("mi").innerHTML="buttonclicked"
}
