/* Mobile nav */
const ham = document.getElementById('ham');
const mob = document.getElementById('mob');
ham.addEventListener('click', () => mob.classList.toggle('open'));
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

/* Scroll reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Active nav */
const sections = document.querySelectorAll('section[id], footer[id]');
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) cur = s.id; });
  links.forEach(a => {
    const active = a.getAttribute('href') === `#${cur}`;
    a.classList.toggle('active', active);
  });
}, { passive: true });