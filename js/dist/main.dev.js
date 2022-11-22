"use strict";

$(document).ready(function () {
  $('.your-class').slick({});
});
var header = document.querySelector(".header");
window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    header.classList.add('scroll');
  } else if (window.scrollY < 200) {
    header.classList.remove('scroll');
  }
});
$(document).ready(function () {
  $("#homeSLider").slick({
    dots: true,
    fade: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000
  });
});
var options = {
  strings: ['Make the best decision for your roof and home'],
  typeSpeed: 40,
  loop: true,
  loopCount: Infinity,
  startDelay: 500
};
var typed = new Typed('.element', options);
var typed2 = new Typed('.element2', options);
var typed3 = new Typed('.element3', options);