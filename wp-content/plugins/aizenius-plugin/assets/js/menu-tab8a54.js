(function($) {
	
	"use strict";
	//Tabs Box
	var menu_tab_js = function($scope, $) {
		if($('.tabs-box').length){
			$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
				e.preventDefault();
				var target = $($(this).attr('data-tab'));
				
				if ($(target).is(':visible')){
					return false;
				}else{
					target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
					$(this).addClass('active-btn');
					target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
					target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
					$(target).fadeIn(100);
					$(target).addClass('active-tab');
				}
			});
		}
	};
		
	$(window).on('elementor/frontend/init', function () {
			elementorFrontend.hooks.addAction('frontend/element_ready/aizenius_feature_tab.default', menu_tab_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/aizenius_pricing_tabs.default', menu_tab_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/aizenius_service_tab.default', menu_tab_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/aizenius_pricing_plan.default', menu_tab_js);
    });	

})(window.jQuery);



