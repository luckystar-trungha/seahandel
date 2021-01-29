$(document).ready(function() {
	$(window).bind("scroll", function() {
		parallax();
	});
});

function parallax() {
	var scrollPos = $(window).scrollTop();
	$(".property-bg").css("top", (0 - (scrollPos * .2)) + 'px');
}