import Swiper from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Autoplay, Pagination, Navigation],

  direction: "horizontal",
  loop: true,
  spaceBetween: 64,
  touchEventsTarget: "container",
  simulateTouch: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
});
