// Hero Image Carousel
const heroImages = document.querySelectorAll('.hero-img');
let heroIndex = 0;
function cycleHeroImages() {
  heroImages.forEach((img, idx) => img.classList.remove('active'));
  heroImages[heroIndex].classList.add('active');
  heroIndex = (heroIndex + 1) % heroImages.length;
}
setInterval(cycleHeroImages, 5000);
cycleHeroImages();

// Gallery Slider
const galleryImages = document.querySelectorAll('.gallery-img');
const leftBtn = document.querySelector('.gallery-nav.left');
const rightBtn = document.querySelector('.gallery-nav.right');
let galleryIndex = 0;
function showGalleryImage(index) {
  galleryImages.forEach((img, idx) => img.classList.remove('active'));
  galleryImages[index].classList.add('active');
}
leftBtn.addEventListener('click', () => {
  galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  showGalleryImage(galleryIndex);
});
rightBtn.addEventListener('click', () => {
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  showGalleryImage(galleryIndex);
});
showGalleryImage(galleryIndex);

// Share Button
const shareBtn = document.getElementById('shareBtn');
shareBtn.addEventListener('click', async () => {
  if (navigator.share) {
    await navigator.share({
      title: 'Cedric & Ruth Royal Wedding',
      text: 'Celebrate our big day with us!',
      url: window.location.href
    });
  } else {
    alert('Sharing not supported on this device.');
  }
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});
