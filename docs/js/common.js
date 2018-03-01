// --- Sticky navbar

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };
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



// --- Glide.js init

$("#Glide").glide({
	type: "carousel"
});
$("#Glide2").glide({
	type: "carousel",
	autoplay: false
});

// WOW.js init

new WOW().init();



// --- Smooth scroll

$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});