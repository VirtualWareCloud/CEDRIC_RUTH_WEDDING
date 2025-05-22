// Hero Image Carousel
const heroImgs = document.querySelectorAll('.hero-img');
let heroIndex = 0;

function rotateHeroImages() {
  heroImgs.forEach(img => img.classList.remove('active'));
  heroImgs[heroIndex].classList.add('active');
  heroIndex = (heroIndex + 1) % heroImgs.length;
}
setInterval(rotateHeroImages, 4000);
rotateHeroImages();

// Gallery
const galleryImgs = document.querySelectorAll('.gallery-img');
let galleryIndex = 0;

function showGalleryImage(index) {
  galleryImgs.forEach(img => img.classList.remove('active'));
  galleryImgs[index].classList.add('active');
}
document.querySelector('.gallery-nav.left').addEventListener('click', () => {
  galleryIndex = (galleryIndex - 1 + galleryImgs.length) % galleryImgs.length;
  showGalleryImage(galleryIndex);
});
document.querySelector('.gallery-nav.right').addEventListener('click', () => {
  galleryIndex = (galleryIndex + 1) % galleryImgs.length;
  showGalleryImage(galleryIndex);
});
showGalleryImage(galleryIndex);

// Share button
// Share via WhatsApp
document.getElementById('shareBtn').addEventListener('click', () => {
  const message = `💍✨ You're Invited! ✨💍
Join us as we celebrate love, laughter, and happily ever after.
We're thrilled to announce — Cedric & Ruth are getting married! 💛

📅 View the details, RSVP, and celebrate with us here:
👉 https://cedric-ruth-wedding.vercel.app

💫 Let the countdown to forever begin! 💫`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
});


// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
});
