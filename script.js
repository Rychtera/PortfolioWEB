
function setLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
