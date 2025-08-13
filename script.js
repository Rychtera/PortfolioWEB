
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


// Create tooltip element
const tooltip = document.createElement('div');
tooltip.className = 'img-tooltip';
tooltip.textContent = 'Click to enlarge';
document.body.appendChild(tooltip);

// Select all gallery images (adjust selector to match your gallery)
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('mousemove', e => {
    tooltip.style.left = e.clientX + 15 + 'px';
    tooltip.style.top = e.clientY + 15 + 'px';
    tooltip.style.opacity = '1';
  });

  img.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });
});
