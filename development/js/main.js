$(function(){
  
  $('.nav-icon').click(function(){
    $('.nav').toggleClass('active');
    $('body').toggleClass('no-scroll');
  })

  $('.tabs-head_item').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs-body_item').eq($(this).index()).show().siblings().hide();
  })

});
