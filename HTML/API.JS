//Fetch API(Application programming Interface)nothing but end points
/***
 * let promise = fetch(url,[options])
 * Here Requests and Response are objects
 */

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

//const getFacts = async () => {
//    
//    console.log("Getting data");
//    let  response = await fetch(URL)
//       
//    console.log(response.status);//JSON format
//    let data = await response.json();
//    console.log(data);
//
//    
//        
// }

function getFacts(){
    fetch(URL).then((Response) => {
        
        return Response.json();
    }).then((data) => {
        console.log(data);
        factPara.textContent = data[0].text;
    }).catch((error) => {
        console.error("Error fetching facts:", error);
    });
}
 btn.addEventListener("click", getFacts);
/**
 * AJAX - it is a Asynchronous js & XML
 * JSON is a javaScript Notation 
 * json() methos:return a second promise that resolves
 * with the result of parsing the response body text as JSON
 * (Input is JSON , output is JS object)
 */




//Requests and Responses
