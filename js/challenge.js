const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const submit = document.querySelector('#submit')
const comment = document.querySelector('#comment-form')
const body = document.getElementsByTagName('body')[0];
const commentInput = document.querySelector('#comment-input');
let timer ='g';



    minus.addEventListener('click',()=>{

        const t = parseInt(counter.innerText) -1;
        counter.innerText =t;


    })
    plus.addEventListener('click',()=>{

        const t = parseInt(counter.innerText) +1;
        counter.innerText =t;
    })
    const likeCount = [0];


    heart.addEventListener('click',()=>{

        const a =parseInt (counter.innerText)

        if (typeof likeCount[a] !== 'undefined'){

            likeCount[a] +=1
            console.log( likeCount[a])
            const ul = document.querySelector('.likes')
        const commnet=document.getElementById(`list${a}`)
        commnet.innerHTML= `Number ${counter.innerText} has been liked like count ${likeCount[a]}`
        ul.append(commnet)
        }
        else{


        const b = 0
        const c = b+1;
        likeCount[a] =c

        const ul = document.querySelector('.likes')
        const commnet=document.createElement('p')
        commnet.id = `list${a}`
        commnet.innerHTML= `Number ${counter.innerText} has been liked like count ${likeCount[a]}`
        ul.append(commnet)

        }



    })


        let time =setInterval(startTimer, 1000)



    function startTimer (){
        const t = parseInt(counter.innerText) +1;
        counter.innerText =t;

    }

    pause.addEventListener('click',()=>{



        if (timer == null) {

        time =setInterval(startTimer,1000)
        pause.innerText = 'pause'
        heart.disabled = false;
        plus.disabled = false;
        minus.disabled = false;
        timer ='c'
        }

        else {
            clearTimeout(time)
            timer = null;
            pause.innerText = 'resume'
            heart.disabled = true;
            plus.disabled = true;
        minus.disabled = true;

        }



    })

comment.addEventListener('submit',(e)=>{

    e.preventDefault();
    const div = document.createElement('div')
    div.innerHTML = commentInput.value;
    body.append(div)


})
