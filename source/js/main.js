import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  const tabButtons = document.querySelectorAll('.membership__button');
  const tabBodies = document.querySelectorAll('.membership__options-list');
  const videoGym = document.querySelector('.gym__video');


  function createIframe() {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('allowfullscreen', '');
    return iframe;
  }

  function setupVideo(video) {
    const link = video.querySelector('a');
    const playButton = video.querySelector('.gym__button-play');
    video.addEventListener('click', () => {
      let iframe = createIframe();
      link.remove();
      playButton.remove();
      video.appendChild(iframe);
    });

    link.removeAttribute('href');
  }

  setupVideo(videoGym);

  function tabOpen(event) {
    const dataTabActiveName = event.target.dataset.tab;
    const bodyTabActive = document.querySelector(`ul[data-tab="${dataTabActiveName}"]`);

    for (let button of tabButtons) {
      if (button.classList.contains('membership__button--active')) {
        button.classList.remove('membership__button--active');
      }
      for (let tabBody of tabBodies) {
        tabBody.classList.remove('membership__options-list--show');
      }
    }
    event.target.classList.add('membership__button--active');
    bodyTabActive.classList.add('membership__options-list--show');
  }

  const sliderReview = new Swiper('.swiper-review', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-review-button-next',
      prevEl: '.swiper-review-button-prev',
    },

  });

  const sliderTrainer = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 4,
    slidesPerGroup: 4,
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


  for (let button of tabButtons) {
    button.addEventListener('click', tabOpen);
  }

  function onCardClick(event) {
    const trainersСard = event.target.closest('.trainers__card');
    const info = trainersСard.querySelector('.trainers__card-info');
    info.classList.toggle('trainers__card-inf--is-visible');
  }

  if (document.documentElement.clientWidth < 1200) {
    const trainersImages = document.querySelectorAll('.trainer-image');
    for (let image of trainersImages) {
      image.addEventListener('click', onCardClick);
    }
  }

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
