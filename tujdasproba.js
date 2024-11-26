// A gombhoz tartozó esemény kezelése
function gomb() {
    const correctAnswers = {
        kerdes1: 2,  // Helyes válasz a 2-es
        kerdes2: 2   // Helyes válasz a 2-es
    };

    // Válaszok kiértékelése
    // Első kérdés
    const valasz1 = document.querySelector('input[name="kerdes1"]:checked');
    const result1 = document.getElementById("result1");

    if (answer1 && answer1.value === "2") {
        result1.textContent = "Helyes válasz!";
        result1.classList.add("correct");
        result1.classList.remove("incorrect");
    } else {
        result1.textContent = "Hibás válasz!";
        result1.classList.add("incorrect");
        result1.classList.remove("correct");
    }

    // Második kérdés
    const answer2 = document.querySelector('input[name="kerdes2"]:checked');
    const result2 = document.getElementById("result2");
    if (answer2 && answer2.value === "2") {
        result2.textContent = "Helyes válasz!";
        result2.classList.add("correct");
        result2.classList.remove("incorrect");
    } else {
        result2.textContent = "Hibás válasz!";
        result2.classList.add("incorrect");
        result2.classList.remove("correct");
    }
}