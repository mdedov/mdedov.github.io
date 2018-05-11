
if($(window).width() > 767) {


}


var headerH = $(".header").height(),
    paddingTop = 20;

$(document).on("scroll", function() {

    var documentScroll = $(this).scrollTop();

    if(documentScroll > paddingTop) {
        $(".header").addClass("fixed");

    } else {
        $(".header").removeClass("fixed");
        $(".header").removeAttr("style");
    }

});



  $(document).ready(function(){
    var sidebarBottom = $(".sidebar__bottom").height();
    var sidebarTop = $(".sidebar__top").height();
    var sticky = sidebarBottom + sidebarTop;
    $(".sticker").sticky({
      topSpacing:120,
      bottomSpacing: sticky
    });
  });



  function isIE () {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
  }

  if (isIE () == 9) {
    $('.sidebar__top').removeClass('sticker').addClass('ie-margin20');
    $('.footer__third-top').addClass('ie-margin20');
  }
