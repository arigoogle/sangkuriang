(function($) {

	'use strict';
	
	 // Header Sticky
     $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar').addClass("is-sticky");
        }
        else{
            $('.navbar').removeClass("is-sticky");
        }
    });
	
	// Preloader Area
	jQuery(window).on('load', function() {
	    $('.preloader').fadeOut();
	});

     // Navbar Menu JS
     $('.navbar .navbar-nav li a, .main-banner-content .btn, .cta-area .btn, .who-we-are .btn, .tabs_item_content .btn, .call-to-action-content .btn').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 80);
        e.preventDefault();
    });
    $('.navbar .navbar-nav li a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

	//odometer js
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    //AOS animation
    AOS.init({
        once: true,
        disable: function() {
        var maxWidth = 900;
        return window.innerWidth < maxWidth;
        }
    });

    
    

	// Go to Top
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" },  500);
    });

    
})(jQuery);

