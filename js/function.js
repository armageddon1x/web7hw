//beginning of javascript

//document ready function
$(document).ready(function(){
	//beginning of functions

	//loading sounds
	var sputnik=document.createElement('audio');
	var rocket=document.createElement('audio');
	var sci_fi=document.createElement('audio');
	console.log(sputnik);

 	sputnik.setAttribute('src','sounds/sputnik.mp3');
 	rocket.setAttribute('src','sounds/rocket.mp3');
 	sci_fi.setAttribute('src','sounds/sci_fi.mp3');

	$(".donate_button_l").click(function(){
		sputnik.play();
	});
	$(".donate_button_r").click(function(){
		sputnik.play();
	});
	$(".btn").click(function(){
		rocket.play();
	});
	$(".donate_button_r").click(function(){
		sputnik.play();
	});

 function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#anchor').offset().top;
    if (window_top > div_top) {
        $('#social_media_bar').addClass('fixed');
    } else {
        $('#social_media_bar').removeClass('fixed');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
	//end of functions
});