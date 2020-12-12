$(document).ready(function() {
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 75) {
      btn.fadeIn('slow');
    } else {
      btn.fadeOut('fast');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '75');
  });

});

$(document).bind("contextmenu",function(e){
  return false;
    });