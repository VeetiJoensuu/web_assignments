const questions = [
    {
        question: "What is the capital of Finland?",
        choices: ["Helsinki", "Espoo", "Turku", "Oulu"],
        answer: "Helsinki"
    },
    {
        question: "What language is primarily spoken in Finland?",
        choices: ["Finnish", "Swedish", "English", "German"],
        answer: "Finnish"
    },
    {
        question: "Which Finnish company is famous for mobile phones?",
        choices: ["Nokia", "Samsung", "Apple", "Sony"],
        answer: "Nokia"
    }
];

function loadQuiz() {
    const container = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <p>${q.question}</p>
            ${q.choices.map(choice => `<label><input type="radio" name="q${index}" value="${choice}">${choice}</label>`).join('<br>')}
        `;
        container.appendChild(questionDiv);
    });
}

function calculateScore() {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });
    return score;
}

document.getElementById('submit-btn').addEventListener('click', () => {
    const result = document.getElementById('result');
    result.textContent = `You scored ${calculateScore()} out of ${questions.length}`;
});

loadQuiz();
