// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header__nav--sticky");
var welcomeSection = document.getElementById("welcome");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
		header.classList.add("sticky-fixed");
		welcomeSection.classList.add("plus-pt");
  } else {
		header.classList.remove("sticky-fixed");
		welcomeSection.classList.remove("plus-pt");
  }
}