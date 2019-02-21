
//New idea collect;
//lecture No.1
//parseInt idea  
//parseFloat idea
// replace(/ write the value you wann to change/g,"")
// Turthy // without 0 zero all nombers are the truthy part ,all symbls and alphabets
// Falsy // null, // "" empty string//NaN(not a number);
//conditions
//operators
//variables file
//Lecture No .2
// switch 
// for
// for in 
// let name of variable name  //of take value;
// let name in variable name  //in take index;
//aray 
//spread and reset function



// var marks= +prompt("Enter the NO");
// let garade = null;
// let attandence ="Ok";
// if(!marks){
//     alert("NO Number")
// }
// else{
    
// if(marks>=80){
//     garade = 'A+';
// alert(garade);
// console.log("A+");
// }
// else if(marks>=70){
// garade = 'A';
// console.log(garade);
// alert(garade);
// }

// else if(marks>=60 && marks<=70){
//     garade = 'B';
//     console.log(garade);
//     alert(garade);
//     }
    
// else if(marks>=50 && marks<=60){
//     garade = 'C';
//     console.log(garade);
//     alert(garade);
//     }
//     else if(attandence!="OK"){
//         alert("new");
//         }
//     else{
//         garade="Fail";
//         console.log(garade);
//         alert(garade);
//     }


// }
// btn.onclick=()=>{
//     document.getElementById("myText").value = "Johnny Bravo";
// }

//Lecture 2


// for(var i=1;i<4;i++){
//     document.body.innerHTML +="<img src='./img/"+i+".jpg'/ width='200'>"
// }


// var str = "pakistan";
// for(var i=0;i<str.length; i++){
//     console.log(str[i])
// document.body.innerHTML +=   `<p >${str[i]}</p>` ;
// }

// var str ="pakistan";
// for(let item of str){
// // if(str[item]=='i')
// // {
//     // break;
// // }
//     console.log(item)
// }


// var str ="pakistan";
// for(let item of str){
// if(item=='i')
// {
//     break;
// }
//     console.log(item)
// }

// var a = 5;
// var b = 10;
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);         
// "Fifteen is 15 and
// not 20."
//Apostrophe




// new loop in javaScript intoduce




// function checkValue(name,age, score){

// var mathNo=+prompt("enter the Mth No")

// if(mathNo>=score||age<=30){
//     console.log( name+"your are selected"+mathNo)
// }else {
//     console.log("you are Failed")
// }




// }

// checkValue("ali",19,4534);


// lectue no 4


var array = ["ahmad","20",true,[1,2,3]]

function isArray(args){
    return args.push != undefined;
}

for( let i=0;i<array.length;i++){

    
    //  array[0]//ahmad
    //  array[1]//20
    //  array[3]//array 

     if(isArray(array[i])){
        for(let j=0;j<array[i].length;j++){
            console.log(array[i][j])
        }
console.log(array[i])
    }}

// var a =['a','b','c','d','e','f','g','h'];
// var x=a.slice(3,7);
// console.log(x);

// var b =['a','b','c','d','e','f','g','h'];
// var y=a.slice(2,8);
// console.log(y);


// var c =['a','b','c','d','e','f','g','h'];
// var z=a.slice(1,2);
// console.log(z);

// var w =['a','b','c','d','e','f','g','h'];
// var m=w.splice(3,1);
// console.log(m);

// var fruits = ["apple","mango","orange","banana",['a','b','c','d','e','f']];
// for(let i=0;i<fruits.length; i++){
//     console.log(fruits[i])

// }





//Assignmetn
// var array=["hassan","sa","ali"];
// var x= +prompt(" value 1 to add the  no||value 2 to remove the value ||value 3 to add again  ");
// switch(x){
// case 1:
// // if(x==1){
//     var input= prompt("Enter the value");
//     array.push(input);
   
// // }

// console.log(array);
// break;
// case 2:
// // if (x===2) {
    
//     var w = +prompt("enter the slice value");
//        array.splice(w,1)


// // } 
// console.log(array);
// break;
// case 3:
// // if(x===3){
//     var input2= prompt("  index  of add the  value");
//     var input3= prompt("Enter  the value")
//       array.splice(input2,0,input3)
     
// // }
// console.log(array);

// break;
// default:


// }




//spread function
// var hassan=["ali","saad","kaleem","naeem","kreem"];
// var ali=["naeem","alisaad","naeem"];
// var x=[...hassan,"many",...ali]
// console.log(x);


// var array=['a','b','c','d',[1,2,3,4,5,6]];
// array[4].map((i)=>{
// document.write(i);

// })



// var hassan = [1,2,3,4,5,6,7,8,9,10];

// if( hassan.push!=undefined){
// for(var i=0;i<hassan.length;i++){

//     console.log(hassan[i]);
// }
// }








































