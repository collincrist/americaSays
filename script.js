const categories = {
    "Fruits": ["Apple", "Banana", "Orange", "Mango"],
};
let category = "Fruits";
let answers = categories[category];
let hiddenAnswers = answers.map(word => word[0] + "_".repeat(word.length - 1));
let score = 0;

document.getElementById("category").innerText = `Category: ${category}`;
document.getElementById("answers").innerText = hiddenAnswers.join(" | ");

document.getElementById("submitBtn").addEventListener("click", () => {
    const guess = document.getElementById("guess").value.trim();
    if (answers.includes(guess)) {
        const index = answers.indexOf(guess);
        hiddenAnswers[index] = guess;
        document.getElementById("answers").innerText = hiddenAnswers.join(" | ");
        score += 10;
        document.getElementById("score").innerText = `Score: ${score}`;
    }
    document.getElementById("guess").value = "";
});
