
const timeElement = document.querySelector("#time");
const wrapperElement = document.querySelector(".wrapper");
const btnElement = document.querySelector("#start");
const divContainerElement = document.querySelector(".divContainer");
const hElement = document.querySelector("#title");
const orderedListElement = document.querySelector("#q-list");
const finishDiv = document.querySelector(".finish-section");
const finalScore = document.querySelector("#result");
const errorMessage = document.querySelector("#errorSmg");
const initialInput = document.querySelector("#inputInitial").value;
const submitElement = document.querySelector(".btn btn-primary mb-2");
const responseDivElement = document.querySelector("#response");
const finalPageElement = document.querySelector(".final-page");
const initialAndScore = document.querySelector("#staticEmail");
const firstPageEl = document.querySelector(".first-page");



// Create an  array of questions
const questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "There are 3 different ways in which a JavaScript code can be involved in an HTML file. Selct the one that's not correct.",
        choices: ["Inline", "Import", "External", "Internal"],
        answer: "Import",
    },
    {
        title: "How to create an array in js ?",
        choices: ["const A[]=", "const A{}=", "const A=[]", "const A={}"],

        answer: "const A=[]",
    },
    {   
        title: "HTML element that can be accessed in a Javascript code: Chose the one that will return an array of elements",
        choices: ["getElementById(‘idname’)", "getElementsByClass(‘classname’)", 
        "getElementsByTagName(‘tagname’)", "querySelectorAll()"],
        answer: "querySelectorAll()",
    }
]


 /**Create next questions to be added to the HTML document dynamically*/
function displayQuestions() {
    const holdQ1Title = questions[i].title
    hElement.textContent = holdQ1Title
    const holdq1Choice1 = questions[i].choices[0];
    const holdq1Choice2 = questions[i].choices[1];
    const holdq1Choice3 = questions[i].choices[2];
    const holdq1Choice4 = questions[i].choices[3];

    orderedListElement.innerHTML = '';

    const liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    const btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice1;
    liTag1.appendChild(btn)
    orderedListElement.appendChild(liTag1);
    divContainerElement.appendChild(orderedListElement);

    const liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    const btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = holdq1Choice2;
    liTag2.appendChild(btn2)
    orderedListElement.appendChild(liTag2)
    divContainerElement.appendChild(orderedListElement);

    const liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    const btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = holdq1Choice3;
    liTag3.appendChild(btn3)
    orderedListElement.appendChild(liTag3)
    divContainerElement.appendChild(orderedListElement);

    const liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    const btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = holdq1Choice4;
    liTag4.appendChild(btn4);
    orderedListElement.appendChild(liTag4);
    divContainerElement.appendChild(orderedListElement);
    const allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });

}