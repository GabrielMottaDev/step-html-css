$(document).ready(function(){
    var header = $("header");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
});