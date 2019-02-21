






// var i = +prompt("Enter the  no");
// var j=10
// if(i===1){
// while(j>=0 ){

// console.log([j]);
// j--;

// }
// }
// else{
//     alert("Nothing match");
// }


// var names = ["hassan","habib","tahir","ali","saad"];
// let i =0;
// do{

//     console.log(names[i])
// i++
// }
// while(i<names.length);

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//modern functions in javaScript
//includes
// endsWith
// repeat()
//replace("string","replace with its")
//   /string/g replace globaly;every string replace with it;
//gi means that  change  golbaly evey words  it becomes case censitivity;
//trim();




// var  str ="i have always been fan of pizza though pizza is not a local dish but pizza has gained so much popularity in here";
// var z = prompt("Enter  the dish")
// var x =str.replace(/pizza/gi,z);
// console.log(x);



// let nDish =prompt("Enter the dish")
// var  data ="i have always been fan of pizza. Though pizza is not a local dish but pizza has gained so much popularity in here";
// // console.log(data)
//  var fSentence=data.indexOf("pizza");  
//   let s=data.slice(0,fSentence)+nDish; 
// console.log(s);
//   let secondSentence = data.slice(fSentence+5)
//   // console.log(secondSentence);
// var secondindex=secondSentence.indexOf("pizza");  
// var s3=secondSentence.slice(0,secondindex)+nDish
//   console.log(s3);

//     let thirdSentence = secondSentence.slice(secondindex+5);
//   let s4 =thirdSentence.indexOf("pizza");
//   let s5=thirdSentence.slice(0,s4)+nDish;
//   console.log(s5); 

// let fourthSentence = thirdSentence.slice(s4+5);
//   console.log( s+s3+s5+fourthSentence);



// var input=prompt("Enter the name");
// var string = "..waqas live is fsd .waqas he is very good person.";
// var  first = string.indexOf("waqas");
// var stringpic = string.slice(0,first)+input;
// console.log(stringpic);
// var secondStirng =  string.slice(first+5);
// var seconindex =  secondStirng.indexOf("waqas");
// var thirdPic= secondStirng.slice(0,seconindex)+input;
// console.log(thirdPic);













// let data = prompt("enter the string");
// for(var i in data){
//     let m = data.slice(+i, +i + 2);
//     if(m.indexOf("  ")!==-1){
//         console.log(m);
//         console.log("dblae")
//     }
// }


// var put = prompt("enter the  Name");
// let string = "hi am hassan habib tahir.So the  hassan lives in chiniot.hassan is very good person";
// var firstPart = string.indexOf("hassan");
// var getFirstString = string.slice(0,firstPart)+put;
// console.log(getFirstString);
// var secondString =string.slice(firstPart+6);
// var secondPart = secondString.indexOf("hassan");
// var getSecondStringReplace=secondString.slice(0,secondPart)+put;
// console.log(getSecondStringReplace);
// var thirdPart = secondString.slice(secondPart+6);
// var thirdIndex= thirdPart.indexOf("hassan");
// var thirdString=thirdPart.slice(0,thirdIndex)+put;
// console.log(thirdString);
// var fourthSentence = thirdPart.slice(thirdIndex+6);
// console.log(fourthSentence);


//second method
var put1=prompt("Enter your name!");
// let stringFirst = "hi am hassan habib tahir.So the  hassan lives in chiniot. hassan is very good person. hassan";
// var  stringFirst ="i have always been fan of pizza though pizza is not a local dish but pizza has gained so much popularity in here";

// let newArry= stringFirst.split(" ");

// let inedx= newArry.indexOf("hassan");
// for(var i=0;i<newArry.length;i++){
//     if(newArry[i]=="pizza"){
    
//       newArry[i] = put1

//     }


// }
// let string = '';
// for(let i = 0; i<newArry.length; i++){
//     string = string+' '+ newArry[i]

// }
// console.log(string);



//third method
//  var put1=prompt("Enter your name!");
// let stringFirst = "hi am hassan habib tahir.So the  hassan lives in chiniot. hassan is very good person";
//   let e =0;
//   while(stringFirst.indexOf("hassan"!=-1)){

// let b = stringFirst.indexOf("hassan");
// let a = stringFirst.slice(b+5);
// let d= stringFirst.slice(b+a)
// stringFirst=d;
//   } 
//   console.log(stringFirst);
  






//array.join();
// console.log(stringFirst.length)

// let str = stringFirst.replace(/hassan/g,'Moeez')
// console.log(str)


// let arr =  stringFirst.split(' ');

// for(let i=0;i<arr.length;i++){

//     if(arr[i] == 'hassan'){
//         arr[i] = put1
//     }
// }
// let string = '';
// for(let i = 0; i<arr.length; i++){
//     string = string+' '+ arr[i]
// }
// console.log(arr); 
// console.log(string); 
  






























