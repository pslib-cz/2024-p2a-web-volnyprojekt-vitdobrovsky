import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Autoplay, Pagination],

  direction: "horizontal",
  loop: true,
  spaceBetween: 48,
  touchEventsTarget: "container",
  simulateTouch: true,

  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
});
