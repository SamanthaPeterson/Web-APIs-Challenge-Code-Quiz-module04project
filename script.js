//List of variables/elements/selectors to try and stay organized through out the project 


//Q&A
var answerDivElement = document.querySelector("#answer");
var orderedListElement = document.querySelector("#question");
var questionTitle = document.querySelector("#q-title");

//start page
var startPageElement = document.querySelector(".start-page");


//buttons 
var btnElement = document.querySelector("#button");

//time
var timeElement = document.querySelector("#time");

//wrapper holding the intro to the quiz
var wrapperElement = document.querySelector(".wrapper");

//container i was starting to make more containers and this may have caused me more problems- i wanted to try more with bootstrap, didn't  make it too far with that
var divContainerElement = document.querySelector(".divContainer");


//errors
var errorMessage = document.querySelector("#errorMessage");


var initialInput = document.querySelector("#inputInitial").value;


var submitElement = document.querySelector(".btn btn-primary mb-2");
var initialAndScore = document.querySelector("#display-score");


var finalScore = document.querySelector("#result");
var finishDiv = document.querySelector(".finish-section");
var finalPageElement = document.querySelector(".final-page");
//



//Array of questions- i mostly got my ideas for these questions from w3 schools or mozilla docs 

var questions = [
    {
        questionsTitle: "The following are true of Javascript, with the EXCEPTION of:",
        choices: ["it is a programming language", "Java and Javascript are the same thing", "it is most often for dynamic client-side scripts on webpages, but it is also often used on the server-side", "primarily used in the browser, enabling developers to manipulate webpage content through the DOM"],
        answer: "Java and Javascript are the same thing",
    },
    {
        questionsTitle: "An ARRAY is...",
        choices: ["A block of code designed to perform a particular task.", "Assigning values to variables and add them together", "Used for storing and manipulating text", "Used to store multiple values in a single variable"],
        answer: "Used to store multiple values in a single variable",
    },
    {
        questionsTitle: "Which of the following is an example of Camel case or Lower camel case?",
        choices: ["first_name, last_name, master_card, inter_city", "FirstName, LastName, MasterCard, InterCity", "firstName, lastName, masterCard, interCity", "first-name, last-name, master-card, inter-city"],
        answer: "firstName, lastName, masterCard, interCity",
    },
    {
        questionsTitle: "True or false: JavaScript syntax defines two types of values: Fixed values are called Literals. Variable values are called Variables. Numbers are written with or without decimals. Strings are text, written within double or single quotes.",
        choices: ["true","false"],  
        answer: "True",
    },
    {   
        questionsTitle: "A Javascript Boolean can have how many values?",
        choices: ["1", "2", "3", "4"],
        answer: "1",
    }
]

//Questions were pulled from documentation by w3schools and mozilla 
//
//

//Create next question to be added to the HTML doc
//function myFunc(theObject)
//myFunction is the same as displayQuestions   
//this part right here is where i think i got into some trouble 
var (qS){,
    var qS = questions[i].questionsTitle
    hElement.textContent = qS
    var qS1 = questions[i].choices[0];
    var qS2 = questions[i].choices[1];
    var qS3 = questions[i].choices[2];
    var qS4 = questions[i].choices[3];

    orderedListElement.innerHTML = '';

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = qS1;
    liTag1.appendChild(btn1)
    orderedListElement.appendChild(liTag1);
    divContainerElement.appendChild(orderedListElement);

    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = qS2;
    liTag2.appendChild(btn2)
    orderedListElement.appendChild(liTag2)
    divContainerElement.appendChild(orderedListElement);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = qS3;
    liTag3.appendChild(btn3)
    orderedListElement.appendChild(liTag3)
    divContainerElement.appendChild(orderedListElement);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = qS4;
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
document.addEventListener("click", function (event) {
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


//$click

//.visually-hidden- .start btn btn-primary mb-2; .btn-lg {
// @include visually-hidden;
//}

//.skip- .start .btn .btn-primary .btn-lg {
// @include visually-hidden-focusable;
//}
//$('#link').click(.btn btn-primary mb-2(){MyFunction(); return false, });


var onclickHandler = addEventListener.event.target("li");()=>{

     
    if(timer<=0){
        clearInterval(timeCount);
        divContEL.style.display="none";
        displayScore();
    }
    var answerText = EventTarget.textContent 
    if (answerText === questions[i].answer) {
        timer = timer;
        answerDiv.setAttribute("style", "color: green")
        answerDiv.textContent = "Correct";
    } else {

        answerDiv.setAttribute("style", "color: red")
        answerDiv.textContent = "Wrong";
        timer = timer - 15;
     }
    
    
     
    if (i < questions.length-1) {

      i++; 
      //The increment operator (++) increments (adds one to) its operand and returns a value.
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

      setTimeout(function () {
      myFunction();
      answerDiv.textContent = "";
    }, 1000)
    }else {
        setTimeout(function () {
            answerDiv.textContent = "";
            displayScore();
            clearInterval(timeCount);
          
        }, 500)
    

        divContEL.innerHTML = '';
     }
     
    //Function to display users final score 
    //https://stackoverflow.com/questions/53270460/how-to-save-highscores-in-javascript-game
    function displayScore() {
        finishDiv.style.visibility = "visible";
        timeElement.textContent = "Time:" + " " + timer;
        var HighScores = timer;
        var HighScores = JSON.parse(localStorage.getItem("timer")); 
        window.location.href="menu.html";
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
 }}