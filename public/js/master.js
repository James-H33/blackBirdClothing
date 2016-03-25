$(document).ready(function() {
var body = $('body');
var button = $('#nav-icon');

  button.on('click', function(event) {
    body.toggleClass('active-nav');
    event.stopPropagation();
    event.preventDefault();
  });

  // Window Scroll
  $(window).scroll(function() {

    var scrollCheck = $(this).scrollTop();

    $('.introDisplay').css({
      'transform' : 'translate(0px, '+ scrollCheck /15 +'%)'
    });

    if (scrollCheck > $('.galleryContainer').offset().top - ($(window).height() / 1.2)) {
      $('.gallery li').each(function(i) {

        setTimeout(function(){
        $('.gallery li').eq(i).addClass('is-showing');
      }, 300 * (i + 1));

      });

    }

  }); // Window Scroll End

  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });

});
