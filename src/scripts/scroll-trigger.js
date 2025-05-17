import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".tilt-right", {
  scrollTrigger: {
    trigger: ".tilt-right",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
    markers: false,
  },
  rotation: 8,
  ease: "none",
  duration: 2,
});
gsap.to(".tilt-left", {
  scrollTrigger: {
    trigger: ".tilt-left",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
    markers: false,
  },
  rotation: -8,
  ease: "none",
  duration: 2,
});
gsap.to(".card__icon", {
  scrollTrigger: {
    trigger: ".page__product-benefits",
    start: "top 60%",
    end: "top 30%",
    scrub: 1,
    markers: false,
  },
  ease: "none",
  duration: 2,
  scale: 1.2,
});
