'use strict';

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const letterScreen = document.getElementById('letter-screen');
const responseScreen = document.getElementById('response-screen');

/* -----------------------------------------------------------------
   "No" button — dodges any attempt to hover, focus, tap, or click it.
   ----------------------------------------------------------------- */
function dodge() {
  const rect = noBtn.getBoundingClientRect();

  // The first time this runs, lock the button into fixed positioning
  // at its current on-screen spot first, so it doesn't visually jump.
  if (noBtn.style.position !== 'fixed') {
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${rect.left}px`;
    noBtn.style.top = `${rect.top}px`;
    noBtn.style.margin = '0';
    void noBtn.offsetWidth; // force reflow so the browser registers the start position
  }

  const padding = 16;
  const maxLeft = Math.max(window.innerWidth - rect.width - padding, padding);
  const maxTop = Math.max(window.innerHeight - rect.height - padding, padding);

  const newLeft = padding + Math.random() * (maxLeft - padding);
  const newTop = padding + Math.random() * (maxTop - padding);

  noBtn.style.left = `${newLeft}px`;
  noBtn.style.top = `${newTop}px`;
}

noBtn.addEventListener('mouseenter', dodge);
noBtn.addEventListener('focus', dodge);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  dodge();
}, { passive: false });
noBtn.addEventListener('click', (e) => {
  // Safety net — if a click ever lands on it anyway, dodge and do nothing else.
  e.preventDefault();
  dodge();
});

window.addEventListener('resize', () => {
  if (noBtn.style.position === 'fixed') dodge();
});

/* -----------------------------------------------------------------
   "Yes" button — cross-fades from the letter to the response screen.
   ----------------------------------------------------------------- */
function showScreen(hide, show) {
  hide.classList.remove('visible');
  hide.addEventListener('transitionend', function onEnd() {
    hide.classList.remove('active');
    hide.removeEventListener('transitionend', onEnd);
  }, { once: true });

  show.classList.add('active');
  void show.offsetWidth; // force reflow before transitioning in
  requestAnimationFrame(() => show.classList.add('visible'));

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

yesBtn.addEventListener('click', () => {
  showScreen(letterScreen, responseScreen);
});
