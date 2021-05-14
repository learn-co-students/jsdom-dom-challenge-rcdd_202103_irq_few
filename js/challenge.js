const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const submit = document.getElementById('submit');
const pause = document.getElementById('pause');
const buttons = [minus,plus,heart,submit];
let span = document.createElement('span');

let time = 0;
let isPaused = false;

let running = setInterval('startRunning()', 1000);

// timer increments, when isPaused is equal to false
function startRunning() {
    if (isPaused == false ) {
        time ++;
        counter.innerText = `${time}`;
        span.innerHTML = 0;
    }
}

// button function: minus
minus.addEventListener('click', function() {
    counter.innerText = `${time --}`;
});

// button function: plus
plus.addEventListener('click', function() {
    counter.innerText = `${time ++}`;
});

// button function: heart
heart.addEventListener('click', appendLike);


// button function: pause
pause.addEventListener('click', function() {
    if (pause.innerText === 'pause') {
        pause.innerText = 'resume';
        buttons.forEach(function(el) { 
            el.disabled = true;
        });
        isPaused = !isPaused;
    } else {
        pause.innerText = 'pause';
        buttons.forEach(function(el) { 
            el.disabled = false;
        });
        isPaused = !isPaused;
    }
});

// button function: submit
submit.addEventListener('click', appendComment);

function appendComment(event) {
    event.preventDefault();
    let list = document.getElementById('list');
    let p = document.createElement('p');
    list.appendChild(p);
    let content = document.getElementById('comment-input');
    p.innerHTML = `${content.value}`;
    content.value = '';
}