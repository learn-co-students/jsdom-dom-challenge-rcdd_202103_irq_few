const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const pause = document.getElementById("pause");

const heartButton = document.getElementById("heart");
const likesList = document.querySelector(".likes");

const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const submit = document.getElementById("submit");


// Timer
let time = true;
let i = 0;
const timer = setInterval(function() {
    if (time) {
        counter.innerText = i;
        i++;
    }
}, 1000);

// Pause
pause.addEventListener("click", function(){
    if (time) {
        pause.innerText = "resume";
        time = false;
    }
    else {
        pause.innerText = "pause";
        time = true;
    }
});

plus.addEventListener("click", function() {
    if (time) {
        i++;
    }
});

minus.addEventListener("click", function() {
    if (time) {
        i--;
    }
});

