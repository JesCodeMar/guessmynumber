'use strict';

let number=Math.trunc(Math.random()*100)+1;
let score=20;
let highscore=0;
const new_game_score=20;

document.querySelector('.number').textContent=number;

//event handler when check button is pressed
document.querySelector('.check').addEventListener('click',function(){
    const guess_value=Number(document.querySelector('.guess').value);


    //when input is not within the range
    if(guess_value<0 || !guess_value){
        document.querySelector('.guessing').textContent='Enter a number between 1 and 20';
    }
    
    //when player wins
    else if(guess_value===number){
        document.querySelector('.number').textContent=number;
        document.querySelector('.guessing').textContent='Correct Answer';
        document.querySelector('body').style.backgroundColor='rgb(23, 87, 30)';
        document.querySelector('.number').style.width='40rem'
        if(score>highscore){
            highscore=score;
            document.querySelector('.high-score').textContent=highscore;
        }
    }
    

    else if(guess_value!==number){
        if(score>=1){
            document.querySelector('.guessing').textContent=guess_value>number?'Number is too high':'Number is too low';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.guessing').textContent='You lost';
            document.querySelector('body').style.backgroundColor='rgb(100,0,0)';
        }
    }
})


//event handler when again button is pressed
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    number=Math.trunc(Math.random()*100)+1;
    document.querySelector('.score').textContent=20;
    document.querySelector('body').style.backgroundColor='rgb(23, 23, 87)';
    document.querySelector('.number').style.width='25rem'; 
    document.querySelector('.high-score').textContent=highscore;
//      document.querySelector('.number').textContent=`?`;
    document.querySelector('.number').textContent=number;    
    document.querySelector('.guessing').textContent=`Start your guessing...`;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
})
