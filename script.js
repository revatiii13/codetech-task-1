const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of the above"
        ],
        answer: 0
    },
    {
        question: "What is the capital of India?",
        options: [
            "Mumbai",
            "New Delhi",
            "Kolkata",
            "Chennai"
        ],
        answer: 1
    },
    {
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        answer: 1
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        options: [
            "Jawaharlal Nehru",
            "Bhagat Singh",
            "Mahatma Gandhi",
            "Subhash Chandra Bose"
        ],
        answer: 2
    },
    {
        question: "Which language is used to make web pages interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";
    optionsEl.innerHTML = "";

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}
