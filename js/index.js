window.addEventListener('load', function() {
  
  // Add "loaded" class to body element
  document.body.classList.add('loaded');

});
let slideIndex1 = 0;
let slideshowPaused1 = false; // flag variable to keep track of slideshow state
let slideTimeout1; // variable to hold the timeout ID
showSlides1();
function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {
    slideIndex1 = 1;
  }
  slides[slideIndex1 - 1].style.display = "block";
  // check flag variable to determine whether to continue or pause slideshow
  if (!slideshowPaused1) {
    slideTimeout1 = setTimeout(showSlides1, 3000);
  }
}
document.getElementById("open-slide1").addEventListener("click", function() {
  clearTimeout(slideTimeout1); // stop the current slideshow timeout
  slideshowPaused1 = true;
  // update slideIndex1 so that paused slide becomes first slide
  slideIndex1 = Array.from(document.getElementsByClassName("mySlides1")).indexOf(document.querySelector(".mySlides1:not([style*='display: none'])"));
});
document.getElementById("close-slide1").addEventListener("click", function() {
  slideshowPaused1 = false;
  showSlides1();
});
document.getElementById("open-slide2").addEventListener("click", function() {
  clearTimeout(slideTimeout1); // stop the current slideshow timeout
  slideshowPaused1 = true;
  // update slideIndex1 so that paused slide becomes first slide
  slideIndex1 = Array.from(document.getElementsByClassName("mySlides1")).indexOf(document.querySelector(".mySlides1:not([style*='display: none'])"));
});
document.getElementById("close-slide2").addEventListener("click", function() {
  slideshowPaused1 = false;
  showSlides1();
});
document.getElementById("open-slide3").addEventListener("click", function() {
  clearTimeout(slideTimeout1); // stop the current slideshow timeout
  slideshowPaused1 = true;
  // update slideIndex1 so that paused slide becomes first slide
  slideIndex1 = Array.from(document.getElementsByClassName("mySlides1")).indexOf(document.querySelector(".mySlides1:not([style*='display: none'])"));
});
document.getElementById("close-slide3").addEventListener("click", function() {
  slideshowPaused1 = false;
  showSlides1();
});
// Load the fancy window content after the pre-loader effect is visible
$(document).ready(function() {
  $('.m1').addClass('loaded');
});
let slideIndex2 = 0;
let slideshowPaused2 = false; // flag variable to keep track of slideshow state
let slideTimeout2; // variable to hold the timeout ID
showSlides2();
function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1;
  }
  slides[slideIndex2 - 1].style.display = "block";
  // check flag variable to determine whether to continue or pause slideshow
  if (!slideshowPaused2) {
    slideTimeout2 = setTimeout(showSlides2, 3000);
  }
}
document.getElementById("open-slide4").addEventListener("click", function() {
  clearTimeout(slideTimeout2); // stop the current slideshow timeout
  slideshowPaused2 = true;
  // update slideIndex2 so that paused slide becomes first slide
  slideIndex2 = Array.from(document.getElementsByClassName("mySlides2")).indexOf(document.querySelector(".mySlides2:not([style*='display: none'])"));
});
document.getElementById("close-slide4").addEventListener("click", function() {
  slideshowPaused2 = false;
  showSlides2();
});
document.getElementById("open-slide5").addEventListener("click", function() {
  clearTimeout(slideTimeout2); // stop the current slideshow timeout
  slideshowPaused2 = true;
  // update slideIndex2 so that paused slide becomes first slide
  slideIndex2 = Array.from(document.getElementsByClassName("mySlides2")).indexOf(document.querySelector(".mySlides2:not([style*='display: none'])"));
});
document.getElementById("close-slide5").addEventListener("click", function() {
  slideshowPaused2 = false;
  showSlides2();
});
document.getElementById("open-slide6").addEventListener("click", function() {
  clearTimeout(slideTimeout2); // stop the current slideshow timeout
  slideshowPaused2 = true;
  // update slideIndex2 so that paused slide becomes first slide
  slideIndex2 = Array.from(document.getElementsByClassName("mySlides2")).indexOf(document.querySelector(".mySlides2:not([style*='display: none'])"));
});
document.getElementById("close-slide6").addEventListener("click", function() {
  slideshowPaused2 = false;
  showSlides2();
});
// Load the fancy window content after the pre-loader effect is visible
$(document).ready(function() {
  $('.m2').addClass('loaded');
});
let slideIndex3 = 0;
let slideshowPaused3 = false; // flag variable to keep track of slideshow state
let slideTimeout3; // variable to hold the timeout ID
showSlides3();
function showSlides3() {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {
    slideIndex3 = 1;
  }
  slides[slideIndex3 - 1].style.display = "block";
  // check flag variable to determine whether to continue or pause slideshow
  if (!slideshowPaused3) {
    slideTimeout3 = setTimeout(showSlides3, 3000);
  }
}
document.getElementById("open-slide7").addEventListener("click", function() {
  clearTimeout(slideTimeout3); // stop the current slideshow timeout
  slideshowPaused3 = true;
  // update slideIndex3 so that paused slide becomes first slide
  slideIndex3 = Array.from(document.getElementsByClassName("mySlides3")).indexOf(document.querySelector(".mySlides3:not([style*='display: none'])"));
});
document.getElementById("close-slide7").addEventListener("click", function() {
  slideshowPaused3 = false;
  showSlides3();
});
document.getElementById("open-slide8").addEventListener("click", function() {
  clearTimeout(slideTimeout3); // stop the current slideshow timeout
  slideshowPaused3 = true;
  // update slideIndex3 so that paused slide becomes first slide
  slideIndex3 = Array.from(document.getElementsByClassName("mySlides3")).indexOf(document.querySelector(".mySlides3:not([style*='display: none'])"));
});
document.getElementById("close-slide8").addEventListener("click", function() {
  slideshowPaused3 = false;
  showSlides3();
});
document.getElementById("open-slide9").addEventListener("click", function() {
  clearTimeout(slideTimeout3); // stop the current slideshow timeout
  slideshowPaused3 = true;
  // update slideIndex3 so that paused slide becomes first slide
  slideIndex3 = Array.from(document.getElementsByClassName("mySlides3")).indexOf(document.querySelector(".mySlides3:not([style*='display: none'])"));
});
document.getElementById("close-slide9").addEventListener("click", function() {
  slideshowPaused3 = false;
  showSlides3();
});
// Load the fancy window content after the pre-loader effect is visible
$(document).ready(function() {
  $('.m3').addClass('loaded');
});
