document.addEventListener("DOMContentLoaded", () => {
  // Hero Carousel
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
  const leftNav = document.querySelector('.gallery-nav.left');
  const rightNav = document.querySelector('.gallery-nav.right');
  if (leftNav && rightNav) {
    leftNav.addEventListener('click', () => {
      galleryIndex = (galleryIndex - 1 + galleryImgs.length) % galleryImgs.length;
      showGalleryImage(galleryIndex);
    });
    rightNav.addEventListener('click', () => {
      galleryIndex = (galleryIndex + 1) % galleryImgs.length;
      showGalleryImage(galleryIndex);
    });
    showGalleryImage(galleryIndex);
  }

  // Share Button
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const message = `💍✨ You're Invited! ✨💍
Join us as we celebrate love, laughter, and happily ever after.
We're thrilled to announce — Cedric & Ruth are getting married! 💛

📅 View the details, RSVP, and celebrate with us here:
👉 https://cedric-ruth-wedding.vercel.app

💫 Let the countdown to forever begin! 💫`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    });
  }

  // Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // RSVP Button Send
  const rsvpForm = document.getElementById('rsvpForm');
  if (rsvpForm) {
    window.sendToWhatsApp = function () {
      const name = document.getElementById('rsvpName').value;
      const email = document.getElementById('rsvpEmail').value;
      const whatsapp = document.getElementById('rsvpWhatsapp').value;
      const attendance = document.getElementById('rsvpAttendance').value;
      const message = document.getElementById('rsvpMessage').value;

      const fullMessage = `📩 *[WEDDING RSVP]* 📩\n--------------------------------\n👤 Name: ${name}\n📧 Email: ${email}\n📱 WhatsApp: ${whatsapp}\n✅ Attending: ${attendance}\n📝 Message: ${message}\n--------------------------------\nSent via: https://cedric-ruth-wedding.vercel.app`;

      const encoded = encodeURIComponent(fullMessage);
      const link = `https://wa.me/27829627848?text=${encoded}`;
      window.open(link, '_blank');

      alert('Thank you for your RSVP! 💛 Your response has been sent to Ruth.');
    }
  }

  // Hero Animated Title
  const animatedTitle = document.getElementById("animatedTitle");
  const rsvpBtn = document.getElementById("rsvpHeroBtn");
  if (animatedTitle) {
    const titleText = "Cedric & Ruth\nAre\nGetting Married";
    setTimeout(() => {
      animatedTitle.style.opacity = 1;
      const chars = titleText.split('');
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.innerHTML = char === '\n' ? '<br>' : char;
        animatedTitle.appendChild(span);
        setTimeout(() => {
          span.style.opacity = 1;
        }, i * 80);
      });
      setTimeout(() => {
        if (rsvpBtn) rsvpBtn.classList.add('visible');
      }, chars.length * 80 + 1000);
    }, 3000);

    let heroStep = 0;
    setInterval(() => {
      heroStep++;
      if (heroStep === 2 && animatedTitle) {
        animatedTitle.style.transition = 'opacity 3s ease';
        animatedTitle.style.opacity = 0;
      }
    }, 4000);
  }
});
