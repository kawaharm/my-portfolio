/*******************************
 * ******** VARIABLES **********
 * *****************************/
let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav-list");
let navLink = document.querySelectorAll(".nav-link");

// Activate Hamburger Menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

// Close Hamburger Menu when click link
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  })
);

// Scroll Animations
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => aboutObserver.observe(el));

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-skill");
    } else {
      entry.target.classList.remove("show-skill");
    }
  });
});

const hiddenSkills = document.querySelectorAll(".hidden-skill");
hiddenSkills.forEach((el) => skillObserver.observe(el));

const projectTitleFadeIn = [{ transform: "translateX(0)" }, { opacity: 1 }];

const projectTitleFadeOut = [
  { transform: "translateX(-100%)" },
  { opacity: 0 },
];

ScrollOut({
  targets: ".greeting-title",
  onShown: function (el) {
    // remove the class
    el.classList.remove("animate__animated", "animate__bounce");
    // force reflow
    void el.offsetWidth;
    // re-add the animated cl
    el.classList.add("animate__animated", "animate__bounce");
    el.style.setProperty("--animate-repeat", "infinite");
    el.style.setProperty("--animate-delay", "2s");
  },
});

ScrollOut({
  target: ".project-title",
  once: true,
  cssProps: true,
});

ScrollOut({
  targets: ".backInLeft",
  onShown: function (el) {
    // remove the class
    el.classList.remove("animate__animated", "animate__backInLeft");
    // force reflow
    void el.offsetWidth;
    // re-add the animated cl
    el.classList.add("animate__animated", "animate__backInLeft");
  },
});

ScrollOut({
  targets: ".fadeIn",
  once: true,
  onShown: function (el) {
    // remove the class
    el.classList.remove("animate__animated", "animate__fadeIn");
    // force reflow
    void el.offsetWidth;
    // re-add the animated cl
    el.classList.add("animate__animated", "animate__fadeIn");
    el.style.setProperty("--animate-duration", "2s");
  },
});
