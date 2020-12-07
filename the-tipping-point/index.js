$(document).ready(function() {
  if($(window).width() < 766) {
    $('#responsive-buttons').addClass('btn-group-vertical');
  }
  else {
    $('#responsive-buttons').addClass('row');
  }
  $.fn.widest = function() {
    return this.length ? this.width(Math.max.apply(Math, this.map(function() {
      return $(this).width();
    }))) : this;
	};

  $('.button').widest();
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

function scrollToAnchor(aid) {
  var divTag = $('div[id="' + aid + '"]');
  $('html, body').animate({scrollTop: divTag.offset().top}, 1000);
}

function aboutTheAuthor() {
  scrollToAnchor('about-the-author');
}
