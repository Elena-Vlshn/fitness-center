// Swiper 7.4.1
// import Swiper from './vendor/swiper';
import Swiper from './vendor/swiper.min.css';

const sliderReview = new Swiper('.swiper-review', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
