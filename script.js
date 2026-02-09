// Envelope click logic
document.querySelectorAll(".envelope").forEach(env => {
    env.addEventListener("click", () => {
      document.querySelectorAll(".envelope").forEach(e => e.classList.remove("open"));
      env.classList.add("open");
      env.querySelector(".message").textContent = env.dataset.message;
    });
  });
  
  // WhatsApp share
  const message = encodeURIComponent(
    "💌 Someone sent you a Love Mail.\n\nOpen it here ❤️"
  );
  
  document.getElementById("wa").href =
    `https://wa.me/?text=${message} ${window.location.href}`;