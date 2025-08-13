
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


const hoverArea = document.getElementById('hover-area');
const tooltip = document.getElementById('tooltip');

hoverArea.addEventListener('mousemove', (e) => {
  tooltip.style.display = 'block';
  tooltip.style.left = e.pageX + 10 + 'px'; // offset from cursor
  tooltip.style.top = e.pageY + 10 + 'px';
});

hoverArea.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});
