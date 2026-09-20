const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#proposal-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Website enquiry: ${data.get('service') || 'Paprika Culinary Creations'}`;
  const body = [`Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Service: ${data.get('service')}`, `Guests: ${data.get('guests')}`, `Date: ${data.get('date')}`, `Location: ${data.get('location')}`, '', 'Requirements:', data.get('details')].join('\n');
  window.location.href = `mailto:paprikachef1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
