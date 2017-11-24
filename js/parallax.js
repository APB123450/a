$(document).ready(function(){
	$(document).scroll(function(){
		var scroll = $(window).scrollTop();
			banner = $('.banner');
		banner.css({
			'background-position':'0 -' + scroll * 0.50 + 'px'
		});
	});
});