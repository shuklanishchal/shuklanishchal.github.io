function scrollToAnchor(aid) {
  var divTag = $('div[id="' + aid + '"]');
  $('html, body').animate({scrollTop: divTag.offset().top}, 1000);
}

window.onload = function() {
  $('#noScriptDisplay').css('display', 'inline');
  $('#bottom').css('opacity', '0');
  $('#linkedin').css('opacity', '0');
  $('#github').css('opacity', '0');
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';
  document.getElementById('sig').src = "signature.gif";
  setTimeout(function(){ document.getElementById('sig').src = "signature_static.png"; $('#linkedin').animate({opacity: 1}); $('#github').animate({opacity: 1}); $('#bottom').animate({opacity: 1});}, 2290);
}

function goTo(id) {
  if($(window).width() < 992) {
    $('#toggler').click();
  }
  scrollToAnchor(id);
}

function checkSubmit(e) {
   if(e && e.keyCode == 13) {
      $('#submit').submit2();
   }
}

$(window).scroll(function() {
  $('.navbar').fadeIn();
});

$(document).ready(function(){
  $('#submit').click(function() {
    $('#submit').submit2();
  });
  $("#phone").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
    }
    var curchr = this.value.length;
    var curval = $(this).val();
    if (curchr == 3 && curval.indexOf("(") <= -1) {
      $(this).val("(" + curval + ")" + " ");
    } else if (curchr == 4 && curval.indexOf("(") > -1) {
      $(this).val(curval + ") ");
    } else if (curchr == 5 && curval.indexOf(")") > -1) {
      $(this).val(curval + "-");
    } else if (curchr == 9) {
      $(this).val(curval + "-");
      $(this).attr('maxlength', '14');
    }
  });
});
