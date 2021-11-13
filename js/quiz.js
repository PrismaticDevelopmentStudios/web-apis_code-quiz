// DOM Elements
const title = $("#title");
const next = $('#nextBtn');
const back = $('#backBtn');
const startBox = $('.startBox');
const startBtn = $('#startBtn');
const timer = $('#timer');
const quizEl = $('#quiz');
const li = $('<LI>');
const p = $('<A>')
const div = $('<DIV>');
const button = $('<button class="answwers">Select</button>');

let current = 0;

// Individual questions
// 1
const q1 = '1. Which fundamental JavaScript method is used to display a messages to the developer?';
// Answers
const aA = "a. window.print()";
const aB = "b. console.log()";
const aC = "c. document.write()";
const aD = "d. window.open()";
// 2
const q2 = '2. Choose the option that is NOT part of the 3 "stack"s of web development?';
// Answers
const bA = "a. Testing frameworks";
const bB = "b. Backend";
const bC = "c. Front end";
const bD = "d. Full stack";
// 3
const q3 = '3. What is the difference between a "var" and a "const" in JavaScript?';
// Answers
const cA = 'a. Var can hold a variety of values';
const cB = 'b. Const is easily changeable';
const cC = 'c. Const is a constant value';
const cD = 'd. Var is an immutable value';
// 4
const q4 = '4. What does the acronym "API" stand for?';;
// Answers
const dA = 'a. Applied program iterations';
const dB = 'b. Acknowledged peripheral interference';
const dC = 'c. Analysis of page instances';
const dD = 'd. Application programming interface';
//5
const q5 = '5. What is a turnary operator?';
// Answers
const eA = 'a. One line syntax for an if statement';
const eB = 'b. Fetches data from an API';
const eC = 'c. Allows one to change a constant';
const eD = 'd. A mathematical method that rounds numbers';
// 6
const q6 = '6. What is another name for a function in JavaScript?';
// Answers
const fA = 'a. Descriptor';
const fB = 'b. Operator';
const fC = 'c. Operation';
const fD = 'd. Method';
// 7
const q7 = '7. What is the statement that commonly follows an "if" statement?';
// Answers
const gA = 'a. Then';
const gB = 'b. Which';
const gC = 'c. Else'; // Right
const gD = 'd. Or';
// 8
const q8 = '8. "What is the commonly used web framework invented by Facebook?';
// Answers
const hA = 'a. Vue.js';
const hB = 'b. React.js';
const hC = 'c. Jest';
const hD = 'd. Mocha';
// 9
const q9 = '9. What common method is used to loop over values?';
// Answers
const iA = 'a. Append';
const iB = 'b. Await';
const iC = 'c. For loop';
const iD = 'd. If statement';
//10
const q10 = '10. "Which of the following is not a testing framework?';
// Answers
const jA = 'a. Jest';
const jB = 'b. Django';
const jC = 'c. Mocha';
const jD = 'd. Jasmine';
// Bonus
const bonus = "What is an urnary operator?";
// const textArea = quizEl.append(li).html('<textarea></textarea>')

const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, bonus];
const answers = [{
        answer1: aA,
        answer2: aB,
        answer3: aC,
        answer4: aD
    },
    {
        answer1: bA,
        answer2: bB,
        answer3: bC,
        answer4: bD
    },
    {
        answer1: cA,
        answer2: cB,
        answer3: cC,
        answer4: cD
    },
    {
        answer1: dA,
        answer2: dB,
        answer3: dC,
        answer4: dD
    },
    {
        answer1: eA,
        answer2: eB,
        answer3: eC,
        answer4: eD
    },
    {
        answer1: fA,
        answer2: fB,
        answer3: fC,
        answer4: fD
    },
    {
        answer1: gA,
        answer2: gB,
        answer3: gC,
        answer4: gD
    },
    {
        answer1: hA,
        answer2: hB,
        answer3: hC,
        answer4: hD
    },
    {
        answer1: iA,
        answer2: iB,
        answer3: iC,
        answer4: iD
    },
    {
        answer1: jA,
        answer2: jB,
        answer3: jC,
        answer4: jD
    },
];

// Select Answer
function select() {
    console.log('clicked');
}

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
    let time = 900;
    let intervalID = setInterval(myCallback, 1000, time);
    timer.text('15:00');

    function myCallback() {
        time--;
        if (time === 0) {
            clearInterval(intervalID)
        }
        let min = Math.floor(time / 60);
        let sec = time - min * 60;
        if (sec < 10) {
            sec = '0' + sec
        }
        timer.text(min + ':' + sec);
        if (time === 0) {
            timer.text('Time Up').css({
                'margin-left': '50%',
                'margin-right': '50%'
            });
            next.hide();
            back.hide();
            quizEl.hide();
        }
    }
    for (let i = 0; i < questions.length; i++) {
        quizEl.append(li).html(
            '<div>' + questions[current] + '</div><br>' +
            '<div class="answers">' + answers[current].answer1 + '</div><br>' + '<div class="answers">' + answers[current].answer2 + '</div><br>' +
            '<div class="answers">' + answers[current].answer3 + '</div><br>' +
            '<div class="answers">' + answers[current].answer4 + '</div><br>'
        ).addClass('li');
    }
} // END Start Quiz END

// Hide Elements on Load
// Next 
next.click(function() {
    current++;
    if (current > 9) {
        current = 0
    };
    for (let i = 0; i < questions.length; i++) {
        quizEl.append(li).html(
            '<div>' + questions[current] + '</div><br>' +
            '<div class="answers">' + answers[current].answer1 + '</div><br>' + '<div class="answers">' + answers[current].answer2 + '</div><br>' +
            '<div class="answers">' + answers[current].answer3 + '</div><br>' +
            '<div class="answers">' + answers[current].answer4 + '</div><br>'
        ).addClass('li');
    }
});
// Back
back.click(function() {
    current--;
    if (current < 0) {
        current = 9;
    }
    for (let i = 0; i < questions.length; i++) {
        quizEl.append(li).html(
            '<div>' + questions[current] + '</div><br>' +
            '<div class="answers">' + answers[current].answer1 + '</div><br>' + '<div class="answers">' + answers[current].answer2 + '</div><br>' +
            '<div class="answers">' + answers[current].answer3 + '</div><br>' +
            '<div class="answers">' + answers[current].answer4 + '</div><br>'
        ).addClass('li');
    }
});
startBtn.click(function() {
    startQuiz();
});
$(document).on('click', '.answers', function(e) {
    console.log(e.target);
    $(this).css({
        'background-color': 'yellow',
        'color': 'black'
    });
});