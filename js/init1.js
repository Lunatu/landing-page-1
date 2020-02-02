$(function() {
    $( ".tabs" ).tabs();

    $( ".tab" ).tabs();
    $('.owl-carousel').owlCarousel({
      loop:true,
      nav:true,
      dots:true,
      items:1,
      
    })
    
    function mobMenu() {
      let nav = $(".nav-list");

      $(".menu-btn").click(function() {
        if(nav.hasClass("active")) {
          nav.removeClass("active");

        }
        else {
          nav.addClass("active"); 
        }

      });

    }
    mobMenu();
  });

  