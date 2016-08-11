$(document).ready(function(){
	$(window).scroll(function(e) {
	    var anchor = $('.main-nav-anchor').offset().top;
	    if ($(this).scrollTop() >= anchor && $('.main-nav').css('position') != 'fixed') 
	    {  
	        $('.main-nav').css({
	            'position': 'fixed',
	            'top': '0px'
	        });
	        $('.main-nav-anchor').css('height', '50px');
	    } 
	});

	$('#arrow-icon').click(function(){
		$('.second-header').scrollView();
	})

	$.fn.scrollView = function () {
	    return this.each(function () {
	        $('html, body').animate({
	            scrollTop: $(this).offset().top
	        }, 500);
	    });
	}
})