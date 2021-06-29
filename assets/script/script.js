// ------------------------- POINTER VARIABLES ---------------------------------
var startPage = document.getElementById('startPage');
var timer = document.getElementById('timer');
var startButton = document.getElementById('startButton');
var questionPrompt = document.getElementById('questionPrompt');
var testTime = 60;
var score = 0;
var answerBank = document.getElementById('answerBank');
// -----------------------------------------------------------------------------

// -------------------- Quiz questions and answers ------------------------------
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
        if( testTime <= 0 ) {
            clearInterval(timerInterval)
            content.textContent = 'GAME OVER'
        }
        testTime--;
        
    }, 1000);

}
// -----------------------------------------------------------------------------------

// -------------------------------- RUN THE TEST -------------------------------------
function startTest() {
    setTimer();

    button1 = document.getElementById('button1');
    button2 = document.getElementById('button2');
    button3 = document.getElementById('button3');
    button4 = document.getElementById('button4');
    
    // when start button is clicked... 
    // for every question within our object,
        // my container for the test will unhide 
        // A question will display in a h2 question [i] = question1 
        // the text content of the h2 will change to match question1
        // four answer choice buttons will display 
        // each answer choice will match answers array indexes
        // when I select an answer... 
        // my answer will be compared to the correct answer
        // IF my answer is correct, points will be added to my score
        // IF my answer is incorrect, no points will be added and time will be subtracted.
        // My for loop will start over and the i will move to the next question
        // After I answer all the questions...
        // my scored is printed to the console
        // my end game page will load
        // a tag with my score will appear
        // an input field asking for my initials will load
        // a submit button will load onto the page
        // when i enter my initials and click submit..
        // my score and initials will be saved to the highscore page and will save to the local storage.

    for (let i = 0; i < questions.length; i++ ) {
        
        var question = questions[i];
        questionPrompt.textContent = question.prompt;
        button1.textContent = question.answers[0]
        button2.textContent = question.answers[1]
        button3.textContent = question.answers[2]
        button4.textContent = question.answers[3]

        answerBank.addEventListener('click',function(event) {
            userChoice = event.target
            if( userChoice.textContent === question.answers[question.correct]) {
                score += 10;
                console.log(score)
            } else {
                testTime -= 10;
                console.log(score)
            }
        });
    }
    
}
// ------------------------------------------------------------------------------------
startButton.addEventListener('click', function() {
    startTest()
    startPage.style.display = 'none';
})
