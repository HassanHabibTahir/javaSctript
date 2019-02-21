
//imperative program
//functional programing
//every function
// filter//gives array

// find()// return no array

//map//gives array
// let nums = [ 2,3,4,5,6,7,7];
// let num =nums.map(function(i){
// return i*6;

// });
// console.log(num);





//reduce function//gives one value of calculation 
// var num=[1,2,3,4,4,5,6,7,8];
// let toTtal =num.reduce(function(sum,next){
//     return sum+next;


// }); 
// console.log(toTtal);


// function  reduceFunction(sum,next){
//     return sum*next;
// }
// var total = num.reduce(reduceFunction);


// console.log(total);




// forEach// no return enything 
//  var num=[1,2,3,4,4,5,6,7,8];
// num.forEach(function(item,ind){

// console.log(item,ind);

// });

// var num=[1,2,3,4,4,5,6,7,8];


// function sqr(arr){
// return arr*arr;
// }


// num.forEach(function(item){

//     console.log(sqr(item))




//     var x = Math.pow(item,ind)
// console.log(x);

// var x = Math.sqrt(item);




//});












// let vides = "chima hassan nice ali";
// var videos = vides.split(' ');


// let displayvideo = videos.filter(function (m) {


//     if (m =="ali") {
//         return true;
//     }
// });
// console.log(displayvideo);



function types2(newvalue) {
    
    let videos = ["lecture", "movie", "cartoon", "cartoon", "lectre"];
    let displayvideo = videos.filter(function (video) {
        
        
        if (video.charAt(0) == newvalue) {
            return true;
        }
    });
    console.log(displayvideo);
}

var type1 = prompt("Enter the name")
 var z=types2(type1);
console.log(z);


// finde function also gives no array  ..it gives value who you findes
// function types2(newvalue) {
    
//     let fruirs = ["apple", "banana", "carrot", "cartoon", "banana2"];
//     let displayvideo = fruirs.find(function (fruit) {
        
        
//         if (fruit.charAt(0) == newvalue) {
//             return true;
//         }
//     });
//      return  displayvideo == undefined ? "not available":"true";
// }

// var type1 = prompt("Enter the name")
//   var  c= types2(type1);
// console.log(c);



// let results = ['p','p','f','f'];

// if(isEveryPassed()){
//     console.log("kia bat hai");
// }
// else{

//     console.log("mehnt ks zarort hai")
// }


// function isEveryPassed(){
// //every function gives the 
//     return results.every(function(result){

//     return result=='p';
// });



// }




// let results = ['p','p','f','f'];
  


// results.sort(function(){
    
// });


//assignment   more value passed  in fillter  and check the array value  fined  
// return


























































































// var array=[];

// for(var i=0;i<=5;i++){

//     array[i]=prompt("entrr the no"   )
// }


// function calculateAge(array){


// for(var i=0;i<5;i++){
//     console.log(array[i]*5);
// }

// }
// calculateAge(array);







































