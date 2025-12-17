
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('contraste');
  const theme = document.getElementById('theme');
  if (!btn || !theme) return;

  let isDark = false;

  btn.addEventListener('click', () => {
    theme.href = isDark ? 'css/light-theme.css' : 'css/dark-theme.css';
    btn.textContent = isDark ? "☾" : "☀";
    isDark = !isDark;
  });
});

document.addEventListener('click',() => {
  const radios = document.getElementsByName('starsRating');

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(radios[i].value);
      break;
    }
  }
});

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