// Entire Page Element -not currently being used
const quizPage = document.getElementById('quiz');
// DOM Elements for Quiz Generation
const nextBtn = document.createElement('button');
const backBtn = document.createElement('button');
const showCurrent = document.createElement('h1');
const title = document.createElement('h1');
const timer = document.createElement('h2');
const footer = document.createElement('footer')
// Ordered List Creation
const ol = document.createElement('ol');
let li = document.createElement('li');
// Appending the DOM Elements
quizPage.appendChild(title);
quizPage.appendChild(timer);
quizPage.appendChild(footer);
footer.style.display = 'block';
footer.textContent = "Prismatic Development Studios";
title.textContent = "Web Development Quiz";
title.style.display = 'block';
timer.style.display = 'block';
quizPage.appendChild(ol);
quizPage.appendChild(nextBtn);
quizPage.appendChild(backBtn);
ol.appendChild(li);
// Individual questions
const q1 = '1. What basic JavaScript method that prints out values?'
//  Application programming interface
const q2 = '2. Which of these options are part of the 3 different "stack"s of web development?';
// Front end, Back end, Full stack
const q3 = '3. What is the difference between a "var" and a "const" in JavaScript?';
// A var is a value that can be changed multiple times 
const q4 = '4. What does the acronym "API" stand for?';;
// condole.log()
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
const bonus = "What is an urnary operator?"

// Questions Array
const quiz = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
for (let i = 0; i < quiz.length; i++) {
    li = 0;
    li++
    li = document.createElement('li');
    ol.appendChild(li).textContent = quiz[i];
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
}
// Next Btn Click Event Listener
nextBtn.addEventListener('click', () => {
    next();
});
// Next Btn Click Event Listener
backBtn.addEventListener('click', () => {
    back();
});
// Styling
//nextBtn
nextBtn.setAttribute("class", "nextBtn");
nextBtn.innerHTML = '&#187';
nextBtn.style.fontSize = '2em';
//nextBtn
backBtn.setAttribute("class", "backBtn");
backBtn.innerHTML = '&#171';
backBtn.style.fontSize = '2em';
ol.setAttribute('class', 'li');
title.style.textAlign = 'center';
footer.style.bottom = 0;
footer.style.position = 'fixed';
// footer.style.left = "50%";
// footer.style.right = "50%";
footer.style.textAlign = "";
footer.style.fontWeight = 900;