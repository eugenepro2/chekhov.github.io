import sayHello from './lib/sayHello.js';
import device from 'current-device';
import Parallax from 'parallax-js';

var scene = document.getElementById('parallax');
var parallaxInstance = new Parallax(scene);

var scene1 = document.getElementById('parallax2');
var parallaxInstance1 = new Parallax(scene1);


sayHello();


$('.advantages__block').hover(function() {
  $('.advantages__block div').removeClass('is-active');
  $(this).find('div:first-child').addClass('is-active');
  if ($(this).is(':nth-of-type(1)')) {
    $('.advantages__line div').css('transform', 'translateX(100px)');
  } else if($(this).is(':nth-of-type(2)')) {
    $('.advantages__line div').css('transform', 'translateX(340px)');
  } else if($(this).is(':nth-of-type(3)')) {
    $('.advantages__line div').css('transform', 'translateX(780px)');
  }
});

if (device.desktop()) {
  $('.intro__info__block').hover(
    function() {
      $('.intro__info__block').removeClass('is-active');
      $(this).addClass('is-active');
      if ($(this).is(':nth-of-type(1)')) {
        $('.intro__info__line div').css('transform', 'translateX(20px)');
      } else if($(this).is(':nth-of-type(2)')) {
        $('.intro__info__line div').css('transform', 'translateX(340px)');
      } else if($(this).is(':nth-of-type(3)')) {
        $('.intro__info__line div').css('transform', 'translateX(700px)');
      }
    }
  );
}





$('.btn-primary').on('click', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});




if (device.desktop()) {
  $('#viewport').attr('content', 'width=1200, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
} else if(device.tablet()) {
  $('#viewport').attr('content', 'width=1024, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
} else if(device.mobile()) {
  $('#viewport').attr('content', 'width=480, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
}
