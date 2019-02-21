

// function findesFruits(f1,f2){
//     var  fruits = ["oranges","mango","lemon","bannana","apple","date","date","oranges","mango","cartoon"];
// return  fruits.filter(function(fruit){
// if(fruit.charAt(0)==f1 || fruit.charAt(0)==f2)
// {
//     return true;
// }
// })


// }
//  var x= findesFruits(prompt("enter the first fruite Name"),prompt("enter the second fruit name"))
// console.log(x);
// //for(var i=0)




// function matchValue(va){

// let fruits = ["oranges","mango","lemon","bannana","apple","date","date","oranges","mango","cartoon"];
// var x =   fruits.filter(function(fruit){
// if(fruit==va)
// {
//     return true;
// }
// })


// console.log(x);
// }
// matchValue(prompt("entere the fruite Name"));






// 20 date lecture
// dynamic parameter collect all element i narray ut us yse dfir rest operatuon;
//...namevarable
//  spread function use in it
// let t =0;
// // rest functionn
// function add(...num){


//   num.forEach(function(n){
//   t=t+n;
// })


// return t;

// // console.log(x);

// }
//  var x=add(4,5,6,77,);
//  console.log(x);

//functin use 

// function add(...num){
// var t=0

//   num.forEach((n)=>t=t+n)


// return t;

// // console.log(x);

// }
//  var x=add(4,5,6,77,);
//  console.log(x);



//  // spread functionn;
//  num = [1,2,3,4]
//  add(...num)

//   function add(a,b,c){
//       return a+b+c;
//  }
//   var x= add(...num)
//  console.log(x);

// Template Literal

// A more formal standardized way to include javaScript  in string

// var name1 = "hassan";
// var name2 = "habib";
// let fullName =  `my name is ${name1} my second Name ${name2}`
// console.log(fullName);

// flat function;


// let arg = [1,2,3,4,4,[2,3,4,4,5],45,[3,4,45,5,[2,3,4,5,7,8,9]]];
// console.log(arg);

//  var x= arg.flat(1);
//   console.log(x);

//   var y= arg.flat(2);
//   console.log(y);



//   var data = [1,2,3,4,5,6,7,8,];
//   let[a1,a2,,,,,,a3]=data;
// console.log([a1,a2,,,,,,a3])


// if name  input save string  and number than save number in input and if true and fase than chekbox produce


// function items(v){
// var array = ["name","img","text" ,"number"  ,"checkbox",true];
//  return  array.filter((item)=> {

//     if(item==v && item ==  "name") {
//         console.log(item);
//         document.body.innerHTML=`  <h3>My Name is </h3>   <h1>Hassan Habib Tahir</h1>`

// }


// else if(item==v && item ==  "img") {
//     console.log(item);
//     document.body.innerHTML=`  <h1>My Image</h1>   <img src="http://www.latestseotutorial.com/wp-content/uploads/2016/12/pc-wallpaper.png" alt=""  width="300" height = "300"  >   `;

// }
//  else if ( item==v  &&  item=="text") {
//     console.log(item);
//     document.body.innerHTML=` <h2>text input</h2> <input type="text" placeholder="ënter the name" >`;
// }

// else if ( item==v && item=="number") {
//     console.log(item);
//     document.body.innerHTML=`  <h2>number input</h2>  <input type="number"   placeholder="ënter the number"  />`;

// }


// else if (  v == "true" || v == "false") {
//     console.log(item);
//     document.body.innerHTML=`  <h2>CheckBox</h2>     <input type="checkbox"   />`;

// }


// });
// }
// items(prompt("enter   the value from this and check output 'name','img','text' ,'number' ,'checkbox' "))





let data = [11, 19, 12, 20, 29, 21, 39, 35, 33];
var data1 = data.sort();
//console.log(data1);
function Max() {

    var x = data1.slice(0, 2);
    console.log(x);
}
function Max2() {
    Max()
    y = data1.slice(4, 6);
    console.log(y);

}
function max3() {
    Max2()
    y = data1.slice(7, 9);

    console.log(y);
}
max3();











