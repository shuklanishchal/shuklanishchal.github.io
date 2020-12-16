$(document).ready(function() {
  if($(window).width() < 766) {
    $('#responsive-buttons').addClass('btn-group-vertical');
  }
  else {
    $('#responsive-buttons').addClass('row');
  }
});

$(window).resize(function() {
  if($(window).width() < 766) {
    $('#responsive-buttons').addClass('btn-group-vertical');
    $('#responsive-buttons').removeClass('row');
  }
  else {
    $('#responsive-buttons').addClass('row');
    $('#responsive-buttons').removeClass('btn-group-vertical');
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

function sellingPoints() {
  scrollToAnchor('selling-points');
}

function multipleStories() {
  $('#selling-points').removeClass('total');
  $('#selling-points').addClass('start');
  $('#multiple-stories').fadeIn('slow', function() {
  scrollToAnchor('multiple-stories');
  });
}

function multipleStoriesDone() {
  $('#selling-points').removeClass('start');
  $('#selling-points').addClass('total');
  scrollToAnchor('selling-points', function() {
  $('#multiple-stories').fadeOut('slow');
  });
}
