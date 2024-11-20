function gomb() {
    const correctAnswers = {
        valasz: "b",  // A 1. kérdés helyes válasza a '2. válasz'
        valasz: "b2"   // A 2. kérdés helyes válasza az '2. válasz'
    };

    // Tömb a kérdésekkel és azok válaszaival
    const questions = ["b", "b2"];

    // Ellenőrizze minden kérdés válaszát
    questions.forEach(function(question) {
        // Válaszkiválasztás
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);

        // Helyes válasz ellenőrzése
        const resultElement = document.getElementById(`result${question.charAt(1)}`);
        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswers[question]) {
                resultElement.innerHTML = "Helyes válasz!";
                resultElement.className = "result correct";
            } else {
                resultElement.innerHTML = "Hibás válasz!";
                resultElement.className = "result incorrect";
            }
        } else {
            resultElement.innerHTML = "Kérlek válassz egy választ!";
            resultElement.className = "result incorrect";
        }
    });
}