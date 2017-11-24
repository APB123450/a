$(document).scroll(function(){
	var scroll = $(window).scrollTop();
		header = $('.header');
		logo = $('.logo h1');
		links = $('.links a');
		barras = $('.bar-1, .bar-2, .bar-3');
		menu = $('.menu');
		links_menu = $('.menu a');

	if (scroll > 100) {
		header.addClass('fixed');
		logo.addClass('header-content');
		links.addClass('header-content');
		barras.css({'background':'#fff'});
		menu.css({'position':'fixed', 'background':'deepskyblue'});
		links_menu.css({
			'color':'#fff'
		});
	}

	else {
		header.removeClass('fixed');
		logo.removeClass('header-content');
		links.removeClass('header-content');
		barras.css({'background':'#404040'});
		menu.css({'position':'absolute', 'background':'#fff'});
		links_menu.css({
			'color':'#404040'
		});
	}
});