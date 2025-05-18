import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

// tilt object on scroll
document.querySelectorAll(".tilt-right").forEach((tiltRight) => {
  gsap.to(tiltRight, {
    scrollTrigger: {
      trigger: tiltRight,
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
      markers: false,
    },
    rotation: 8,
    ease: "none",
    duration: 2,
  });
});
document.querySelectorAll(".tilt-left").forEach((tiltLeft) => {
  gsap.to(tiltLeft, {
    scrollTrigger: {
      trigger: tiltLeft,
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
      markers: false,
    },
    rotation: -8,
    ease: "none",
    duration: 2,
  });
});

// card animation
document.querySelectorAll(".card").forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 60%",
      end: "top 40%",
      scrub: true,
      markers: false,
    },
    scale: 1.008,
    ease: "power1.out",
    duration: 2,
    yoyo: true,
    repeat: 1,
  });
});

// footer animation
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    markers: false,
  },
});
tl.to(".footer__pot", {
  rotate: 30,
  x: +2,
  transformOrigin: "50% 50%",
});
tl.from(".footer__water", { duration: 1, stagger: 0, drawSVG: 0, ease: "power1.in" });
tl.call(() => {
  document.querySelector(".footer__water").classList.add("footer__water--loaded");
});
