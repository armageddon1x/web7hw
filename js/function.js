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

    //sounds on donate buttons
  $('.donate_button_l').click(function (e) {
     e.preventDefault();
     sputnik.play();
     setTimeout(function () {
         window.location.href = "donate.html";
     }, 3000);
 	});

 	$('.donate_button_r').click(function (e) {
     e.preventDefault();
     sputnik.play();
     setTimeout(function () {
         window.location.href = "donate.html";
     }, 3000);
 	});

    //sounds on cash buttons
	$(".btn").click(function(){
		sci_fi.play();
	});

    //script to stick social media bar to top on scroll
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


var first_name;
var last_name;
var email;

$("#sub").click(function(){
	first_name=$("#fname").val();
    last_name=$("#lname").val();
    email=$("#email").val();
	alert("Thank you, "+first_name+" "+last_name+"!. We will send an email to "+email+" to confirm your donation!");
});
	//end of functions
});