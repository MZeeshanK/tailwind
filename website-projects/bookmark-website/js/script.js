const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const logo = document.querySelector('#logo');
const hamBtn = document.querySelectorAll('.ham-btn');

tabs.forEach((tab) =>
  tab.addEventListener('click', (e) => {
    tabs.forEach((tab) => {
      tab.children[0].classList.remove('border-b-4', 'border-softRed');
    });
    panels.forEach((panel) => {
      panel.classList.add('hidden');
    });

    e.target.classList.add('border-softRed', 'border-b-4');

    const classString = e.target.getAttribute('data-target');
    document
      .querySelector('#panels')
      .querySelectorAll(`.${classString}`)[0]
      .classList.remove('hidden');
  })
);

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  btn.classList.toggle('open');

  bookmark();
});

hamBtn.forEach((ham) => {
  ham.addEventListener('click', () => {
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
    btn.classList.toggle('open');

    bookmark();
  });
});

const bookmark = () => {
  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
};
