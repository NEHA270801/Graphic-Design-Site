const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const hero = document.querySelector('.hero');

// The Figma hero has no navigation bar, so the header slides in once the hero has scrolled away.
const syncHeader = () => {
  const limit = hero ? hero.offsetHeight * 0.85 : 24;
  header.classList.toggle('scrolled', window.scrollY > limit);
};
window.addEventListener('scroll', syncHeader, { passive: true });
window.addEventListener('resize', syncHeader);
syncHeader();

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});

// Footer links: each click toggles the link between indigo (default) and pink.
document.querySelectorAll('.fcol a:not(.sr)').forEach((link) => {
  link.addEventListener('click', () => link.classList.toggle('active'));
});
