// typewriter-title.js
// Reusable Typewriter Title Animation

/**
 * Usage:
 * 1. Place a <div id="typewriterTitle"></div> where you want the title to appear in your HTML.
 * 2. Include this JS in your HTML: <script src="js/typewriter-title.js"></script>
 * 3. Optionally, include .typewriter-title and .typewriter-line CSS styles for custom look.
 * 4. Call renderTypewriterTitle() after DOMContentLoaded.
 */

// --- CONFIGURABLE TITLE DATA ---
const typewriterLines = [
  "Cedric & Ruth",
  "Are",
  "Getting Married"
];

// Optional: Delay (ms) before animation starts
const START_DELAY = 300;  // ms
const TYPE_DELAY = 80;    // ms per character
const LINE_DELAY = 250;   // ms between lines

function renderTypewriterTitle(containerId = 'typewriterTitle', onDone) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  container.classList.add('typewriter-title');

  let charIndex = 0;

  function animateLine(lineIdx) {
    if (lineIdx >= typewriterLines.length) {
      if (typeof onDone === "function") onDone();
      return;
    }
    const lineText = typewriterLines[lineIdx];
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('typewriter-line');
    if (lineText.trim() === "Are") {
      lineDiv.style.textAlign = "center";
      lineDiv.style.margin = "0 auto";
      lineDiv.style.width = "100%";
    }
    container.appendChild(lineDiv);

    // Animate each character
    let j = 0;
    function typeChar() {
      if (j < lineText.length) {
        const span = document.createElement('span');
        span.textContent = lineText[j];
        span.style.opacity = 0;
        span.style.transition = 'opacity 0.4s';
        lineDiv.appendChild(span);
        setTimeout(() => { span.style.opacity = 1; }, 20);
        j++;
        setTimeout(typeChar, TYPE_DELAY);
      } else {
        // Move to next line after small delay
        setTimeout(() => animateLine(lineIdx + 1), LINE_DELAY);
      }
    }
    typeChar();
  }

  setTimeout(() => animateLine(0), START_DELAY);
}

// --- OPTIONAL: Minimal Styling (add to styles.css or typewriter-title.css) ---
// .typewriter-title {
//   position: absolute;
//   top: 28%;
//   width: 100%;
//   text-align: center;
//   font-family: 'Playfair Display SC', serif;
//   color: gold;
//   font-size: 2.5rem;
//   letter-spacing: 2px;
//   opacity: 1;
//   z-index: 10;
// }
// .typewriter-line { display: block; line-height: 1.8; }

// --- USAGE EXAMPLE (auto-run if used stand-alone) ---
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('typewriterTitle')) {
    renderTypewriterTitle('typewriterTitle');
  }
});