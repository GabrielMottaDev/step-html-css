$(document).ready(function(){
    var header = $("header");
    var arrow = $(".arrow-up");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.addClass("scrolled-header");
            arrow.addClass("scrolled-arrow-up");
        } else {
            header.removeClass("scrolled-header");
            arrow.removeClass("scrolled-arrow-up");
        }
    });
});