$(document).ready(function(){
    // Script Back to top
    $("#back-top").hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Script for Slider Carousel
    $('.slider-carousel').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin:0,
        responsiveClass:true,
        autoplay: true,
        dots: false,
        nav: false,
        items:1
    });
    $('.client-carousel').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        items: 5,
        responsive:{
            0:{
                items:2,
            },
            480:{
                items:3,
            },
            768:{
                items:4,
            },
            1024:{
                items:5,
            }
        }  
    });
    $('.project-carousel').owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        nav: false,
        items: 5,
        responsive:{
            0:{
                items:2,
            },
            480:{
                items:2,
            },
            768:{
                items:5,
            },
            1024:{
                items:5,
            }
        }        
    });
    $('.project-detail-carousel').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin: 0,
        responsiveClass: true,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ["<div class='nav-btn bnt-img prev-img'></div>", "<div class='nav-btn bnt-img next-img'></div>"],
        items: 1
    });
    // Script dropdown menu responsive
    $(".nav-responsive > li >a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("arrow-right");
            $(this).bind('click', function(e){
                e.preventDefault();
            });

		}
	});
    adjustMenu();
    $('.property-content .item-project a').click(function(){
        $('.property-content .item-project a').removeClass('active');
        $(this).addClass('active');
    })
});

var adjustMenu = function() {
    $('.nav-responsive').addClass('navigation-res');
    $('.nav-responsive > li').click(function () {
		$('.nav-responsive').removeClass('hide-mobile');
		$('.nav-responsive > li a').removeClass('arrow-down');
		$('.nav-responsive > li > ul').slideUp('medium');
		var divToSlide = $(this).parent();
		var divfromSlide = $(this).children("ul");
		if (divfromSlide.is(":hidden")) {
			divfromSlide.slideDown("medium");
			$(this).children('a').addClass('arrow-down');
		}
	});
};
