//let h2 = document.querySelector("h2");
//console.dir(h2.innerText);
//
//h2.innerText = h2.innerText + " from Apna College students";
//console.log(h2.innerText);
//let divs=document.querySelectorAll(".box");
//console.log(divs[1]);
//
//
//let idx = 1;
//for(div of divs){
//    div.innerText = `I am a box ${idx}`;
//    idx++;
//}
//
//div[0].innerText = "I am the first box";
//div[1].innerText = "I am the second box";
//div[2].innerText = "I am the third box";    

document.addEventListener("mousedown",function(event){
    if((event.button=0)){
        InputDeviceInfo.mouse.left=true;
    }
    if((event.button=1)){
        InputDeviceInfo.mouse.middle=true;
    }
    if((event.button=2)){
        InputDeviceInfo.mouse.right=true;
    }
});
