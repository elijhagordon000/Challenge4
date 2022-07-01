


var startButton = document.getElementById('startButton');
var p = document.getElementById("timer");
var header1 = document.querySelector('h1');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');

var header2 = document.querySelector('h2');
var bottomText = document.getElementById("bottomText");
var form = document.querySelector('form');
var initials = document.querySelector('#initials');
var list = document.querySelector('ul');
var submitBtn = document.getElementById('submitBtn');
var scoreboard = document.getElementById('scoreboard');
var time = 60;
var score  = 0;
console.log(list);

header2.style.display= 'none';
form.style.display = 'none';
list.style.display = 'none';








function timer(){
    time -=1
   p.innerText = 'Time: ' + time;
}


// option1.addEventListener('click', function(){ 
//     console.log('The button was clicked!') });

function startGame() {
    setInterval(timer, 1000); //starts timer
  
    startButton.style.display= 'none'; // hides start button
    // questionCounter ++;
    option1.style.display = 'block'; // displays 1st option
    option2.style.display = 'block'; // displays 2nd option
    option3.style.display = 'block'; // displays 3rd option
    option4.style.display = 'block'; // displays 4th option

    
    header1.innerHTML = 'Question1: Inside which HTML element do we put the JavaScript?'; // sets question
    option1.innerHTML = 'script'; // gives first answer option
    option2.innerHTML = 'scripting'; // gives second answer option
    option3.innerHTML = 'div'; // gives 3rd answer option
    option4.innerHTML = 'text'; // gives 4th answer option
    option1.addEventListener('click', function(){ 
        bottomText.innerText = 'Correct!'
        score +=10
        scoreboard.innerText = 'Score:' + score;
        question2();
    });
    option2.addEventListener('click',wrong);
    option3.addEventListener('click',wrong);
    option4.addEventListener('click',wrong);


gameOver()
}
    

function question2(){
    header1.innerHTML = 'Question2: Who is wining the 2023 SuperBowl?'; 
    option1.innerHTML = 'Chiefs'; 
    option2.innerHTML = 'Bengals'; 
    option3.innerHTML = 'Vikings'; 
    option4.innerHTML = 'Packers(A very wrong answer)'; 
    option1.addEventListener('click',wrong);
    option2.addEventListener('click',wrong);
    option3.addEventListener('click',function(){
        bottomText.innerText = 'Correct!'
        score +=10
        scoreboard.innerText = 'Score:' + score;
        question3();
    });
    option4.addEventListener('click',wrong);
}

function question3(){
    header1.innerHTML = 'Who is the best basketball player of all time'; 
    option1.innerHTML = 'MJ'; 
    option2.innerHTML = 'Kobe'; 
    option3.innerHTML = 'Lavar Ball'; 
    option4.innerHTML = 'Lebron James'; 
    option1.addEventListener('click',wrong);
    option2.addEventListener('click',wrong);
    option3.addEventListener('click',function(){
        bottomText.innerText = 'Correct!'
        score +=10
        scoreboard.innerText = 'Score:' + score;
        gameOver();
    });
    option4.addEventListener('click',wrong);
}


function gameOver(){
    header1.style.display= 'none';
    option1.style.display= 'none';
    option2.style.display= 'none';
    option3.style.display= 'none';
    option4.style.display= 'none';
    scoreboard.style.display= 'none';
    p.style.display= 'none';
    bottomText.style.display= 'none';


    header2.style.display= 'block';
    form.style.display= 'block';
    
    // var liEl = document.createElement('li');
    
    
    // liEl.innerText = initials;
    // list.append(liEl);
    
    
}
submitBtn.addEventListener('click', function(event){
    var initialsInput = document.querySelector('#initials');// gets the input for the initials
    var liEl = document.createElement('li'); // makes a list item 
    liEl.innerText = initialsInput.value; // displays the initials and score 
    list.append(initialsInput.value + ' '+ score); // adds list item to the list
    list.style.display = 'block'; //displays the list
    event.preventDefault(); 
})

// function submitBtn() {
//     console.log('show highscores')
// }


function wrong(){ 
    bottomText.innerText = 'WRONG'
    time -=5;
    p.innerText = 'Time: ' + time;
    if(time < 0){
        gameOver();
    }
   
}
    
