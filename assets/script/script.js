// ------------------------- POINTER VARIABLES ---------------------------------
var startPage = document.getElementById('startPage');
var timer = document.getElementById('timer');
var startButton = document.getElementById('startButton');
var quizContainer = document.getElementById('quiz')
var gameOverScreen = document.getElementById('gameOver')
var questionPrompt = document.getElementById('questionPrompt');
var testTime = 60;
var score = 0;
var answerBank = document.getElementById('answerBank');
var submitScore = document.getElementById('scoreSubmit')
var userInitial = document.getElementById('playerInitials')
var localStorage = window.localStorage;
var highscoreLink = document.getElementById('highLink')
var highscoreDisplay = document.getElementById('scoreboard')
var scoreItems = document.getElementById('scoreitems')
var returnHome = document.getElementById('homeReturn')
var createLi = document.createElement("li")
var scoreBank = [];
// -----------------------------------------------------------------------------

// -------------------- Quiz questions and answers ------------------------------
quizContainer.style.display = 'none'
gameOverScreen.style.display ='none'
highscoreDisplay.style.display = 'none'

var questionNum = 0;
var questions = [
    
    {
        prompt: "Which are the correct 'if' statements to execute certain code if 'x' is equal to 2?",
        answers: [ "if(x2)", "if(x = 2)", "if(x === 2)", "if(x != 2)"],
        correct: 2
        // correct answer [2] //
    }
    ,
    {
        prompt: "Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?",
        answers: ["concat()", "every()", "filter()", "some()"],
        correct: 2
    }
    ,
    {
        prompt: "Which of the following function of Array object removes the first element from an array and returns that element?",
        answers: ["reverse()", "shift()", "slice()", "some()"], // correct answer
        correct: 1
    }
    ,
    {
        prompt: "Which of the following method of Boolean object returns a string depending upon the value of the object?",
        answers: ["valueOf()", "toSource()", "none", "toString()"],
        correct: 3  // Correct answer
    }
    ,
    {
        prompt: "What is the function of Array object that runs through each element of the array?",
        answers: ["every()", "forEach()", "filter()", "concat()"],// Correct answer
        correct: 1
    }
    
]; // END OF ARRAY

// ---------------------------------------------------------------------------------

//-------------------------- SET TIMER AND TRACK -----------------------------------
function setTimer() {
    var timerInterval = setInterval(function() {
        timer.textContent = testTime
        if( testTime <= 0 || questionNum === questions.length ) {
            clearInterval(timerInterval)
            timer.textContent = 'GAME OVER'
            endGame()
        }
        testTime--;
        
    }, 1000);
    
}
// -----------------------------------------------------------------------------------

// -------------------------------- RUN THE TEST -------------------------------------
function startTest() { 
    var question = questions[questionNum];
    console.log('startTest')
    console.log(question)
    console.log(questionNum)

    questionPrompt.textContent = questions[questionNum].prompt;
    
    button1 = document.getElementById('button1');
    button2 = document.getElementById('button2');
    button3 = document.getElementById('button3');
    button4 = document.getElementById('button4');
    button1.textContent = questions[questionNum].answers[0]
    button2.textContent = questions[questionNum].answers[1]
    button3.textContent = questions[questionNum].answers[2]
    button4.textContent = questions[questionNum].answers[3]
    
    } // END OF FUNCTION

// ------------------------ EVENT LISTENERS -------------------------------------------
    answerBank.addEventListener('click',function(event) {
        userChoice = event.target
        
        if( userChoice.textContent === questions[questionNum].answers[questions[questionNum].correct]) {
            score += 10;
            console.log(score)
        } else {
            testTime -= 10;
            console.log(score)
        }
        questionNum++
        startTest();
        console.log(questionNum);
    });

    highscoreLink.addEventListener('click', function() {
        startPage.style.display = 'none';
        quizContainer.style.display = 'none'
        gameOverScreen.style.display = 'none'
        highscoreDisplay.style.display = 'block';


    })

    returnHome.addEventListener('click', function() {
        startPage.style.display = 'block'
        quizContainer.style.display = 'none'
        gameOverScreen.style.display = 'none'
        highscoreDisplay.style.display = 'none';

    })

startButton.addEventListener('click', function() {
    setTimer();
    quizContainer.style.display = 'block'
    startTest()
    startPage.style.display = 'none';
})
submitScore.addEventListener('click', function(event) {
    event.preventDefault()
    scoreBank.push(score)
    localStorage.setItem("score", score)
    endGame()
})

// -------------------------------END EVENT lISTENERS ----------------------------------

// --------------------------------------Endgame function-------------------------------

function endGame() {
    quizContainer.style.display="none";
    startPage.style.display = "none";
    gameOverScreen.style.display='block';

    for(i=0; i < localStorage.length; i++){
        createLi.innerHTML = userInitial.value + ": " + localStorage.key(i).value
        scoreItems.innerHTML = createLi;

    }

}

var highscores = JSON.parse(localStorage.getItem("highscores"))