// Hero Image Carousel
const heroImgs = document.querySelectorAll('.hero-img');
let heroIndex = 0;

function rotateHeroImages() {
  heroImgs.forEach(img => img.classList.remove('active'));
  heroImgs[heroIndex].classList.add('active');
  heroIndex = (heroIndex + 1) % heroImgs.length;
}

setInterval(rotateHeroImages, 4000);
rotateHeroImages(); // Initial display

// Gallery Slider
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

// Share Button
document.getElementById('shareBtn').addEventListener('click', async () => {
  if (navigator.share) {
    await navigator.share({
      title: 'Cedric & Ruth Royal Wedding',
      text: 'Celebrate our big day with us!',
      url: window.location.href
    });
  } else {
    alert('Sharing is not supported on this device.');
  }
});

// Hamburger Menu (Optional future feature)
document.getElementById('hamburger').addEventListener('click', () => {
  const nav = document.getElementById('navLinks');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
