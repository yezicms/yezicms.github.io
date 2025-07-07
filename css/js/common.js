jQuery(function($){
  var new_scroll_position = 0;
	var last_scroll_position;
	var header = document.getElementById("header");
	window.addEventListener('scroll', function(e) {
	  last_scroll_position = window.scrollY;
	  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
		header.classList.add("slideUp");
	  } else if (new_scroll_position > last_scroll_position) {
		header.classList.remove("slideUp");
	  }
	  new_scroll_position = last_scroll_position;
	});
  $('.nav-list .sub-nav').before ('<em class="dot"><i class="down iconfont icon-Rectangle"></i></em>');
  $(".menu-btn").click(function(){
    $(".ab-navbar").append('<div class="ab-overlay"></div>');
    $(".nav-list").append('<div class="canvas-close"><i class="iconfont icon-chahao"></i></div>');

    $(".ab-navbar .nav-list").addClass("show");
    $(".ab-overlay,.canvas-close").click(function(){
      $(".ab-overlay,.canvas-close").remove();
      $(".ab-navbar .nav-list").removeClass("show");
    });
    return false;
  });
  $('.dot').click(function () {  
    if($('.nav-list').hasClass('show')){  
        $(this).next(".sub-nav").slideToggle();
        $(this).parents(".nav-list li").siblings().find(".sub-nav").slideUp();
       }
  });

  $('.search-loader').on('click', function(){
    $('.search-box').addClass("show");
    $('.search-input').focus();
  })

  $('.search-close').on('click', function(){
      $('.search-box').removeClass("show");
  });
  $('.xiazaitu').click(function(){
    $('.xsxiazai').toggleClass('is-visible');
  })
  $('.xsxiazai-close').click(function(){
      $('.xsxiazai').toggleClass('is-visible');
  });
  $('.cd-popup-trigger').click(function(){
    $('.cd-popup').toggleClass('is-visible');
  })
  $('.cd-popup-close').click(function(){
      $('.cd-popup').toggleClass('is-visible');
  });
  $('.rollbar').hide();
  $(window).scroll(function() {
      if ($(window).scrollTop() > 0) {
          $('.rollbar').fadeIn(100);
      } else {
          $(".rollbar").fadeOut(100);
      }
  });
  $("#goto-top").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});