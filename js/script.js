// Entire Page Element -not currently being used
const quizPage = document.getElementById('quiz');
// DOM Elements for Quiz Generation
const nextBtn = document.getElementById('nextBtn')
const backBtn = document.getElementById('backBtn');
const showCurrent = document.createElement('H2');
const title = document.createElement('H1');
const timer = document.createElement('H2');
const footer = document.createElement('FOOTER');
const contentDiv = document.createElement('DIV');
const startBox = document.createElement('DIV');
const startButton = document.createElement('BUTTON');
// Ordered List Creation
const ol = document.createElement('OL');
let li = document.createElement('LI');
// Appends Children to Quiz Page
quizPage.appendChild(ol);
quizPage.appendChild(title);
quizPage.appendChild(timer);
quizPage.appendChild(footer);
quizPage.appendChild(contentDiv);
quizPage.appendChild(startBox);
quizPage.appendChild(startButton);
quizPage.appendChild(showCurrent);
// Main Content Div
contentDiv.appendChild(backBtn);
contentDiv.appendChild(nextBtn);
ol.appendChild(li);
// Show Current
showCurrent.style.display = 'block';
// Start Elements
startButton.style.display = 'block';
startButton.textContent = "Start";
startBox.style.fontSize = '1.5em';
// Footer
footer.style.display = 'block';
footer.textContent = "Prismatic Development Studios";
// Title
title.textContent = "Web Development Quiz";
title.style.display = 'block';
// Timer
timer.style.display = 'block';
timer.setAttribute('class', 'timer');
// startBox Text
startBox.textContent = "Welcome to the Prismatic Development Studios' web developer quiz. Click the start button to begin the timed quiz. You will have 15 minutes to complete this quiz, which will show your results immediately upon it's completion";
// Individual questions
// 1
const q1 = '1. What basic JavaScript method prints  a message to the developer?';
// console.log()
const oneA = "console.error()";
const oneB = "console.log()";
const oneC = "window.print()";
const oneD = "window.open()";
// 2
const q2 = '2. Choose the option that is not part of the 3 "stack"s of web development?';
// Front end, Back end, Full stack
const twoA = "Testing Frameworks";
const twoB = "Backend";
const twoC = "Front End";
const twoD = "Full Stack";
// 3
const q3 = '3. What is the difference between a "var" and a "const" in JavaScript?';
// A var is a value that can be changed multiple times 
const q4 = '4. What does the acronym "API" stand for?';;
//  Application programming interface
const q5 = '5. What is a turnary operator?';
// it's ahort hand syntax for an if statement
const q6 = '6. What is another name for a function in JavaScript?';
// Method
const q7 = '7. What is the statement that commonly follows an "if" statement?';
// Else
const q8 = '8. "What is the commonly used web framework invented by Facebook?';
// Reaact
const q9 = '9. What is another commonly used web framework that was invented by a Google employee?';
// Angular
const q10 = '10. "Which of the following is not a testing framework?';
// Jest, Mocha, Jasmine, Nightwatch, Joker
const bonus = "What is an urnary operator?";
// Questions Array
const quiz = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
const answers = [{
    oneA,
    oneB,
    oneC,
    oneD
}, {
    twoA,
    twoB,
    twoC,
    twoD
}];
for (let i = 0; i < quiz.length; i++) {
    li = 0;
    li++
    li = document.createElement('li');
    ol.appendChild(li).textContent = quiz[i];
}
// Start Variable
let start = false;
let time = 900000;
timer.style.marginLeft = "2%";
if (start === false) {
    nextBtn.style.display = 'none';
    backBtn.style.display = 'none';
    timer.style.display = 'none';
}
// Start quiz
let quizOver = false;

function startQuiz() {
    startButton.style.display = 'none';
    startBox.style.display = 'none';
    current = 1;
    ol.children[current].style.display = 'block';
    nextBtn.style.display = 'block';
    backBtn.style.display = 'block';
    timer.style.display = 'block';
    title.style.display = 'none';

    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes

        function tick() {
            //This script expects an element with an ID = "counter". You can change that to what ever you want. 
            var counter = timer;
            var current_minutes = mins - 1
            seconds--;
            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                if (mins > 1) {
                    countdown(mins - 1);
                }
            }
        }
        tick();
    }
    countdown(15);
}
// Initialize Current Question
let current = 0;
// Increment Current ?
function next() {
    if (current === quiz.length) {
        current = 0;
    }
    current++;
    ol.children.innerHTML = quiz[current];
    if (ol.children[current]) {
        ol.children[current].style.display = 'block';
        ol.children[current - 1].style.display = 'none';
    }
    if (current !== 10) {
        ol.children[10].style.display = 'none';
    }
    showCurrent.textContent = current + '/' + '10';
}
// Decrement Current ?
function back() {
    if (current < 0) {
        current = 10
    }
    current--;
    ol.children.innerHTML = quiz[current];
    if (ol.children[current]) {
        ol.children[current].style.display = 'block';
        ol.children[current + 1].style.display = 'none';
    }
    if (current <= 0) {
        current = 10;
    }
    if (current === 10) {
        ol.children[current].style.display = 'block';
    }
    showCurrent.textContent = current + '/' + '10';
}
// Next Btn Click Event Listener
nextBtn.addEventListener('click', () => {
    next();
});
// Next Btn Click Event Listener
backBtn.addEventListener('click', () => {
    back();
});
startButton.addEventListener('click', () => {
    startQuiz();
});
// Styling
//
//nextBtn
nextBtn.setAttribute("class", "nextBtn");
nextBtn.innerHTML = '&#187';
//nextBtn
backBtn.setAttribute("class", "backBtn");
backBtn.innerHTML = '&#171';
// Central Div
contentDiv.style.height = '100px';
contentDiv.style.width = '100vw';
contentDiv.style.display = 'block';
contentDiv.style.position = 'absolute';
// Start Button
startButton.style.position = 'absolute';
startButton.setAttribute('class', 'startBtn');
// startBox
startBox.setAttribute('class', 'startBox')
startBox.style.position = 'absolute';
// Misc Elements
showCurrent.setAttribute('class', 'current');
ol.setAttribute('class', 'li');
title.style.textAlign = 'center';