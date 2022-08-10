const themeBtn = document.querySelector('#theme-toggle'),
  darkIcon = document.querySelector('#theme-toggle-dark-icon'),
  lightIcon = document.querySelector('#theme-toggle-light-icon');

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!'color-theme' in localStorage &&
    window.matchMedia('(prefers-color-scheme:dark)').matches)
) {
  // show light icon
  lightIcon.classList.remove('hidden');
} else {
  darkIcon.classList.remove('hidden');
}

themeBtn.addEventListener('click', () => {
  darkIcon.classList.toggle('hidden');
  lightIcon.classList.toggle('hidden');

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});
