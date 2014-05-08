/*  Copyright © 2014 gokoururi
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */
function controlMascot(mascot) {
    $(window).resize(function(event) {
        if ( $(window).width() <= 750 && $('main').hasClass(mascot) ){
            $('main').removeClass(mascot);
            $('main').addClass('plain');
        } else if( $(window).width() > 750 && $('main').hasClass('plain') ) {
            $('main').addClass(mascot);
            $('main').removeClass('plain');
        }
    });
}

function setMascot(mascot) {
    $('main').addClass(mascot);
}

$(document).ready(function(event) {
    var mascotList = [ 'mascot1', 'mascot2', 'mascot3' ];
    var mascot = mascotList[Math.floor(Math.random() * mascotList.length)];
    setMascot(mascot);
    controlMascot(mascot);
});
