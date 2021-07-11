$('[data-bs-toggle="tooltip"]').tooltip()

const timeElement = document.querySelector("#time");
const wrapperElement = document.querySelector(".wrapper");
const btnElement = document.querySelector("#start");
const divContEL = document.querySelector(".divContainer");
const ttlElement = document.querySelector("#title");
const oderListEl = document.querySelector("#q-list");
const finishDiv = document.querySelector(".finish-section");
const finalScore = document.querySelector("#result");
const errMsg = document.querySelector("#errorSmg");
const initialInput = document.querySelector("#inputInitial").value;
const submitEl = document.querySelector(".btn btn-primary mb-2");
const responseDiv = document.querySelector("#response");
const finalPageEl = document.querySelector(".final-page");
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
        title: "There are 3 different ways in which a JavaScript code can be involved in an HTML file. Select the one that's not correct.",
        choices: ["Inline", "Import", "External", "Internal"],
        answer: "Import",
    },
    {
        title: "How to create an array in js ?",
        choices: ["var A[]=", "var A{}=", "var A=[]", "var A={}"],

        answer: "var A=[]",
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
    const if_i_ask_a_question1 = questions[i].title
    ttlElement.textContent = holdq1Choice1
    const doyouknowtheAnswer1 = questions[i].choices[0];
    const doyouknowtheAnswer2 = questions[i].choices[1];
    const doyouknowtheAnswer3 = questions[i].choices[2];
    const doyouknowtheAnswer4 = questions[i].choices[3];

    oderListEl.innerHTML = '';

    const liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    const btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice1;
    liTag1.appendChild(btn)
    oderListEl.appendChild(liTag1);
    divContEL.appendChild(oderListEl);

    const liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    const btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = holdq1Choice2;
    liTag2.appendChild(btn2)
    oderListEl.appendChild(liTag2)
    divContEL.appendChild(oderListEl);

    const liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    const btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = holdq1Choice3;
    liTag3.appendChild(btn3)
    oderListEl.appendChild(liTag3)
    divContEL.appendChild(oderListEl);

    const liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    const btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = holdq1Choice4;
    liTag4.appendChild(btn4);
    oderListEl.appendChild(liTag4);
    divContEL.appendChild(oderListEl);
    const allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });

}


// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
// @media (min-width: 1400px) { ... }