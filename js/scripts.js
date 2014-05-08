/*  Copyright © 2014 gokoururi
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */

/*  Remove mascot class from element "main" if its width is <= mascotMinWidth */
function controlMascot(mascot, mascotMinWidth) {
    $(window).resize(function(event) {
        if ( $(window).width() <= mascotMinWidth && $('main').hasClass(mascot) ){
            $('main').removeClass(mascot);
            $('main').addClass('plain');
        } else if( $(window).width() > mascotMinWidth && $('main').hasClass('plain') ) {
            $('main').addClass(mascot);
            $('main').removeClass('plain');
        }
    });
}

function setMascot(mascot) {
    $('main').addClass(mascot);
}

/* Return all 'mascotN' classes defined in the styleSheet */
function getMascotList() {
    var mascotList  = [];
    var rules       = document.styleSheets[0].rules || document.styleSheets[0].cssRules;

    for (var i=0; i < rules.length; i++) {
        var rule = rules[i];
        var ruleName = rule.selectorText;
        if ( ruleName == ruleName.match(/\.mascot\d\d?/) ) {
            mascotList.push(ruleName.replace(".", ""))
        }
    }
    
    return mascotList;
}

$(document).ready(function(event) {
    var mascotList      = getMascotList();
    var mascot          = mascotList[Math.floor(Math.random() * mascotList.length)];
    var mascotMinWidth  = '750';

    setMascot(mascot);
    controlMascot(mascot, mascotMinWidth);
});
