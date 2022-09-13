import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  const tabButtons = document.querySelectorAll('.membership__button');
  const tabBodies = document.querySelectorAll('.membership__options-list');

  function tabOpen(event) {
    const dataTabActiveName = event.target.dataset.tab;
    const bodyTabActive = document.querySelector(`ul[data-tab="${dataTabActiveName}"]`);

    for (let button of tabButtons) {
      if (button.classList.contains('membership__button_active')) {
        button.classList.remove('membership__button_active');
      }
      for (let tabBody of tabBodies) {
        tabBody.classList.remove('membership__options-list_show');
      }
    }
    event.target.classList.add('membership__button_active');
    bodyTabActive.classList.add('membership__options-list_show');
  }


  for (let button of tabButtons) {
    button.addEventListener('click', tabOpen);
  }

  const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 4,
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
