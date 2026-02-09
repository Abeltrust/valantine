const messages = [
    "You are my favorite place to be.",
    "Every day with you feels intentional.",
    "You calm my heart without trying.",
    "Loving you is the easiest thing I do.",
    "You make ordinary moments special.",
    "Distance never changed how I feel.",
    "My heart chose you quietly.",
    "You are home to me.",
    "I’d choose you in every lifetime.",
    "Will you be my Valentine? 💖"
  ];
  
  let index = 0;
  
  const envelope = document.getElementById("envelope");
  const messageEl = document.getElementById("message");
  const button = document.getElementById("nextBtn");
  
  function openEnvelope() {
    envelope.classList.add("open");
    messageEl.textContent = messages[index];
  }
  
  function next() {
    if (index < messages.length - 1) {
      envelope.classList.remove("open");
      index++;
      setTimeout(openEnvelope, 400);
    } else {
      showShare();
    }
  }
  
  function showShare() {
    document.querySelector(".card").innerHTML = `
      <h2 style="font-family:Allura;color:#b71c1c;font-size:36px;">
        Share This Love 💌
      </h2>
      <p>This letter was written with intention.</p>
      <a href="https://wa.me/?text=${encodeURIComponent(
        "💌 Someone sent you a Love Mail. Open it here ❤️ " + window.location.href
      )}" target="_blank">
        <button class="whatsapp">
          <i class="bi bi-whatsapp"></i> Share on WhatsApp
        </button>
      </a>
    `;
  }
  
  button.addEventListener("click", () => {
    if (!envelope.classList.contains("open")) {
      openEnvelope();
    } else {
      next();
    }
  });