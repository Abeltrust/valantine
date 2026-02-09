const scenes = document.querySelectorAll(".scene");
const card = document.querySelector(".card");
const music = document.getElementById("music");
let index = 0;
let started = false;

// Auto scene flow
setTimeout(nextScene, 3000);
setTimeout(nextScene, 6500);

function nextScene() {
  if (index < scenes.length - 1) {
    scenes[index].classList.remove("active");
    index++;
    scenes[index].classList.add("active");
  }
}

// Buttons
document.getElementById("yes").onclick = nextScene;
document.getElementById("next").onclick = nextScene;

// Gentle mouse movement
document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;
  card.style.transform = `translate(${x}px, ${y}px)`;

  if (!started) {
    music.play().catch(()=>{});
    started = true;
  }
});

// WhatsApp message
const msg = encodeURIComponent(
  "💌 Proof that distance means nothing when the intention is real.\n\nThis love letter was made just for you ❤️"
);
document.getElementById("wa").href = `https://wa.me/?text=${msg}`;

// Falling petals
const petals = document.getElementById("petals");
setInterval(() => {
  const p = document.createElement("img");
  p.src = "https://pngimg.com/uploads/rose_petals/rose_petals_PNG570.png";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 12 + Math.random() * 6 + "s";
  petals.appendChild(p);
  setTimeout(() => p.remove(), 18000);
}, 1500);