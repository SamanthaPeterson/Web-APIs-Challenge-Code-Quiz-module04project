var timeElement = document.querySelector("#time"); // Upper right hand corner of screen counting down time. 
var wrapperElement = document.querySelector(".wrapper"); //instructions
var startBtnElement = document.querySelector("#start"); //START QUIZ BUTTON

var btnElement = document.querySelector("#button");
var divInstructionsElement = document.querySelector(".div-instructions-element");
var divContainerElement = document.querySelector(".divContainer");
var divContainerElement = document.querySelector(".divContainer");

var divContainerElement = document.querySelector(".divContainer");
var codeQuizTitle = document.querySelector("quiz-title");
var hElement = document.querySelector("#title");
var addScore = document.querySelector("add-score");
var viewScore = document.querySelector("view-score");
var orderedListElement = document.querySelector("#question");
var viewTimer = document.querySelector("view.timer");
var timerElement = document.querySelector("timer-element");
var finishDiv = document.querySelector(".finish-section");

var finalScore = document.querySelector("#result");

var errorMessage = document.querySelector("#errorMessage");
var initialInput = document.querySelector("#inputInitial").value;

var submitElement = document.querySelector(".btn btn-primary mb-2");
var initialsEl = document.getElementById("initials");
var answerDivElement = document.querySelector("#answer");
var finalPageElement = document.querySelector(".final-page");
var initialAndScore = document.querySelector("#initial-and-score");
var startPageElement = document.querySelector(".start-page");
var choicesElement = document.getElementById("choices");
var answersElement = document.getElementById("answers");
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var feedbackEl = document.getElementById("feedback");

var returnToStart = document.querySelector("#go-back");  
var clearScore = document.querySelector("#clear-score");
var yourScore = document.querySelector("#your-score");

var highScore = document.querySelector("#high-score");

var result = document.querySelector("#result"); 
var enterInitials = document.querySelector("#enter-initials");
var submitElement = document.querySelector("#submit-element");

var yourFinalScore = document.querySelector("#your-final-score"); 
var allDone = document.querySelector("#all-done-button"); 
var submitButton = document.querySelector("#submit-button");

/*10. your event listener is going to look somethin like this: document.getElementById("submit").addEventListener("click", addHighscore);
Local storage:
    here is a very nice guide to it: https: //blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
    In you
function addHighscore you are going to:
    a.get item or create a new one
if it does not exist from local storage, ie:
    window.localStorage.getItem("saveHighscore") || []
the line above will
return a string, so you want to use JSON.parse to get it in json format as following:
    let highscores = JSON.parse(window.localStorage.getItem("saveHighscore")) || [];
b.create a new object with user input and higscore, ie: {
    userInput: username,
    highscore: highscore
}
c.push your object to highscores array
d.save your array n local storage, ie: window.localStorage.setItem("saveHighscore", JSON.stringify(highscores)); - remember, it wants to receve a string, so you have to use JSON.stringify method to convert it into string.
e.create a new html page to display highscores, grab your saveHighscore array using getItem method and display everything in a nice table: ) 



On zero game over or all questions answered 

// sound effects
//ar sfxRight = new Audio("assets/sfx/correct.wav");
//var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// 
*/



//Array of questions
var questions = [{
        title: "The following are true of Javascript, with the EXCEPTION of:",
        choices: ["it is a programming language", "Java and Javascript are the same thing", "it is most often for dynamic client-side scripts on webpages, but it is also often used on the server-side", "primarily used in the browser, enabling developers to manipulate webpage content through the DOM"],
        answer: "Java and Javascript are the same thing. The two programming languages are significantly different in their syntax, semantics, and use cases. See https://developer.mozilla.org/en-US/docs/Glossary/JavaScript#learn_more for more information",
    },
    {
        title: "An ARRAY is defined as...",
        choices: ["a block of code designed to perform a particular task.", "Assigning values to variables and add them together", "used for storing and manipulating text", "are used to store multiple values in a single variable"],
        answer: "are used to store multiple values in a single variable - An array is a special variable, which can hold more than one value at a time. See W3schools for more information on arrays ",
    },
    {
        title: "Which of the following is an example of Camel case or Lower camel case?",
        choices: ["first_name, last_name, master_card, inter_city", "FirstName, LastName, MasterCard, InterCity", "firstName, lastName, masterCard, interCity", "first-name, last-name, master-card, inter-city"],
        answer: "firstName, lastName, masterCard, interCity. as a side note - Hyphens are not allowed in JavaScript. They are reserved for subtractions.",
    },
    {
        title: "The statement provided is true or false, select between the two options",
        choices: ["JavaScript syntax defines two types of values: Fixed values are called Literals. Variable values are called Variables.Numbers are written with or without decimals, Strings are text, written within double or single quotes, variables are used to store data values.", ],

        answer: "True",
    },
    {
        title: "A Javascript Boolean can have how many values?",
        choices: ["1", "2",
            "3", "4"
        ],
        answer: "1 true or false You can use the Boolean() function to find out if an expression is true:",
    }
]

//Questions were pulled from documentation by w3schools and mozilla 
//
//

/**Create next question to be added to the HTML document dynamically*/
//function myFunc(theObject)
//myFunction is the same as displayQuestions   
function myFunction() {
    var what_kind_of_bear_is_bestTitle = questions[i].title
    hElement.textContent = what_kind_of_bear_is_bestTitle
    var what_kind_of_bear_is_bestFact1BearsBlackBears = questions[i].choices[0];
    var what_kind_of_bear_is_bestFact2Beets = questions[i].choices[1];
    var what_kind_of_bear_is_bestFact3BattleStarGalactica = questions[i].choices[2];
    var what_kind_of_bear_is_bestFact4IdentityTheftIsNotAJokeJim = questions[i].choices[3];

    orderedListElement.innerHTML = '';

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = what_kind_of_bear_is_bestFact1BearsBlackBears;
    liTag1.appendChild(btn1)
    orderedListElement.appendChild(liTag1);
    divContainerElement.appendChild(orderedListElement);

    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = what_kind_of_bear_is_bestFact2Beets;
    liTag2.appendChild(btn2)
    orderedListElement.appendChild(liTag2)
    divContainerElement.appendChild(orderedListElement);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = what_kind_of_bear_is_bestFact3BattleStarGalactica;
    liTag3.appendChild(btn3)
    orderedListElement.appendChild(liTag3)
    divContainerElement.appendChild(orderedListElement);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = what_kind_of_bear_is_bestFact4IdentityTheftIsNotAJokeJim;
    liTag4.appendChild(btn4);
    orderedListElement.appendChild(liTag4);
    divContainerElement.appendChild(orderedListElement);
    var allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });

}

//References 

//https://www.imdb.com/title/tt1008441/characters/nm0933988
//The office 
//https://github.com/Sile-Kiman/Web-API-Code-Quiz Referenced how he put his project together - super helpful

/**set the time to zero*/
var timer = 60;
var timeCount;
/**this is the timer function which will start counting as soon as the quiz starts*/
function setupTimer() {
    timeCount = setInterval(function () {
        timer--;
        var timeReset = timeElement.textContent = "Time:" + " " + timer;
        timer = timer;
        if (timer <= 0) {
            clearInterval(timeCount);

            timeElement.textContent = timeReset;
        }
    }, 1200)
}

//event listener to start- timer,  hide the quiz button 
btnElement.addEventListener("click", function (event) {
    console.log("start button click")
    if (event.target === btnElement) {
        wrapperElement.style.display = "none";
        setupTimer()
        myFunction();
    }
})

//
var i = 0;

//Add a function to compare the answers and 
// display each questions as the buttons are clicked
//$('".btn btn-primary mb-2"').click( function(e) {e.preventDefault(); /*your_code_here;*/ return false; } );




//function myFunction;(onClick){


/* if (timer <= 0) {
    clearInterval(timeCount);
    divContEL.style.display = "none";
    displayResult();
}
var answerText = event.target.textContent
if (answerText === questions[i].answer) {
    timer = timer;
    answerDiv.setAttribute("style", "color: green")
    answerDiv.textContent = "Correct";
} else {

    answerDiv.setAttribute("style", "color: red")
    answerDiv.textContent = "Wrong";
    timer = timer - 15;
}
 

User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers


Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and score

Mock - Up
The following animation demonstrates the application functionality:

    code quiz

Grading Requirements
This challenge is graded based on the following criteria:

    Technical Acceptance Criteria: 40 %
    Satisfies all of the above acceptance criteria.
Deployment: 32 %
    Application deployed at live URL.

Application loads with no errors.

Application GitHub URL submitted.

GitHub repository that contains application code.

Application Quality: 15 %
    Application user experience is intuitive and easy to navigate.

Application user interface style is clean and polished.

Application resembles the mock - up functionality provided in the Challenge instructions.

Repository Quality: 13 %
    Repository has a unique name.

Repository follows best practices
for file structure and naming conventions.

Repository follows best practices
for class / id naming conventions, indentation, high - quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high - quality README file with description, screenshot, and link to deployed application.

How to Submit the Challenge
You are required to submit BOTH of the following
for review:

    The URL of the functional, deployed application.

The URL of the GitHub repository.Give the repository a unique name and include a README describing the project.

*/


if (i < questions.length - 1) {

    i++;
    //The increment operator (++) increments (adds one to) its operand and returns a value.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

    setTimeout(function () {
        myFunction();
        answerDiv.textContent = "";
    }, 1000)
} else {
    setTimeout(function () {
        answerDiv.textContent = "";
        displayResult();
        clearInterval(timeCount);

    }, 500)


    divContEL.innerHTML = '';
}

//Function to display users final score 
function displayResult() {
    finishDiv.style.visibility = "visible";
    timeElement.textContent = "Time:" + " " + timer;
    var HighScores = timer;
    //var localStorage.getItem(HighScores)
    finalScore.textContent = "Your finally score is: " + HighScores;
    localStorage.setItem("HighScores", HighScores)

}

//function to show the last page  
function renderLastItem() {
    var yourScore = localStorage.getItem("HighScores");
    var yourInitial = localStorage.getItem("Initial");
    if (yourScore && yourInitial === "") {
        return
    }
    finishDiv.textContent = "";
    var finalPageEl = document.querySelector(".final-page");
    finalPageEl.style.visibility = "visible";
    var initialAndScore = document.querySelector("#staticEmail");
    initialAndScore.value = yourInitial + ":" + " " + yourScore;

}

// This event listener submit the initial and final score to the local storage 
document.addEventListener("submit", function (event) {
    event.preventDefault();
    var initialInput = document.querySelector("#inputInitial").value;
    if (initialInput === "") {
        errorMessage.setAttribute("style", "color: red")
        errorMessage.textContent = "Initial input field cannot be empty"
    } else {
        errorMessage.textContent = "";
        localStorage.getItem(initialInput)
        localStorage.setItem("Initial", initialInput)
        renderLastItem()
    }

})
//This function will refresh the page and send user back to beginning page when go back button is clicked
function init() {
    location.reload();

}
//This function will  clear initial and score displayed on the final page 
function clearScore() {
    initialAndScore.value = "";
}



/* 
Some pseudocode for you:
Game over function (create it first) you have to:
1. assign current seconds value to highscore (don't forget te create a variable for that)


String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return hours + ':' + minutes + ':' + seconds;

        alert("5678".toHHMMSS());

        String.prototype.toHHMMSS = function () {
            var sec_num = parseInt(this, 10); // don't forget the second param
            var hours = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return hours + ':' + minutes + ':' + seconds;
        }

        https: //stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss



2. clear interval
The clearInterval()
function in javascript clears the interval which has been set by setInterval()
function before that.
setInterval()
function takes two parameters.First a
function to be executed and second after how much time( in ms).
setInterval() executes the passed
function
for the given time interval.
Jul 26, 2019

JavaScript | clearTimeout() & clearInterval() Method...
https: //www.google.com/search?q=in+javascript+how+do+i+clear+an+interval&rlz=1C5CHFA_enUS956US956&oq=in+javascript+how+do+i+clear+an+interval&aqs=chrome..69i57j33i22i29i30l3.11835j0j7&sourceid=chrome&ie=UTF-8

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
    clearInterval(myVar);
}
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
    clearInterval(myVar);
}


3. hide game screen


< button onclick = "myFunction()" > Click Me < /button>

    <
    div id = "myDIV" >
    This is my DIV element. <
    /div>

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
https: //www.w3schools.com/howto/howto_js_toggle_hide_show.asp


4. show game over screen (don't forget to create that in your html)
https: //developer.mozilla.org/en-US/search?q=game+over+screen+

if (y + dy < ballRadius) {
    dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval); // Needed for Chrome to end game
}


5. show right answers and wrong answers values to user
https: //www.sitepoint.com/community/t/checking-answer-in-a-quiz/325000


6. show highscore

7. create an input field where user can insert its name 

8. create a submit button that when its clicked you are going to save the input value in a variable (don't forget to create it first)


9. create a new event listener for submit button and a function for adding the highscore to the local storage



*/