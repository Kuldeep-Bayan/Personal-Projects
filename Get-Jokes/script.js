let URL="https://official-joke-api.appspot.com/jokes/random";
let setup=document.querySelector("#setup");
let punchline=document.querySelector("#punchline");
let btn=document.querySelector("#btn1");

let getjokes=async ()=>{
    setup.innerText="Generating";
    punchline.innerText="please wait.....";
    let response=await fetch(URL);
    let joke=await response.json();
    setup.innerText=joke.setup;
    punchline.innerText=joke.punchline;
}
btn.addEventListener("click",getjokes);