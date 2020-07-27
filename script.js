"use strict";

const menuBtn = document.querySelector("#menuBtn");
const siteMenu = document.querySelector("#siteMenu");

// open / close menu
function toggleMenu() {
  menuBtn.classList.toggle("change");
  siteMenu.classList.toggle("shown");
  if (siteMenu.classList.contains("shown")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
}

menuBtn.addEventListener("click", toggleMenu);

// window height variable for styles
function setHeightVariable() {
  let vh = window.innerHeight * 0.01 - 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeightVariable();

window.addEventListener("resize", setHeightVariable);

// add loader to the site

window.addEventListener(
  "load", // when site is fully loaded
  function () {
    document.body.style.overflowY = "auto";
    var preloader = document.querySelector(".preloader");
    preloader.classList.add("preloader-finish"); // add class to the preloader
  }
);

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > window.innerHeight - 200) {
    navbar.classList.add("navbar--shadow");
  } else navbar.classList.remove("navbar--shadow");
});
