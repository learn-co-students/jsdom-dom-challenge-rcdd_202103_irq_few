let minus = document.getElementById("minus");
let numCounter = document.getElementById("counter");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let interval;

numCounter.innerText = "counting";

let timer = () => {
    interval = this.setInterval(() => {
        counting = parseInt(counting) + 1;
    }, 1000);
};
timer();

let decrement = () => {
    minus.onclick = () => {
        counting = parseInt(counting) - 1;
    };
};
decrement();

let increment = () => {
    plus.onclick = () => {
        counting = parseInt(counting) + 1;
    };
};
increment();


let like = () => {
    let counter, likesNumber = 1;
    heart.onclick = () => {
        if (counting == counter) {
            likesNumber = likesNumber + 1;
        } else {
            likesNumber = 1;
        }
        let likes = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        li.innerText = counting + ` has been liked ${likesNumber} time`;
        counter = counting;
        likes.appendChild(li);

    };
};
like();

let pause = () => {
    let btnState = "pause";
    let pause = document.getElementById('pause');
    pause.onclick = () => {
        if (btnState === "pause") {
            pause.innerText = "resume";
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            btnState = "resume";
            clearInterval(interval);
        } else if (btnState === "resume") {
            pause.innerText = "pause";
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            btnState = "pause";
            timer();
        }

    };
};
pause(); 

let submitForm = (e) => {
    e.preventDefault();
    let mssgInput = document.getElementById('comment-input');
    let p = document.createElement('p');
    p.innerHTML = mssgInput.value;
    document.getElementById("list").appendChild(p);
    mssgInput.value = "";
};

let form = document.getElementById('comment-form');
form.onsubmit = submitForm;




