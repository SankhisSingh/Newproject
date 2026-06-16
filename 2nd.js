"use strict"; //treat all js as newer version
//alert(3+3)
let name= "sankhi singh";
console.log(name);
name= "sankhi singh 2.0";
console.log(name);
let number= 34;
console.log(typeof number);
let boolean= true;
console.log(typeof boolean);
let nullVar= null;
console.log(typeof nullVar);    
let undefinedVar;   
let symbol= Symbol("This is a symbol");
console.log(typeof symbol);
let bigInt= 1234567890123456789012345678901234567890n;
console.log(typeof bigInt);
let object= {
    name: "sankhi singh",
    age: 25,
}
let array= [1,2,3,4,5];
console.log(typeof object);
console.log(typeof array);
let func= function(){
    console.log("This is a function");
}
let arrowFunc= () => {
    console.log("This is an arrow function");
}
console.log(typeof func);
console.log(typeof arrowFunc);
let date= new Date();
console.log(typeof date);
let regex= /ab+c/;
console.log(typeof regex);
let map= new Map();
console.log(typeof map);
let set= new Set();
console.log(typeof set);
let weakMap= new WeakMap();
console.log(typeof weakMap);
let weakSet= new WeakSet();
console.log(typeof weakSet);
let promise= new Promise((resolve, reject) => {
    resolve("This is a promise");
});
console.log(typeof promise);