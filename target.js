// 초기화 변수
let count = 0;
// 스크롤 이벤트할 때, 초기화
let playing = false;
let timer;

// DOM 변수 
const $start=document.querySelector('#start');
const $score=document.querySelector('#score');
const $target=document.querySelector('#target');

// let abc=Math.floor(Math.random() * 500);
// console.log(abc);

function moveTarget(){
    let x=Math.floor(Math.random()*500);
    let y=Math.floor(Math.random()*400);

    $target.style.left= x + 'px';
    $target.style.top= y + 'px';
}    

function gameStart(){
    if(playing==false){
        // 초기값일 때 게임을 시작, 
        playing=true;
        endGame();
        timer=setInterval(function(){
            moveTarget();
        },1000);

    }
     
}

function endGame(){
    setTimeout(function(){
        playing=false;
        clearInterval(timer);
        alert('Game Over!')
    }, 10000);
    
}



$start.addEventListener('click', function(){
    
    gameStart();
});

$target.addEventListener('click', function(){
    if(playing==true){
        
    count++;
    $score.textContent=count;
    }

    
});    
