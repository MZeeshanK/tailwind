const input = document.querySelector('#link-input'),
  linkForm = document.querySelector('#link-form'),
  errorMsg = document.querySelector('#error'),
  btn = document.querySelector('#menu-btn'),
  menu = document.querySelector('#menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});
linkForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value === '') {
    errorMsg.innerHTML = 'Please Enter Something';
    input.classList.add('border-red');
  } else if (!validURL(input.value)) {
    errorMsg.innerHTML = 'Please Enter a valid URL';
    input.classList.add('border-red');
  } else {
    errorMsg.innerHTML = '';
    input.classList.remove('border-red');
    alert('Success');
  }
});

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
}
