/**set the time to zero*/
const timer = 76;
const timeCount;
/**this is the timer function which will start counting as soon as the quiz starts*/
function setupTimer() {
    timeCount = setInterval(function () {
        timer--;
        const timeReset = timeElement.textContent = "Time:" + " " + timer;
       timer = timer;
        if (timer <= 0) {         
            clearInterval(timeCount);
              
            timeElement.textContent = timeReset;
        }
    }, 1000)
}
 
//event listener to start- timer,  hide the quiz button 
document.addEventListener("click", function (event) {
    if (event.target === btnElement) {
        wrapperElement.style.display = "none";
        setupTimer()
        displayQuestions();
    }

})

 
//
const i = 0;

//Add a function to compare the answers and 
 // display each questions as the buttons are clicked


function onclickHandler(event) {
     
    if(timer<=0){
        clearInterval(timeCount);
        divContEL.style.display="none";
        displayResult();
    }
    const answerText = event.target.textContent 
    if (answerText === questions[i].answer) {
        timer = timer;
        responseDiv.setAttribute("style", "color: green")
        responseDiv.textContent = "Correct";
    } else {

        responseDiv.setAttribute("style", "color: red")
        responseDiv.textContent = "Wrong";
        timer = timer - 15;
     }
    
    
     
    if (i < questions.length-1) {

      i++; 
      //The increment operator (++) increments (adds one to) its operand and returns a value.
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

      setTimeout(function () {
      displayQuestions();
      responseDiv.textContent = "";
    }, 1000)
    }else {
        setTimeout(function () {
            responseDiv.textContent = "";
            displayResult();
            clearInterval(timeCount);
          
        }, 500)
    

        divContEL.innerHTML = '';
     }
     
    //Function to display users final score 
    function displayResult() {
        finishDiv.style.visibility = "visible";
        timeElement.textContent = "Time:" + " " + timer;
        const HighScores = timer;
        localStorage.getItem(HighScores)
        finalScore.textContent = "Your finally score is: " + HighScores;
         localStorage.setItem("HighScores", HighScores)
 
    }
}
//function to show the last page  
function renderLastItem() {
    const yourScore = localStorage.getItem("HighScores");
     const yourInitial = localStorage.getItem("Initial");
     if (yourScore && yourInitial === "") {
        return
    }
    finishDiv.textContent = "";
    const finalPageEl = document.querySelector(".final-page");
    finalPageEl.style.visibility = "visible";
    const initialAndScore = document.querySelector("#staticEmail");
    initialAndScore.value = yourInitial + ":" + " " + yourScore;

}
 
// This event listener submit the initial and final score to the local storage 
document.addEventListener("submit", function (event) {
    event.preventDefault();
    const initialInput = document.querySelector("#inputInitial").value;
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

 // X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
//@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
//@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
//@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
//@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
//@media (min-width: 1400px) { ... }