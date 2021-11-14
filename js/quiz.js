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
const submitBtn = $('#submit');
const scoreBoard = $('#scores');
const scoreBtn = $('#scoreBtn');

submitBtn.addClass('submit');

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
const q3 = `3. What does the non null assertion '!' operator do?`;
// Answers
const cA = 'a. It adds emphasis to a string';
const cB = 'b. Reverses the order of an array';
const cC = `c. It denotes the opposite case of the specified value`;
const cD = 'd. It remove the need for key value pairs ';
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

const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, bonus];
const answers = [{
        answer1: aA,
        answer2: aB,
        answer3: aC,
        answer4: aD,
        correct: aB
    },
    {
        answer1: bA,
        answer2: bB,
        answer3: bC,
        answer4: bD,
        correct: bA
    },
    {
        answer1: cA,
        answer2: cB,
        answer3: cC,
        answer4: cD,
        correct: cC
    },
    {
        answer1: dA,
        answer2: dB,
        answer3: dC,
        answer4: dD,
        correct: dD
    },
    {
        answer1: eA,
        answer2: eB,
        answer3: eC,
        answer4: eD,
        correct: eA
    },
    {
        answer1: fA,
        answer2: fB,
        answer3: fC,
        answer4: fD,
        correct: fD
    },
    {
        answer1: gA,
        answer2: gB,
        answer3: gC,
        answer4: gD,
        correct: gC
    },
    {
        answer1: hA,
        answer2: hB,
        answer3: hC,
        answer4: hD,
        correct: hB
    },
    {
        answer1: iA,
        answer2: iB,
        answer3: iC,
        answer4: iD,
        correct: iC
    },
    {
        answer1: jA,
        answer2: jB,
        answer3: jC,
        answer4: jD,
        correct: jB
    },
];

// Hides Back & Next Buttons on Page Load
next.hide();
back.hide();
submitBtn.hide();
// Start Quiz
let start = false;
let time = 900;
let initials

function startQuiz() {
    initials = prompt('Eenter your initials');
    start = true;
    next.show();
    back.show();
    submitBtn.show();
    title.hide();
    startBox.hide();
    scoreBoard.hide();
    // Timer Func
    let intervalID = setInterval(myCallback, 1000, time);
    timer.text('15:00');

    function myCallback() {
        time--;
        if (time === 0) {
            clearInterval(intervalID);
            finished();
        }
        let min = Math.floor(time / 60);
        sec = time - min * 60;
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
        return time;
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


function finished() {
    let affirm = confirm(`Are you sure you want to exit and submit your current score?`)
    if (affirm) {
        console.log(correct, 'submit');
        if (score !== undefined) {
            localStorage.setItem(date, score);
        }
    } else {
        return
    }
    sessionStorage.clear();
    location.reload();
}

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

let date;
let score;

let correct = 0;
let incorrect = 0;
$(document).on('click', '.answers', function(e) {
    if (current === 0) {
        if (e.target.innerHTML === answers[0].answer2) {
            sessionStorage.setItem('1', 'Correct');
            correct++;
        } else {
            sessionStorage.setItem('1', 'Incorrect');
            incorrect++;
        }
    }
    if (current === 1) {
        if (e.target.innerHTML === answers[1].answer1) {
            sessionStorage.setItem('2', 'Correct');
            correct++;
        } else {
            sessionStorage.setItem('2', 'Incorrect');
            incorrect++;
        }
    }
    if (current === 2) {
        if (e.target.innerHTML === answers[2].answer3) {
            sessionStorage.setItem('3', 'Correct');
            correct++;
        } else {
            sessionStorage.setItem('3', 'Incorrect');
            incorrect++;
        }
    }
    if (current === 3) {
        if (e.target.innerHTML === answers[3].answer4) {
            sessionStorage.setItem('4', 'Correct');
            correct++;
        } else {
            sessionStorage.setItem('4', 'Incorrect');
            incorrect++;
        }
    }
    if (current === 4) {
        if (e.target.innerHTML === answers[4].answer1) {
            sessionStorage.setItem('5', 'Correct');
            correct++;
        } else {
            sessionStorage.setItem('5', 'Incorrect');
            incorrect++;
        }
    }
    if (current === 5) {
        if (e.target.innerHTML === answers[5].answer4) {
            sessionStorage.setItem('6', 'Correct');
            correct++;
        } else {
            sessionStorage.setItem('6', 'Incorrect');
            incorrect++;
        }
    }
    if (current === 6) {
        if (e.target.innerHTML === answers[6].answer3) {
            sessionStorage.setItem('7', 'Correct');
            correct++;
        } else {
            sessionStorage.setItem('7', 'Incorrect');
            incorrect++;
        }
    }
    if (current === 7) {
        if (e.target.innerHTML === answers[7].answer2) {
            sessionStorage.setItem('8', 'Correct');
            correct++;
        } else {
            sessionStorage.setItem('8', 'Incorrect');
            incorrect++;
        }
    }
    if (current === 8) {
        if (e.target.innerHTML === answers[8].answer3) {
            sessionStorage.setItem('9', 'Correct');
            correct++;
        } else {
            sessionStorage.setItem('9', 'Incorrect');
            incorrect++;
        }
    }
    if (current === 9) {
        if (e.target.innerHTML === answers[9].answer2) {
            correct++;
        } else {
            sessionStorage.setItem('10', 'Incorrect');
            incorrect++;
        }
    }
    date = new Date;
    score = correct + '/10 ' + initials.valueOf();
});

function submit() {
    if (score !== undefined) {
        localStorage.setItem(date, score);
        quizEl.hide();
        next.hide();
        back.hide();
        timer.hide();
        startBox.show();
        finished();
    }
}


submitBtn.on('click', function() {
    submit()
});

$(document).on('click', '#exit', function() {
    finished();
});
let scores = [];

function getScores() {

    scores = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        scores.push(localStorage.getItem(keys[i]));
    }
    scores = scores.join(' ');
    return scores;
}

scoreBtn.on('click', function() {
    getScores();
    scoreBoard.text(scores);
    scoreBoard.addClass('scoreBoard')
});