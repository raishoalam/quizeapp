const questions = [{
        question: "The Full form of CSS is?",
        answers: [{
                text: "Cascading Style Sheets",
                correct: true
            },
            {
                text: "Colored Special Sheets",
                correct: false
            },
            {
                text: "Color and Style Sheets",
                correct: false
            },
            {
                text: "None of the above",
                correct: false
            },

        ]
    },

    {
        question: "How can we change the background color of an element?",
        answers: [{
                text: "background-color",
                correct: true
            },
            {
                text: "color",
                correct: false
            },
            {
                text: "both A and B",
                correct: false
            },
            {
                text: "None of the above",
                correct: false
            },
        ]
    },
    {
        question: "How can we change the text color of an element?",
        answers: [{
                text: "background-color",
                correct: false
            },
            {
                text: "color",
                correct: true
            },
            {
                text: "Both A and B",
                correct: false
            },
            {
                text: "None of the above",
                correct: false
            },
        ]
    },
    {
        question: "In how many ways can CSS be written in?",
        answers: [{
                text: "1",
                correct: false
            },
            {
                text: "2",
                correct: false
            },
            {
                text: "3",
                correct: true
            },
            {
                text: "4",
                correct: false
            },
        ]
    },

    {
        question: "What type of CSS is the following code snippet? ",
        answers: [{
                text: "Inline",
                correct: true
            },
            {
                text: "Internal",
                correct: false
            },
            {
                text: "External",
                correct: false
            },
            {
                text: "None of the above",
                correct: false
            },
        ]
    },

    {
        question: "What type of CSS is generally recommended for designing large web pages? ",
        answers: [{
                text: "Inline",
                correct: false
            },
            {
                text: "Internal",
                correct: false
            },
            {
                text: "External",
                correct: true
            },
            {
                text: "None of the above",
                correct: false
            },
        ]
    },


    {
        question: "Which HTML tag is used to declare internal CSS? ",
        answers: [{
                text: "style",
                correct: true
            },
            {
                text: "link",
                correct: false
            },
            {
                text: "script",
                correct: false
            },
            {
                text: "None of the above",
                correct: false
            },
        ]
    },

    {
        question: "Which of the following CSS selectors are used to specify a group of elements? ",
        answers: [{
                text: "tag",
                correct: false
            },
            {
                text: "id",
                correct: false
            },
            {
                text: "class",
                correct: true
            },
            {
                text: "both class and tag",
                correct: false
            },
        ]
    },

    {
        question: "Which of the following has introduces text, list,box, margin,color,and background properties? ",
        answers: [{
                text: "HTML",
                correct: false
            },
            {
                text: "PHP",
                correct: false
            },
            {
                text: "CSS",
                correct: true
            },
            {
                text: "Ajax",
                correct: false
            },
        ]
    },

    {
        question: "Which of the following CSS framework is used to create a responsive designe? ",
        answers: [{
                text: "django",
                correct: false
            },
            {
                text: "rails",
                correct: false
            },
            {
                text: "larawell",
                correct: false
            },
            {
                text: "bootstrap",
                correct: true
            },
        ]
    },

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");

        score++;

    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.textContent = "hello"
    questionElement.innerHTML = `Congrats Your Test Pass <br> You  scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();





var minutes = 5;
var seconds = minutes * 60;

function updateTimeout() {
    var minutesLeft = Math.floor(seconds / 60);
    var secondsLeft = seconds % 60;

    document.getElementById("timeout").innerHTML = minutesLeft + "m" + " : " + secondsLeft + "s";
    seconds--;

    if (seconds < 0) {
        clearInterval(intervalId);
        document.getElementById("timeout").innerHTML = "TIMEOUT";
    }
}

var intervalId = setInterval(updateTimeout, 1000);