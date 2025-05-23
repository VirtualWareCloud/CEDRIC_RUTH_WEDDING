document.addEventListener("DOMContentLoaded", () => {
  // HERO CAROUSEL (only rotates after animated title is done)
  const heroImgs = document.querySelectorAll('.hero-img');
  let heroIndex = 0;
  function rotateHeroImages() {
    heroImgs.forEach(img => img.classList.remove('active'));
    heroImgs[heroIndex].classList.add('active');
    heroIndex = (heroIndex + 1) % heroImgs.length;
  }

  // GALLERY SECTION
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

  // SHARE BUTTON (Web Share API with WhatsApp fallback)
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const message = `💍✨ You're Invited! ✨💍
Join us as we celebrate love, laughter, and happily ever after.
We're thrilled to announce — Cedric & Ruth are getting married! 💛

📅 View the details, RSVP, and celebrate with us here:
👉 https://cedric-ruth-wedding.vercel.app

💫 Let the countdown to forever begin! 💫`;

      if (navigator.share) {
        navigator.share({
          title: "Cedric & Ruth Wedding",
          text: message,
          url: "https://cedric-ruth-wedding.vercel.app"
        }).catch((err) => console.error("Share failed:", err));
      } else {
        const encoded = encodeURIComponent(message);
        const waURL = `https://wa.me/?text=${encoded}`;
        window.open(waURL, '_blank');
      }
    });
  }

  // HAMBURGER MENU (toggle open on click)
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // RSVP FORM (submit to WhatsApp)
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
    };
  }

  // HERO ANIMATED TITLE (sequential letter animation, center, fade out after 4th image)
  const animatedTitle = document.getElementById("animatedTitle");
  const rsvpBtn = document.getElementById("rsvpHeroBtn");
  if (animatedTitle) {
    const lines = [
      "Cedric & Ruth",
      "Are",
      "Getting Married"
    ];

    setTimeout(() => {
      animatedTitle.style.opacity = 1;
      lines.forEach((lineText, i) => {
        const line = document.createElement('div');
        line.classList.add('animated-line');
        line.style.textAlign = 'center';
        // You can further adjust with margin, font-size, etc for extra "Are" centering
        [...lineText].forEach((char, j) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.opacity = 0;
          span.style.transition = 'opacity 0.4s ease-in-out';
          line.appendChild(span);
          setTimeout(() => {
            span.style.opacity = 1;
          }, (i * 500) + (j * 80)); // staggered
        });
        animatedTitle.appendChild(line);
      });

      setTimeout(() => {
        if (rsvpBtn) rsvpBtn.classList.add('visible');
      }, lines.flatMap(line => [...line]).length * 80 + 1000);
    }, 3000);

    // Delay Hero Image Rotation until text and button appear
    setTimeout(() => {
      rotateHeroImages();
      setInterval(rotateHeroImages, 4000);
    }, 3000 + lines.flatMap(line => [...line]).length * 80 + 1500);

    let heroStep = 0;
    setInterval(() => {
      heroStep++;
      if (heroStep === 3 && animatedTitle) { // fade after 4th image (index 3)
        animatedTitle.style.transition = 'opacity 3s ease';
        animatedTitle.style.opacity = 0;
      }
    }, 4000);
  }
});
