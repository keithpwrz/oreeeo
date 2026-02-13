const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bottom = document.getElementById("bottom");

const noTexts = [
  "are you sure?",
  "are you sure you're sure?",
  "you better say yes",
  "bab pleaseeeeee",
  "just think about it 🥺",
  "if you say no i'll be very sad"
];

// Size steps for YES after each No click (1..6)
const yesSizes = [
  { w: 220, h: 80,  fs: 26 },  // after 1st No
  { w: 320, h: 100, fs: 30 },  // after 2nd No
  { w: 440, h: 130, fs: 34 },  // after 3rd No
  { w: 560, h: 170, fs: 38 },  // after 4th No
  { w: 700, h: 220, fs: 42 }   // after 5th No
  // after 6th No -> fullscreen handled separately
];

let clicks = 0;

yesBtn.addEventListener("click", () => {
  window.location.href = "yay.html";
});

noBtn.addEventListener("click", () => {
  // Set NO text exactly in your order
  if (clicks < noTexts.length) {
    noBtn.textContent = noTexts[clicks];
  }

  clicks += 1;

  // Grow YES each click
  if (clicks <= 5) {
    const s = yesSizes[clicks - 1];
    yesBtn.style.width = `${s.w}px`;
    yesBtn.style.height = `${s.h}px`;
    yesBtn.style.fontSize = `${s.fs}px`;
  }

  // Final click: YES becomes full width + full height of the bottom section
  if (clicks === noTexts.length) {
    bottom.classList.add("final");
    noBtn.style.display = "none";   // last No click is the last possible click
  }
});
