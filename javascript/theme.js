
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('button');
  const theme = document.getElementById('theme');
  if (!btn || !theme) return; 

  let isDark = false;
  btn.addEventListener('click', () => {
    theme.href = isDark ? 'css/light-theme.css' : 'css/dark-theme.css';
    isDark = !isDark;
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('button');
  const theme = document.getElementById('theme');
  if (!btn || !theme) return; 

  let isDark = false;
  btn.addEventListener('click', () => {
    theme.href = isDark ? 'css/light-theme.css' : 'css/dark-theme.css';
    isDark = !isDark;
  });
});
