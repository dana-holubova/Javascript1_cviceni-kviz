document.querySelector(".question").textContent = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon."

const user_answer = prompt("Odpovězte na otázku: ")

document.querySelector(".answer__text").textContent = user_answer

const answer = document.querySelector(".answer")

if (user_answer === "Bell") { answer.classList.add("answer--correct") }
else { answer.classList.add("answer--wrong") }
