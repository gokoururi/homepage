$(window).resize(function(event) {
    if ( $(window).width() <= 750 && $('main').hasClass('waifu') ){
        $('main').removeClass('waifu');
        $('main').addClass('plain');
    } else if( $(window).width() > 750 && $('main').hasClass('plain') ) {
        $('main').addClass('waifu');
        $('main').removeClass('plain');
    }
});

