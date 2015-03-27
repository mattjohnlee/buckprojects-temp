// @codekit-prepend "jquery.easing.1.3.js"

/* toggle for Q&A sections */
$('#faq p').hide();
	$('#faq h4').click(function() {
		$(this).next("p").slideToggle(500, "easeOutQuart");
		$(this).toggleClass("active");
	return false;
});

/* smooth scroll */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500, "easeOutQuart");
        return false;
      }
    }
  });
});


/* waypoints */


if ($('.mobile-background').css("display") == "none" ){
  $('.blackscreen').hide();

  $('#downloads').waypoint(function(direction) {
    if (direction === "down") {
      $('.blackscreen').fadeTo(2000, 0.5);
    }
  }, {
      offset: "99%"
  });

  $('#downloads').waypoint(function(direction){
    if (direction === "up") {
      $('.blackscreen').fadeTo(2000, 0);
    }
  }, {
      offset: "99%"
  });
}