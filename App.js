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

/*******************************
 * ******** ANIMATIONS *********
 * *****************************/
// GREETING SECTION
ScrollOut({
  targets: ".greeting-title",
  onShown: function (el) {
    // remove the class
    el.classList.remove(
      "animate__animated",
      "animate__bounce",
      "animate__infinite"
    );
    // force reflow
    void el.offsetWidth;
    // re-add the animated cl
    el.classList.add(
      "animate__animated",
      "animate__bounce",
      "animate__infinite"
    );
  },
});

ScrollOut({
  targets: ".greeting-description",
  onShown: function (el) {
    // remove the class
    el.classList.remove(
      "animate__animated",
      "animate__fadeInRight",
      "animate__delay-1s"
    );
    // force reflow
    void el.offsetWidth;
    // re-add the animated cl
    el.classList.add(
      "animate__animated",
      "animate__fadeInRight",
      "animate__delay-1s"
    );
  },
});

// ABOUT SECTION
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-about");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => aboutObserver.observe(el));

// SKILLS SECTION
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

// PROJECTS SECTION
const projectTitleFadeIn = [{ transform: "translateX(0)" }, { opacity: 1 }];
const projectTitleFadeOut = [
  { transform: "translateX(-100%)" },
  { opacity: 0 },
];

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

// CONTACT SECTION
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
