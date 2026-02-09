const pages = document.querySelectorAll(".page");
const card = document.querySelector(".card");
const music = document.getElementById("bg-music");
let musicStarted = false;

/* Page switching */
function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

document.getElementById("yes").onclick = () => showPage("page2");
document.getElementById("next").onclick = () => showPage("page3");

/* Gentle mouse movement (like the video) */
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 35;
  const y = (window.innerHeight / 2 - e.clientY) / 35;
  card.style.transform = `translate(${x}px, ${y}px)`;

  if (!musicStarted) {
    music.play().catch(()=>{});
    musicStarted = true;
  }
});

/* WhatsApp share */
const message = encodeURIComponent(
  "💌 Proof that distance means nothing when the intention is real.\n\nThis love letter was made just for you ❤️"
);

document.getElementById("whatsapp").href =
  `https://wa.me/?text=${message}`;

/* Falling petals */
const petals = document.getElementById("petals");

setInterval(() => {
  const petal = document.createElement("img");
  petal.src = "https://pngimg.com/uploads/rose_petals/rose_petals_PNG570.png";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 10 + Math.random() * 6 + "s";
  petals.appendChild(petal);

  setTimeout(() => petal.remove(), 16000);
}, 1200);