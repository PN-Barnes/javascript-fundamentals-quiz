var main = document.querySelector('#main')

// var questions = [question1, question2, question3, question4, question5]


function createPage() {
    container = document.getElementById('container');
    content = document.createElement('div');
    timer = document.createElement('p')
    prompt = document.createElement('h2');
    button = document.createElement("BUTTON");

    container.appendChild(timer)
    container.appendChild(content)
    content.appendChild(prompt)
    container.appendChild(button)
    
    content.textContent = 'Click the button to start the test'
    timer.textContent = 0;
    button.innerHTML = 'Start Test'
}

createPage();



var questions = [
    {
    prompt: "Which are the correct 'if' statements to execute certain code if 'x' is equal to 2?",
    A: "if(x2)",
    B: "if(x = 2)",
    C: "if(x === 2)", // correct answer
    D: "if(x != 2)"
    }
    ,
    {
        prompt: "Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?",
        A: "concat()",
        B: "every()",
        C: "filter()", // correct answer
        D: "some()"
    }
    ,
    {
        prompt: "Which of the following function of Array object removes the first element from an array and returns that element?",
        A: "reverse()",
        B: "shift()", // correct answer
        C: "slice()",
        D: "some()"
    }
    ,
    {
        prompt: "Which of the following method of Boolean object returns a string depending upon the value of the object?",
        A: "valueOf()",
        B: "toSource()",
        C: "none",
        D: "toString()" // Correct answer
    }
    ,
    {
        prompt: "What is the function of Array object that runs through each element of the array?",
        A: "every()",
        B: "forEach()", // Correct answer
        C: "filter()",
        D: "concat()"
    }

];