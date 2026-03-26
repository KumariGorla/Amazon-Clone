

//function hello(){
//    console.log("hello");
//}
//setTimeout(hello,2000)//timeout;2 sec = 2000 milliseconds

//console.log("one");
//console.log("two");
//setTimeout(()=>{
//    console.log("hello");
//},2000);
//console.log("three");
//console.log("four");


//callback function-it is a function passed as an 
//function sum(a,b){
//    console.log(a+b);
//}
//function calculator(a,b,sumCallback){
//    sumCallback(a,b);
//}
////calculator(10,20,sum);
//calculator(1,2,(a,b)=>{
//    console.log(a+b);
//})


//const hello =()=>{
//    console.log("hello");
//}
//setTimeout(hello,2000);


//callback hell - when we have multiple nested callback functions, it is called callback hell. It makes code difficult to read and maintain. It is also known as pyramid of doom.

//callback hell example

//let age = 19;
//if(age>=18){
//    if(age>=60){
//        console.log("Senior");
//    }else{
//        console.log("Adult");
//    }
//
//}else{
//    console.log("child");
//}



function getData(dataId){
    console.log(dataId);
    setTimeout(()=>{
        console.log("Data fetched");
    },2000)
}


