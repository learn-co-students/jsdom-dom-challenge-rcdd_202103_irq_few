


const display = document.querySelector("h1#counter");
const downButton= document.getElementById("-");
const upButton= document.getElementById("+");
const heart= document.getElementById("<3");
const playBtn= document.getElementById("pause");
const likes= document.querySelector(".likes")
const comments=document.querySelector("input")
const commentsDisplay= document.querySelector(".comments")
let number=0


let intervalId = setInterval(runFunction, 1000);

function runFunction(){
    display.innerText= number++;
};


playBtn.addEventListener("click",pauseEventHandler);
    
function pauseEventHandler(e){
    clearInterval(intervalId);
    playBtn.innerHTML = "resume";
    playBtn.removeEventListener("click", pauseEventHandler)
    playBtn.addEventListener("click", resumeEventHandler);
}

function resumeEventHandler(e){
    intervalId = setInterval(runFunction, 1000);
    playBtn.innerHTML = "pause";
    playBtn.removeEventListener("click", resumeEventHandler)
    playBtn.addEventListener("click", pauseEventHandler);
}


downButton.addEventListener("click", downEventHandler);

function downEventHandler(e){
    number--;
    display.innerText= number--
    // console.log(number)
}; 

upButton.addEventListener("click", upEventHandler);

function upEventHandler(e){
    number++;
    display.innerText= number++
}; 

heart.addEventListener("click",heartEventHandler);

function heartEventHandler(e){
    const newLi = document.createElement('li')
    newLi.innerText = `${display.innerText} has been liked`
    likes.appendChild(newLi)
}; 

comments.addEventListener("change",commentEventHandler); 

function commentEventHandler(e){
    // e.preventDefault(); 
    // commentsDisplay.textContent = this.value;
    const newLi = document.createElement('li')
    newLi.innerText = this.value
    commentsDisplay.appendChild(newLi)
};