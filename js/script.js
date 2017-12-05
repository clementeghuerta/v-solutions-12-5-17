$('a.smooth-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top + 20
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
/*
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let head = scroll > 400;
    if (head) {
        $(".heading").addClass("header-from-right");
    } else {
        $(this(".header-from-right")).addClass("heading");
    }
});
*/









