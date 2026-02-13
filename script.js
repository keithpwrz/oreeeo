const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const bottom = document.getElementById("bottom");

const noTexts = [
  "are you sure?",
  "are you sure you're sure?",
  "you better say yes",
  "bab pleaseeeeee",
  "just think about it 🥺",
  "if you say no i'll be very sad"
];

// Aggressive scaling steps (so it actually fills like the video)
// click 1..5 => scales[0..4]; click 6 => final fullscreen state
const scales = [1.55, 2.15, 2.95, 3.95, 5.25];

let clicks = 0;

yesBtn.addEventListener("click", () => {
  window.location.href = "yay.html";
});

noBtn.addEventListener("click", () => {
  // Set exact NO text for this click
  if (clicks < noTexts.length) {
    noBtn.textContent = noTexts[clicks];
  }

  clicks += 1;

  // Grow YES a lot each click (1..5)
  if (clicks <= 5) {
    yesBtn.style.transform = `scale(${scales[clicks - 1]})`;
  }

  // After the 5th click, make NO tiny + in the corner (hard to click)
  if (clicks === 5) {
    bottom.classList.add("hard");
  }

  // Final (6th) click: brief moment then ONLY YES fills under the question
  if (clicks === 6) {
    setTimeout(() => {
      bottom.classList.add("final");
    }, 200);
  }
});
