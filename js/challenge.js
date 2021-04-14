const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const pause = document.querySelector('#pause');

const form = document.querySelector('#comment-form');
const commentDiv = document.querySelector('.comments');
const heart = document.querySelector('#heart');

form.addEventListener('submit', function(e){
  const commentInput = document.querySelector('#comment-input');
  e.preventDefault();
  let ul = document.createElement('ul');
  let li = document.createElement('li');
  li.innerText = commentInput.value;
  ul.append(li);
  commentDiv.append(ul);
});

let count = 0;

let cInterval = window.setInterval(function(){
  
    counter.innerText = ++count;
  
}, 1000);

plus.addEventListener('click', function(){

  counter.innerText = ++count;

});

minus.addEventListener('click', function(){
  
  counter.innerText = --count;
  
});


pause.addEventListener('click', function(){
  window.clearInterval(cInterval);
  minus.disabled = true;
  plus.disabled = true;
  submit.disabled = true;
  heart.disabled = true;
  
  pause.innerHTML = 'resume';
  
});
