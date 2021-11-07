// DOM Element for Quiz Generation
const quizPage = document.getElementById('quiz');
// Ordered List Creation
const ol = document.createElement('ol');
quizPage.appendChild(ol);
// Individual questions
const q1 = 'Hi';
const q2 = 'Hi';
const q3 = 'Hi';
const q4 = 'Hi';
const q5 = 'Hi';
const q6 = 'Hi';
const q7 = 'Hi';
const q8 = 'Hi';
const q9 = 'Hi';
const q10 = 'Hi';
// Questions Array
const quiz = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
for (let i = 0; i < quiz.length; i++) {
    let li = 0;
    li++
    li = document.createElement('li');
    ol.appendChild(li).textContent = quiz[i];
}