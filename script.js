let score = 0;
let timer = 2;
var hitNum;

function makeBubble(){
    let clutter = "";

    for(let i=0;i<154;i++){
        const randomNum =Math.floor(Math.random()*10);
        clutter+= `<div class="bubble">${randomNum}</div>`
        
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    let timeinterval =  setInterval( function(){
        if(timer>0){
        timer--;        
        document.querySelector(".timer").innerHTML = timer;
        }
        else{
            clearInterval(timeinterval);
            document.querySelector("#pbtm").innerHTML = `<div id ="endGame"><h1 id = "gameover">Game Over</h1>
            <h1 id = "finalScore">Your Score is ${score}</h1>
            <div class = "reload"> Reload to start a new Game  </div>          
            </div>`;
        }
    },1000)
}

function getNewHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hitbtn").innerHTML = hitNum;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").innerHTML = score;
}


document.querySelector("#pbtm")
.addEventListener('click',function(element){
    // console.log(Number(element.target.textContent));
    let userNum = Number(element.target.textContent);
    if(userNum === hitNum){
        increaseScore();
        getNewHit();
        makeBubble();
        // runTimer();
    }  
})

document.querySelector("#start").addEventListener('click',function(){
    makeBubble();
    runTimer();
    getNewHit(); 
})






// runTimer();
// makeBubble();
// getNewHit();