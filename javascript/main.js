
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('contraste');
  const theme = document.getElementById('theme');
  const path = location.pathname;
  if (!btn || !theme) return;

  let isDark = false;
  btn.addEventListener('click', () => {
    if (path.search('/html/') === -1) {
      theme.href = isDark ? './css/light-theme.css' : './css/dark-theme.css';
    } else {
      theme.href = isDark ? '../css/light-theme.css' : '../css/dark-theme.css';
    }
    btn.textContent = isDark ? "☾" : "☀";
    isDark = !isDark;
    });
});

function starsRating(event) {
  const radios = document.getElementsByName('starsRating');
  let Rating = 0;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      const Valeur = Rating ? Number(Rating.value) : 0
      if (Number(radios[i].value) > Valeur) {
        Rating = radios[i];
      }
    }
  }
  return Rating = Number(Rating.value);
}

function GotoHP(event){
  event.preventDefault();
  const elt = document.getElementById('hautDePage');
  elt.scrollIntoView({behavior: "smooth"});
}



function openCloseNavBar(event) {
   event?.preventDefault?.();

  const nav = document.getElementById('navigationBar');
  const isHidden = nav.hasAttribute('hidden');

  if (isHidden) {
    nav.removeAttribute('hidden');
  } else {
    nav.setAttribute('hidden', '');
  }
}

function submitForm(event){
    const form = document.getElementById('feedbackForm');
    const email = document.getElementById('email-feed-back').value.trim();
    const message = document.getElementById('feed-back').value.trim();
    if (!email || !message) {
      alert('Merci de renseigner votre e‑mail et votre message.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Adresse e‑mail invalide.');
      return;
    }
    const to = 'Beaute.anu@outlook.fr';
    const subject = `Nouvel avis – ${email}`;
    const note = starsRating(event);
    const body = `De : ${email}\n\nNote: ${note}/5\n${message}`;
    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    alert('Votre message est envoyé ! Merci beaucoup pour votre retour 😁!');
  };

