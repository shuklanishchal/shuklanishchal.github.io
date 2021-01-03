$(document).ready(function() {
  if($(window).width() < 1025) {
    $('#responsive-buttons').addClass('btn-group-vertical');
    $('.mobile').removeClass('container');
  }
  else {
    $('#responsive-buttons').addClass('row');
    $('.mobile').addClass('container');
  }
});

$(window).resize(function() {
  if($(window).width() < 1025) {
    $('#responsive-buttons').addClass('btn-group-vertical');
    $('#responsive-buttons').removeClass('row');
    $('.mobile').removeClass('container');
  }
  else {
    $('#responsive-buttons').addClass('row');
    $('#responsive-buttons').removeClass('btn-group-vertical');
    $('.mobile').addClass('container');
  }
});

function scrollToAnchor(aid, callback) {
  var divTag = $('div[id="' + aid + '"]');
  $('html, body').animate({scrollTop: (divTag.offset().top - 50)}, 1000);
  if(typeof callback === 'function') {
    callback();
  }
}

function showSellingPoints() {
  $('#1').css('visibility', 'visible').hide().fadeIn('slow', function() {
    $('#2').css('visibility', 'visible').hide().fadeIn('slow', function() {
      $('#3').css('visibility', 'visible').hide().fadeIn('slow');
    });
  });
}

$(window).on('scroll', function() {
    var top_of_element = $(".selling-point").offset().top;
    var bottom_of_element = $(".selling-point").offset().top + $(".selling-point").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        showSellingPoints();
        $(window).off('scroll');
    }
});

function getMaxHeight(value) {
  let max = 0;
  $(value).each(function() {
    if($(value).height() > max) {
      max = $(value).height();
    }
  })
  return max;
}

function reveal(id) {
  $('#explanations').children().hide();
  $('#selling-points').removeClass('total');
  $('#selling-points').addClass('start');
  $('#' + id).fadeIn('slow', function() {
    scrollToAnchor(id);
  });
  if(id === "painting-with-words") {
    $('.carousel').carousel(0);
    $('.carousel-box').css('min-height', getMaxHeight('.carousel-box'));
    $('.carousel').carousel(1);
    $('.carousel').carousel({
      interval: 3000
    });
  }
}

function revealDone(id) {
  $('#selling-points').removeClass('start');
  $('#selling-points').addClass('total');
  scrollToAnchor('selling-points', function() {
    $('#' + id).fadeOut('slow');
  });
}
