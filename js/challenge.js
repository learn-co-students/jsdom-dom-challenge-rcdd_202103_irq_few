let counter =document.getElementById("counter");
let minus =document.getElementById("minus");
let plus =document.getElementById("plus");
let pause =document.getElementById("pause");
let heart =document.getElementById("heart");
let submit = document.getElementById("submit");
let counterOn;
let counts;


setTimeout(start,0);
let i=0;
function start() {
 counts= setInterval(increase, 1000);
  counterOn = true;
}

function increase() {
 if (i < 5000) {
      i++;
      counter.innerHTML = i;
    } 
}

function stop (){
    clearInterval(counts);
    counterOn = false;
}

// pause button
pause.addEventListener("click", function (){
    if (counterOn){
    stop ()
    pause.innerText= "resume";
    document.querySelectorAll('button').forEach(elem => {
    elem.disabled = true;});
    pause.disabled = false;}

    else {
    start ()
    pause.innerText= "pause";
    document.querySelectorAll('button').forEach(elem => {
    elem.disabled = false; }); } 
});


//minus button
minus.addEventListener("click",function (){
    let counterValue = parseInt(counter.innerText);
    counterValue--;
    counter.innerText=counterValue;
    });
// plus button 
plus.addEventListener("click",function (){
    let counterValue = parseInt(counter.innerText);
    counterValue++;
    counter.innerText=counterValue;
    });

//heart button
// do not know how to make like numbers increase

heart.addEventListener("click",function (){
    let heartCount=0;
    let ulLikesList = document.querySelector(".likes");
    let liList = document.createElement("li");
    liList.innerText=`${counter.innerText} has been liked ${1+heartCount++} times`;
    ulLikesList.appendChild(liList);
    });

//comments
submit.addEventListener("click", function(event) {
    event.preventDefault();
    let commentList = document.getElementById("list");
    let ulForComments = document.createElement("ul");
    commentList.append(ulForComments);
    let newComment = document.getElementById("comment-input");
    let liForComments = document.createElement("li");
    liForComments.innerText = newComment.value
    ulForComments.append(liForComments);
});

