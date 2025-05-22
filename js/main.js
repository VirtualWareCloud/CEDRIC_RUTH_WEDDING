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

// ✅ Place this after the hamburger menu toggle

function sendToWhatsApp() {
  const name = document.getElementById('rsvpName').value;
  const email = document.getElementById('rsvpEmail').value;
  const whatsapp = document.getElementById('rsvpWhatsapp').value;
  const attendance = document.getElementById('rsvpAttendance').value;
  const message = document.getElementById('rsvpMessage').value;

  const fullMessage = `📩 *[WEDDING RSVP]* 📩
--------------------------------
👤 Name: ${name}
📧 Email: ${email}
📱 WhatsApp: ${whatsapp}
✅ Attending: ${attendance}
📝 Message: ${message}
--------------------------------
Sent via: https://cedric-ruth-wedding.vercel.app`;

  const encoded = encodeURIComponent(fullMessage);
  const link = `https://wa.me/27829627848?text=${encoded}`;
  window.open(link, '_blank');

  alert('Thank you for your RSVP! 💛 Your response has been sent to Ruth.');
}
// Hero Title Text Animation (only on index.html)
if (document.getElementById('animatedTitle')) {
  const titleText = "Cedric & Ruth\nWe're Getting Married";
  const animatedTitle = document.getElementById("animatedTitle");
  const rsvpBtn = document.getElementById("rsvpHeroBtn");

  function animateTextLetterByLetter(text, container, delay = 3000) {
    setTimeout(() => {
      container.style.opacity = 1;
      const chars = text.split('');
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === '\n' ? '\n' : char;
        container.appendChild(span);
        setTimeout(() => {
          span.style.opacity = 1;
        }, i * 80);
      });
      setTimeout(() => {
        if (rsvpBtn) rsvpBtn.classList.add('visible');
      }, chars.length * 80 + 1000);
    }, delay);
  }

  let heroStep = 0;
  setInterval(() => {
    heroStep++;
    if (heroStep === 2 && animatedTitle) {
      animatedTitle.style.transition = 'opacity 2s ease';
      animatedTitle.style.opacity = 0;
    }
  }, 4000);

  animateTextLetterByLetter(titleText, animatedTitle);
}

