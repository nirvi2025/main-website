export const nextUtility = {
  stickyNav() {
    const header = document.getElementById("header-sticky");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        header?.classList.add("sticky");
      } else {
        header?.classList.remove("sticky");
      }
    });
  },
  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  preloader() {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      // Simulate a loading animation before removing preloader
      setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
      }, 1000); // Adjust the timeout as needed
    }
  },
};