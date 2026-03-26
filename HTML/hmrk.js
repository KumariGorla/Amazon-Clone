let btn1 = document.querySelector("#btn1");
//btn1.onclick = (e) => {
//    console.log(e);
//    console.log(e.type);
//    console.log("Button 1 is clicked");
//    let a = 23;
//    a++;
//    console.log(a);
//};
//
//let div = document.querySelector("div");
//div.onmouseover = () => {
//    console.log("Div is hovered");
//    // div.style.backgroundColor = "red";
//
//};

/***Event Listener
 node.addEventListener(event,callback)
 node.removeEventListener(event,callback)

 1.inline haldling
 2.JS node.event=()=>{
    }

Note:the callback reference should be same to remove
***/
btn1.addEventListener("click",(e)=>{
    console.log("Button 1 is clicked");
    console.log(e);
})
btn1.addEventListener("click",(e)=>{
    console.log("Button 2 is clicked");
    console.log(e);
})
const h3 = ("click",(e)=>{
    console.log("Button 3 is clicked");
    console.log(e);
})
btn1.addEventListener("click",(e)=>{
    console.log("Button 4 is clicked");
    console.log(e);
})

btn1.removeEventListener("click",h3);
let div = document.querySelector("div");


