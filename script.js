// Quote of the Day
const quotes = [
    "With great power, there must also come great responsibility.",
    "The multiverse is a concept about which we know frighteningly little.",
    "You’re flying out into the darkness to fight ghosts, Peter.",
    "I’m something of a scientist myself. - Norman Osborn",
    "Peter, you’re struggling to have everything you want, while the world tries to make you choose."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

// Trivia Quiz
const correctAnswer = "Tom Holland";  // Correct answer for the quiz question
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const result = document.getElementById("result");
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        result.textContent = "Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "Oops, try again!";
        result.style.color = "red";
    }
}
