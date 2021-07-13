var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContainerElement = document.querySelector(".divContainer");
var hElement = document.querySelector("#title");
var orderedListElement = document.querySelector("#question");
var finishDiv = document.querySelector(".finish-section");
var finalScore = document.querySelector("#result");
var errorMessage = document.querySelector("#errorMessage");
var initialInput = document.querySelector("#inputInitial").value;
var submitElement = document.querySelector(".btn btn-primary mb-2");
var answerDivElement = document.querySelector("#answer");
var finalPageElement = document.querySelector(".final-page");
var initialAndScore = document.querySelector("#staticEmail");
var startPageElement = document.querySelector(".start-page");


// 
//



//Array of questions
var questions = [
    {
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
        choices: ["JavaScript syntax defines two types of values: Fixed values are called Literals. Variable values are called Variables.Numbers are written with or without decimals, Strings are text, written within double or single quotes, variables are used to store data values.",],

        answer: "True",
    },
    {   
        title: "A Javascript Boolean can have how many values?",
        choices: ["1", "2", 
        "3", "4"],
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


$('#link').click(.btn btn-primary mb-2(){MyFunction(); return false, });


 //function myFunction;(onClick){

     
    if(timer<=0){
        clearInterval(timeCount);
        divContEL.style.display="none";
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
        var localStorage.getItem(HighScores)
        finalScore.textContent = "Your finally score is: " + HighScores;
         localStorage.setItem("HighScores", HighScores)
 
    }
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