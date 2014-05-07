/*  Copyright © 2014 gokoururi
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */
$(window).resize(function(event) {
    if ( $(window).width() <= 750 && $('main').hasClass(waifu) ){
        $('main').removeClass(waifu);
        $('main').addClass('plain');
    } else if( $(window).width() > 750 && $('main').hasClass('plain') ) {
        $('main').addClass(waifu);
        $('main').removeClass('plain');
    }
});

$(document).ready(function(event) {
    var waifus = [ 'waifu1', 'waifu2', 'waifu3' ];
    waifu = waifus[Math.floor(Math.random() * waifus.length)];
    $('main').addClass(waifu);
});
