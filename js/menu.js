$(document).ready(function(){
	$('.icon-menu-2').on('click', function(){
		$('.bar-1').toggleClass('girar-1');
		$('.bar-2').toggleClass('girar-2');
		$('.bar-3').toggleClass('sacar');
		$('.menu').toggleClass('aparecer-menu');
	});

	$('.icon-th-list-outline').click(function(){
		$(this).css({'display':'none'});
		$('.icon-cancel-outline').css({'display':'inherit'});
		$('.menu').addClass('aparecer-menu');
	});

	$('.icon-cancel-outline').click(function(){
		$(this).css({'display':'none'});
		$('.icon-th-list-outline').css({'display':'inherit'});
		$('.menu').removeClass('aparecer-menu');
	});
});