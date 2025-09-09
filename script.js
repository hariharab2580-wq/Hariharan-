// Typing Effect

const typingText = "Hariharan | Portfolio";

let i = 0;

const typingElement = document.querySelector(".typing");

function typeEffect() {

  if (i < typingText.length) {

    typingElement.textContent += typingText.charAt(i);

    i++;

    setTimeout(typeEffect, 100);

  }

}

typeEffect();

// Dark Mode Toggle

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  toggleBtn.textContent =

    document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";

});