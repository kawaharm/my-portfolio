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
})

// Close Hamburger Menu when click link
navLink.forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}))
