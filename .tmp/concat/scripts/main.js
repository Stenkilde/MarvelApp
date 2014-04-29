$(document).ready(function() {
	$(document).foundation();
	
    // This controls the off-canv menu
    $('.mobile-trigger').click(function () {
    	$('.off-canvas-menu').toggleClass('is-open');
    	$('.canv').toggleClass('is-open');
    });
});