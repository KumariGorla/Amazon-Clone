const student = {
    fullName :"Kumari Yadav",
    marks:92,
    printMarks:function(){
        console.log("marks"+this.marks);
    },

}

/***
 Prototype
 A js object is an entity having state and behaviour(properties and methods) 
 
 js objects have a special prototype called prototype
 
 we can set prototype using __proto__
 
 in java array is internally is an object
 prototype is an reference to an object***/



const employee={
    clacTax(){
        console.log("Tax is 10%");
    },
    //calcTax2:function(){
    //    console.log("Tax is 20%");
    //}
};


const Sravani={
    salary:50000,
}
const Srav={
    salary:50000,
}
const Sri={
    salary:50000,
}
const Shyam={
    salary:50000,
}

Sravani.__proto__=employee;
Srav.__proto__=employee;
Sri.__proto__=employee;
Shyam.__proto__=employee;   


/***
 Classes in JS

 Class is a program-code template for creating objects.
 Those objects will have some state(variables)&some behaviour(functions) inside it

 ***/


 class toyoyaCar{
    constructor(brand,mileage){
        console.log("Creating a new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");

    }
    stop(){
        console.log("Stop");
    }
    setBrand(brand){
        this.brand = brand;
        
    }
 }
 let fortuner = new toyoyaCar("Roles roys",12);//constructor
 console.log(fortuner);
 //fortuner.setBrand("ford",12);
 let ford = new toyoyaCar();

/***
 Inheritance 


 ***/

 class car{
    constructor(name){
        this.name = name;
        this.species = "happtness";
    }
    hello(){
        console.log("Which car do you want to choose.?")
    }

 }
 class brand extends car{
    constructor(name, branch){
        //super();//to invoke parent class constructor
        super(name);
        this.branch = branch;
    }
    hell(){
        console.log("Which brand you must want.?");
    }
 }

 let carmode = new brand();
 let engobj = new brand("BMW","Germany");




 //If child & parent have same method, child's method will be used[Method overriding]


 /***
  Super keyword

  The super keyword is used to call the constructor 
  of its parent class to access the parent's

  super(args)
  super.parentMethod(args)
  ***/



  //Error handling in js

  let a =10;
  let b = 10;
  console.log(a+b);
  console.log(a-b);
  try{
    console.log(a-c);
  }catch(err){
    
    console.log(err);
  }
  