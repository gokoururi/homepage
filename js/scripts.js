$(window).resize(function(event) {
    if ( $(window).width() <= 750 && $('main').hasClass('waifu') ){
        $('main').removeClass('waifu');
        $('main').addClass('plain');
    } else if( $(window).width() > 750 && $('main').hasClass('plain') ) {
        $('main').addClass('waifu');
        $('main').removeClass('plain');
    }
});

$(document).ready(function(event) {
    var waifus = [ 'waifu1', 'waifu2', 'waifu3' ];
    var waifu = waifus[Math.floor(Math.random() * waifus.length)];
    $('main').addClass(waifu);
});
