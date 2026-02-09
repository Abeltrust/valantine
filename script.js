const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const card = document.getElementById("card");

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>Yay! 💖</h1>
    <p style="margin:14px 0;">You just made my heart smile.</p>
    <i class="bi bi-envelope-heart-fill" style="font-size:38px;color:#8a2d2d;"></i>
  `;
});

/* Fun Canva-style behavior */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 70 + "%";
  noBtn.style.left = Math.random() * 70 + "%";
});