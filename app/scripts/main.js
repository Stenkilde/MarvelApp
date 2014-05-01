$(document).ready(function() {
	$(document).foundation();
	
    // This controls the off-canv menu
    $('.mobile-trigger').click(function () {
    	$('.off-canvas-menu, .canv').toggleClass('is-open');
    });
});