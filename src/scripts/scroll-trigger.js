import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
