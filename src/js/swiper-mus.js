import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiperReviews = new Swiper('.gallerySwiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1.5,
  spaceBetween: 28,
  navigation: {
    nextEl: '.gallery-btn-right',
    prevEl: '.gallery-btn-left',
  },
  allowTouchMove: true,
  breakpoints: {
    1440: {
      slidesPerView: 3.1,
      spaceBetween: 28,
      navigation: {
        nextEl: '.gallery-btn-right',
        prevEl: '.gallery-btn-left',
      },
    },
  },
});
