const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--active");
});

// close the hamburger menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (!hamburger.contains(event.target)) {
    hamburger.classList.remove("hamburger--active");
  }
});
