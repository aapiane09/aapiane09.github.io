$( document ).ready(function() {
  console.log( "JS Linked!" );

  //Open and close modals
  $('.modal').modal();

  $('.closemodal').click(function(){
    $('.modal').modal('close');
  })

  $('.carousel').carousel();

  // Smooth scrolling
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });



});
