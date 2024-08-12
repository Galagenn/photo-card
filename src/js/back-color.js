// Функция для переключения на светлую тему
let changeToLight = function(event) {
  if (event) event.preventDefault(); // Отменить стандартное действие ссылки

  // Изменение стилей для светлой темы
  document.body.style.backgroundColor = '#fff';
  document.body.style.color = '#000';
  document.body.style.transition = 'background-color 1s ease';

  let elementsToChange = document.querySelectorAll('.top-header, .top-header__language');
  elementsToChange.forEach(function(element) {
    element.style.backgroundColor = '#fff';
    element.style.color = '#000';
  });

  let inputsToChange = document.querySelectorAll('.bottom-header__input');
  inputsToChange.forEach(function(input) {
    input.style.borderColor = '#000';
  });

  let menuBody = document.querySelector('.menu__body');
  if (menuBody) {
    menuBody.style.backgroundColor = '#fff';
    menuBody.style.color = '#000';
  }

  let wrappersToChange = document.querySelectorAll('.top-header__wrapper');
  wrappersToChange.forEach(function(wrapper) {
    wrapper.style.borderBottom = '1px solid #000';
  });

  let titlesToChange = document.querySelectorAll('.slide-hero__time, .anonces__text-block');
  titlesToChange.forEach(function(title) {
    title.style.color = '#000';
  });

  let buttonsToChange = document.querySelectorAll('.button--white');
  buttonsToChange.forEach(function(button) {
    button.style.backgroundColor = '#000';
    button.style.color = '#fff';
  });

  let photoReportLinksToChange = document.querySelectorAll('.content-photo-report__button, .vacancy__button, .photo-report__button');
  photoReportLinksToChange.forEach(function(link) {
    link.style.backgroundColor = '#fff';
    link.style.color = '#000';
  });

  let heroButtonsToChange = document.querySelectorAll('.hero__button, .hero__button--next');
  heroButtonsToChange.forEach(function(button) {
    button.style.color = '#fff';
  });

  let photoReportSectionsToChange = document.querySelectorAll('.photo-report__title, .content-photo-report__list');
  photoReportSectionsToChange.forEach(function(section) {
    section.style.color = '#fff';
  });

  let vacancySectionsToChange = document.querySelectorAll('.vacancy__title, .vacancies__label, .vacancies__button');
  vacancySectionsToChange.forEach(function(section) {
    section.style.color = '#fff';
  });

  // Установить белый фон для photo-portal__title
  let photoPortalTitlesToChange = document.querySelectorAll('.photo-portal__title__changed-color-line');
  photoPortalTitlesToChange.forEach(function(title) {
    title.style.backgroundColor = '#000';
  });

  let burgerMenuToChange = document.querySelectorAll('.icon-menu__line');
  burgerMenuToChange.forEach(function(element) {
    element.style.backgroundColor = '#000';
  });

  // Скрытие элемента #mode__light
  let modeLight = document.getElementById('mode__light');
  if (modeLight) {
    modeLight.style.display = 'none';
  }

  let menuModeLight = document.getElementById('menu-mode__light');
  if (menuModeLight) {
    menuModeLight.style.display = 'none';
  }


  // Отображение элемента .bottom-header__color-mode__dark
  let modeVisibleDark = document.querySelector('.bottom-header__color-mode__dark');
  if (modeVisibleDark) {
    modeVisibleDark.style.display = 'block';
  }

  // Изменение стиля и фона для меню
  let iconMenu = document.querySelector('.icon-menu');
  if (iconMenu) {
    iconMenu.style.setProperty('--clr-white', '#000');
    menuBody.style.setProperty('--menu-body-background-color', '#000');
  }

  // Сохранение состояния в localStorage
  localStorage.setItem('theme', 'light');
};

// Функция для переключения на темную тему
let changeToDark = function(event) {
  if (event) event.preventDefault(); // Отменить стандартное действие ссылки

  // Возвращение стилей в исходное состояние для темной темы
  document.body.style.backgroundColor = '';
  document.body.style.color = '';

  let elementsToChange = document.querySelectorAll('.top-header, .top-header__language');
  elementsToChange.forEach(function(element) {
    element.style.backgroundColor = '';
    element.style.color = '';
  });

  let inputsToChange = document.querySelectorAll('.bottom-header__input');
  inputsToChange.forEach(function(input) {
    input.style.borderColor = '';
  });

  let menuBody = document.querySelector('.menu__body');
  if (menuBody) {
    menuBody.style.backgroundColor = '';
    menuBody.style.color = '';
  }

  let wrappersToChange = document.querySelectorAll('.top-header__wrapper');
  wrappersToChange.forEach(function(wrapper) {
    wrapper.style.borderBottom = '';
  });

  let titlesToChange = document.querySelectorAll('.slide-hero__time, .anonces__text-block');
  titlesToChange.forEach(function(title) {
    title.style.color = '';
  });

  let buttonsToChange = document.querySelectorAll('.button--white');
  buttonsToChange.forEach(function(button) {
    button.style.backgroundColor = '';
    button.style.color = '';
  });

  let photoReportLinksToChange = document.querySelectorAll('.content-photo-report__button, .vacancy__button, .photo-report__button');
  photoReportLinksToChange.forEach(function(link) {
    link.style.backgroundColor = '';
    link.style.color = '';
  });

  let heroButtonsToChange = document.querySelectorAll('.hero__button, .hero__button--next');
  heroButtonsToChange.forEach(function(button) {
    button.style.color = '';
  });

  let photoReportSectionsToChange = document.querySelectorAll('.photo-report__title, .content-photo-report__list');
  photoReportSectionsToChange.forEach(function(section) {
    section.style.color = '';
  });

  let vacancySectionsToChange = document.querySelectorAll('.vacancy__title, .vacancies__label, .vacancies__button');
  vacancySectionsToChange.forEach(function(section) {
    section.style.color = '';
  });

  // Отображение элемента #mode__light
  let modeLight = document.getElementById('mode__light');
  if (modeLight) {
    modeLight.style.display = 'block';
  }

  let menuModeLight = document.getElementById('menu-mode__light');
  if (menuModeLight) {
    menuModeLight.style.display = 'block';
  }

  // Скрытие элемента .bottom-header__color-mode__dark
  let modeVisibleDark = document.querySelector('.bottom-header__color-mode__dark');
  if (modeVisibleDark) {
    modeVisibleDark.style.display = 'none';
  }

  let burgerMenuToChange = document.querySelectorAll('.icon-menu__line');
  burgerMenuToChange.forEach(function(element) {
    element.style.backgroundColor = '';
  });

  // Возвращение стилей меню в исходное состояние
  let iconMenu = document.querySelector('.icon-menu');
  if (iconMenu) {
    iconMenu.style.setProperty('--clr-white', '#fff');
    menuBody.style.setProperty('--menu-body-background-color', '#000');
  }

  // Сохранение состояния в localStorage
  localStorage.setItem('theme', 'dark');
};

// Привязка обработчиков событий
document.getElementById('mode__light')?.addEventListener('click', changeToLight);
document.getElementById('mode__dark')?.addEventListener('click', changeToDark);
document.getElementById('menu-mode__light')?.addEventListener('click', changeToLight);
document.getElementById('menu-mode__dark')?.addEventListener('click', changeToDark);

// Установка состояния при загрузке страницы
window.addEventListener('load', function() {
  let theme = localStorage.getItem('theme');
  if (theme === 'light') {
    changeToLight(null); // Вызываем функцию без события
  } else if (theme === 'dark') {
    changeToDark(null); // Вызываем функцию без события
  }
});
