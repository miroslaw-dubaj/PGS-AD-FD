const navBar = document.getElementById('nav-bar');
window.onscroll = function () {
  "use strict";
  if (window.pageYOffset >= 280) {
    navBar.classList.add("nav-colored");
    navBar.classList.remove("nav-transparent");
  }
  else if (navBar.className === "nav-colored" && window.pageYOffset < 280) {
    navBar.classList.add("nav-transparent");
    navBar.classList.remove("nav-colored");
  }
};
