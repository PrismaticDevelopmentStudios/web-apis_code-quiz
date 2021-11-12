// DOM Elements
const title = $("#title");
const next = $('#nextBtn');
const back = $('#backBtn');
const startBox = $('.startBox');
const startBtn = $('#startBtn');
const timer = $('#timer');
const quizEl = $('#quiz');
const li = $('<LI>');

let current = 0;
let started = false;

// Individual questions
// 1
const q1 = '1. Which fundamental JavaScript object is used to display a messages to the developer?';
// Answers
const aA = "window.print()";
const aB = "console.log()";
const aC = "document.write()";
const aD = "window.open()";
// 2
const q2 = '2. Choose the option that is NOT part of the 3 "stack"s of web development?';
// Answers
const bA = "Testing Frameworks";
const bB = "Backend";
const bC = "Front End";
const bD = "Full Stack";
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

const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
const answers1 = [aA, aB, aC, aD];
const answers2 = [bA, bB, bC, bD];
const answers3 = [];
const answers4 = [];
const answers5 = [];
const answers6 = [];
const answers7 = [];
const answers8 = [];
const answers9 = [];
const answers10 = [];

// Hides Back & Next Buttons on Page Load
next.hide();
back.hide();
// Start Quiz
let start = false;

function startQuiz() {
    start = true;
    next.show();
    back.show();
    title.hide();
    startBox.hide();
    // Timer Func
    let time = 90000;
    var intervalID = setInterval(myCallback, 1000, time);
    timer.text(time);
    let min;
    let sec;

    function myCallback() {
        time--;
        min = Math.floor(time / 6000);
        sec = ((time % 60000) / 1000).toFixed(0);
        if (time <= 1) {
            clearInterval(intervalID)
        }
        timer.text(time);
    }
    started = true;
    quizEl.append(li).text(questions[current]).addClass('li');
} // END Start Quiz END

//Hide Elements on Load
// Next 
next.click(function() {
    current++;
    if (current > 9) {
        current = 0
    };
    quizEl.append(li).text(questions[current]);
    console.log(questions[current]);
});
// Back
back.click(function() {
    current--;
    if (current < 0) {
        current = 9;
    }
    quizEl.append(li).text(questions[current]);
    console.log(questions[current]);
});
startBtn.click(function() {
    startQuiz();
});