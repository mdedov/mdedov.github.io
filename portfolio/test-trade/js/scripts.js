//choose type

$('.types__item.js-type-show').click(function () {

  $('#info').fadeIn(1000).animate({ opacity: "1" }, 1000);
  $(this).closest('body').find('.info__item').eq($(this).index()).addClass('info__item--active');


  $('.choose').addClass('animated fadeOutUp').addClass('choose--hide');


  $('.types__item').removeClass('animated').removeClass('js-type-show').removeClass('fadeInUpBig');


  if($(window).width() > 767) {

    //show corrent item from info-block
    $('.info__item--active').siblings().removeClass('info__item--active')
             .closest('.info').find('.desc').removeClass('desc--active').eq($(this).index()).addClass('desc--active');

    //add nice scroll (for block info)
    $('body').niceScroll();


    //height tabs
    var maxHeight = 0;
    $('.desc').each(function(){
       var thisH = $(this).height();
       if (thisH > maxHeight) { maxHeight = thisH; }
    });
    $('.desc').height(maxHeight);




  }


})



// MOBILE
if($(window).width() < 767) {

  // show info
  function typeTradeInvest() {
    $( ".type-trade" ).insertBefore($( ".desc-trade"));
  }
  function typeInvestInsert() {
    $( ".type-invest" ).insertBefore($( ".desc-invest"));
  }
  function typeMansInsert() {
    $( ".type-mans" ).insertBefore($( ".desc-mans"));
  }

  //accordion
  function accToggle(that) {
    $('.types__item').removeClass('types__item--active');
    $(that).addClass('types__item--active');
    $('.desc').hide();

    $(that).next().slideToggle(700);

    if ($(that).hasClass("accordion--active")) {
      $('.types__item').removeClass('accordion--active');
      $(that).removeClass('types__item--active');
      $(that).next().hide()
    } else {
      $('.types__item').removeClass('accordion--active');
      $(that).addClass('accordion--active');
      $(that).addClass('types__item--active');
      $(that).next().show()
    }

  }


  //copy title
  $('.types .types__item').click(function() {
    $('.choose__title').insertBefore($( ".info__desc .container"));
    $('.choose__title').removeClass('animated');
  })



  $('.type-trade').click(function () {
    $(this).insertBefore($( ".desc-trade"));
    accToggle(this);
    typeInvestInsert();
    typeMansInsert();
  })
  $('.type-invest').click(function () {
    $(this).insertBefore($( ".desc-invest"));
    accToggle(this);
    typeTradeInvest();
    typeMansInsert();
  })
  $('.type-mans').click(function () {
    $(this).insertBefore($( ".desc-mans"));
    accToggle(this);
    typeTradeInvest();
    typeInvestInsert();
  })
  // end show info


}



//info tabs

$('.info__item').click(function () {

  $(this).addClass('info__item--active').siblings().removeClass('info__item--active')
         .closest('.info').find('.desc').removeClass('desc--active').eq($(this).index()).addClass('desc--active');

})


// animate
$(document).ready(function () {
  $('.choose__title').addClass('animated fadeInDownBig');
  $('.types__item').addClass('animated fadeInUpBig');
})

$( window ).resize(function() {
  if($(window).width() > 768){
    $('.info__desc .types__item').remove();
    $('.info__desc .choose__title').remove();
  }
  if($(window).width() < 768){
    $(window).resize(function(){location.reload();});
   }
});
