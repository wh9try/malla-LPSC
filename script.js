//  Alterna panel de información y cambia símbolo + / –
document.querySelectorAll('.course').forEach(card => {
  const toggle = card.querySelector('.toggle');
  toggle.addEventListener('click', e => {
    e.stopPropagation();
    card.classList.toggle('open');
    toggle.textContent = card.classList.contains('open') ? '–' : '+';
  });

  //  Casilla “Se aprueba”  ➜  tacha la tarjeta
  const cb = card.querySelector('input[type="checkbox"]');
  cb.addEventListener('change', () => {
    card.classList.toggle('approved', cb.checked);
  });

  //  Evita que al hacer clic en la tarjeta se marque/desmarque accidentalmente
  card.addEventListener('click', () => toggle.click());
});
