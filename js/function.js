//beginning of javascript

//document ready function
$(document).ready(function(){
	//beginning of functions

	//loading sounds
	var sputnik=document.createElement('audio');
	var rocket=document.createElement('audio');
	var sci_fi=document.createElement('audio');

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
		sci_fi.play();
	});
	$(".donate_button_r").click(function(){
		sputnik.play();
	});
	//end of functions
});