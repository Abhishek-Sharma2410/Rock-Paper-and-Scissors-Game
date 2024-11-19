let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissors");
let text = document.getElementById("winorloose");
let background = document.querySelector(".text");
let choices = ["stone", "paper", "scissor"];
let computerPicked;
let userPicked;


let generateRandom = ()=>{
    computerPicked = choices[Math.floor(Math.random()*3)];
    console.log(computerPicked);
}

document.addEventListener("load", generateRandom());
stone.addEventListener("click", ()=>{
    userPicked = "stone";
    if(userPicked==computerPicked){
        text.innerText = "You Won";
        background.style.backgroundColor = "#006400";
    }
    else{
        text.innerText = "You Lost";
        background.style.backgroundColor = "#E70127";
    }
    setTimeout(()=>{
        location.reload();
    }, 400);
})
paper.addEventListener("click", ()=>{
    userPicked = "paper";
    if(userPicked==computerPicked){
        text.innerText = "You Won";
        background.style.backgroundColor = "#006400";
    }
    else{
        text.innerText = "You Lost";
        background.style.backgroundColor = "#E70127";
    }
    setTimeout(()=>{
        location.reload();
    }, 400);
})
scissor.addEventListener("click", ()=>{
    userPicked = "scissor";
    if(userPicked==computerPicked){
        text.innerText = "You Won";
        background.style.backgroundColor = "#006400";
    }
    else{
        text.innerText = "You Lost";
        background.style.backgroundColor = "#E70127";
    }
    setTimeout(()=>{
        location.reload();
    }, 400);
})

document.querySelector("#button").addEventListener("click", refresh());

let refresh = ()=>{
    location.reload();
}