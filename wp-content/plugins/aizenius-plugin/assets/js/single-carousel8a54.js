(function($) {
	
	"use strict";
	var single_carousels_script_js = function($scope, $) {
		
		// owl slider
		  function thmOwlInit() {
			if ($(".thm-owl__carousel").length) {
			  $(".thm-owl__carousel").each(function () {
				let elm = $(this);
				let options = elm.data('owl-options');
				let thmOwlCarousel = elm.owlCarousel(options);
			  });
			}
		
			if ($(".thm-owl__carousel--custom-nav").length) {
			  $(".thm-owl__carousel--custom-nav").each(function () {
				let elm = $(this);
				let owlNavPrev = elm.data('owl-nav-prev');
				let owlNavNext = elm.data('owl-nav-next');
				$(owlNavPrev).on("click", function (e) {
				  elm.trigger('prev.owl.carousel');
				  e.preventDefault();
				})
		
				$(owlNavNext).on("click", function (e) {
				  elm.trigger('next.owl.carousel');
				  e.preventDefault();
				})
			  });
			}
		
		  }
		  
		  thmOwlInit();	
		
	};
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/aizenius_masterpiece.default', single_carousels_script_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/aizenius_testimonials_carousel.default', single_carousels_script_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/aizenius_client_section.default', single_carousels_script_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/aizenius_project_carousel.default', single_carousels_script_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/aizenius_team_carousel.default', single_carousels_script_js);
    });	

})(window.jQuery);