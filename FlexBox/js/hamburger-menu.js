$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-bts-active');
  $('.menu-hb-nav').toggleClass('menu-hb-nav-active');
})
