
  var prev = 0;
  var $window = $(window);
  var nav = $('.header');

  $window.on('scroll', function () {
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
  });
