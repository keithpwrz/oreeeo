const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const noTexts = [
  "are you sure?",
  "are you sure you're sure?",
  "you better say yes",
  "bab pleaseeeeee",
  "just think about it 🥺",
  "if you say no i'll be very sad"
];

let clicks = 0;

yesBtn.addEventListener("click", () => {
  window.location.href = "yay.html";
});

noBtn.addEventListener("click", () => {
  // Update No text EXACTLY in your order
  if (clicks < noTexts.length) {
    noBtn.textContent = noTexts[clicks];
  }

  clicks += 1;

  // Grow YES each time (progressively)
  const scale = Math.min(2.2, 1 + clicks * 0.22);
  yesBtn.style.transform = `scale(${scale})`;

  // On the LAST message, make YES cover the entire No button area
  if (clicks === noTexts.length) {
    yesBtn.classList.add("cover");
    noBtn.style.visibility = "hidden";
  }
});
