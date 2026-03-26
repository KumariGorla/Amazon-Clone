let btn1 = document.querySelector("#btn1");

let body = document.querySelector("body");
let mode ="light";
btn1.addEventListener("click",()=>{
    
    if(mode=="light"){
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
       // document.body.style.backgroundColor="black";
    }else{
        mode="light";
        body.classList.add("light");
        body.classList.remove("dark");
        //document.body.style.backgroundColor="white";
        
    }
    console.log("Mode is changed to "+mode);
    
})
