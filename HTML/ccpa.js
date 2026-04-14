

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



//function getData(dataId){
//    console.log(dataId);
//    setTimeout(()=>{
//        console.log("Data fetched");
//    },2000)
//}

//promises

/***
 Promise is for "eventual" completion of take. It is an
 object in JS
 it is a solution to callback hell.

 sysntax:
 let promise = new Promise(function(resolve,reject){}
 function with 2 handlers
 promise:
 1.pending -> the result is undefined
 2.fulfilled -> the result is a value(Resolved)
 3.rejected -> the result is an error object 
 */


 //let promise = new Promise((resolve,reject)=>{
 //   console.log("Promise is pending");
 //   //resolve(123);
 //   reject("Some error");
 //})

/**function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000)
    })
}*/


//for fullfilled we use promise.then((res)=>{})
    //for rejected we use promise.catch((err)=>{})

//const getPromise=()=>{
//    return new Promise((resolve,reject)=>{
//        console.log("promise");
//        reject("error");
//    });
//};
//let promise = getPromise();
//promise.then((res)=>{
//    console.log("resolved",res);
//});
//promise.catch((err)=>{
//    console.log("rejected",err);
//});


//promise chaining

//function asyncFunc(dataId){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            console.log("Async function", dataId);
//            resolve("success");
//        },5000);
//    });
//};
//
/**let promise = asyncFunc();
asyncFunc(123).then((res)=>{
    console.log("resolved",res);
    asyncFunc(2).then(()=>{
        console.log("second async function");
    })
});
promise.catch((err)=>{
    console.log("rejected",err);
})**/

//asyncFunc(1)
//   .then((res)=>{
//    return asyncFunc(2);
//   })
//   .then((res)=>{
//    return asyncFunc(3);
//   })
//   .then((res)=>{
//    console.log("All async functions completed");
//   });


//Async-Await



//Async function is always return a promise

/**async function hello(){
    console.log("hello");
}
**/


//await pauses the execution of its surrounding async function until the promise is settled
/**async function getData(){
    await api();
    await api();
}
function api(){
    return new Promise((resolve,reject)=>{
        console.log("API called");
        setTimeout(()=>{
            resolve("API response");
        },5000);
    });
}**/


//async-await 


function getData(dataId){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            console.log("called");
            resolve("data",dataId);
        },1000);
    });
}

(async function getAlldata(){
    await getData(1);
    await getData(2);
    await getData(3);
    console.log("All data fetched");
}());  //to define like this we use IIFE to call the function

//uses IIFE immediately invoked function expression