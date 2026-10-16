const card = document.querySelector('.card');
const envelope = document.getElementById('envelope');
const message = document.getElementById('message');
const tapHint = document.getElementById('tapHint');
const replay = document.getElementById('replay');
const confettiLayer = document.getElementById('confettiLayer');

function celebrate() {
  confettiLayer.replaceChildren();
  const colors = ['#e98cac', '#f5c66b', '#b9a3e3', '#f7a9a0', '#a8d8c7'];
  for (let i = 0; i < 65; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty('--duration', `${2.2 + Math.random() * 2.3}s`);
    piece.style.setProperty('--drift', `${Math.random() * 180 - 90}px`);
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    confettiLayer.appendChild(piece);
  }
  window.setTimeout(() => confettiLayer.replaceChildren(), 5500);
}

function openCard() {
  if (card.classList.contains('open')) return;
  card.classList.add('open');
  tapHint.hidden = true;
  window.setTimeout(() => {
    document.getElementById('envelopeScene').hidden = true;
    message.hidden = false;
    celebrate();
  }, 650);
}

function resetCard() {
  message.hidden = true;
  document.getElementById('envelopeScene').hidden = false;
  tapHint.hidden = false;
  card.classList.remove('open');
  confettiLayer.replaceChildren();
}

envelope.addEventListener('click', openCard);
envelope.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openCard();
  }
});
replay.addEventListener('click', () => {
  resetCard();
  envelope.focus();
});
