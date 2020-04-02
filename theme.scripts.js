(function ($) {
    "use strict";

    // HEADER STICKY AREA JS CODE
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 0){  
	    	$('.stickySection').addClass("sticky");
	  	}else{
	    	$('.stickySection').removeClass("sticky");
	  	}
	});

	/*ADD CLASS SOME PIXIEL SCROLL*/
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 500) {
	        $(".clearHeader").addClass("redHeader");
	    } else {
	        $(".clearHeader").removeClass("redHeader");
	    }
	});

})(jQuery);