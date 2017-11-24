$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 150) {
			$('.subir').css({'visibility':'visible', 'opacity': '1'});
		}

		else {
			$('.subir').css({'visibility':'hidden', 'opacity': '0'});
		}
	});
});