

const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const comments = document.querySelector("#list")
let counter = document.querySelector("#counter")
let firstLike = true;
let counterRun;
let counterOn;

function counterStart (){
counterRun = setInterval(counterIncrement, 1000);
counterOn = true;
}

function counterStop (){
clearInterval(counterRun);
counterOn = false;
}

function counterIncrement (){
let counterInt = parseInt(counter.textContent);
counterInt++;
strCounter(counterInt);
}

function strCounter(number){
let counterStr = String(number);
counter.textContent = counterStr;
}

document.addEventListener('DOMContentLoaded', counterStart);

minus.addEventListener("click",function (){
let counterInt = parseInt(counter.textContent);
counterInt--;
strCounter(counterInt);
})

plus.addEventListener("click",function (){
counterIncrement();
})


    heart.addEventListener("click",function (){
    let likedCount;
    let counterNow;
    let ulLikesList = document.querySelector(".likes");
    if (firstLike || counter.textContent != counterNow){
    let counterNow = counter.textContent;
    likedCount = 1;
    let liList = document.createElement("li");
    liList.setAttribute("id", counterNow);
    liList.appendChild(document.createTextNode(`${counter.textContent} has been liked ${likedCount} times`));
    ulLikesList.appendChild(liList);
    firstLike = false;
    console.log()
    }
    else if (counter.textContent == counterNow){
    let liList = document.getElementById(`${counterNow}`);
    likedCount++;
    liList.textContent = `${counterNow} has been liked ${likedCount} times`;
    }

    })

    pause.addEventListener("click", function (){
    if (counterOn){
    counterStop ()
    pause.textContent = "resume";
    document.querySelectorAll('button').forEach(elem => {
    elem.disabled = true;
    });
    pause.disabled = false;
    }else{
    counterStart ()
    pause.textContent = "pause";
    document.querySelectorAll('button').forEach(elem => {
    elem.disabled = false;
    });
    }
    });


    document.querySelector("#submit").addEventListener("click", function(event) {
    event.preventDefault();
    let commentList = document.querySelector("#list")
    let ulCommentList = commentList.appendChild(document.createElement("ul"));
    let newTask = document.querySelector("#comment-input");
    let buttonList = document.createElement("button");
    let liList = document.createElement("li");
    liList.appendChild(document.createTextNode(newTask.value + " "));
    liList.appendChild(buttonList);
    buttonList.setAttribute("class",`delete`);
    buttonList.innerText = "X";
    ulCommentList.appendChild(liList);


    let deleteBtn = document.getElementsByClassName("delete");
    Array.prototype.slice.call(deleteBtn).forEach(function(item) {
    item.addEventListener("click", function(e) {
    e.target.parentNode.remove()})
    });
    }, false);
