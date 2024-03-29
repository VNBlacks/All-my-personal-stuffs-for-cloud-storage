$(document).ready(function () {
    //If Javascript is running, change css on product-description to display:block
    //then hide the div, ready to animate
    $("div.pop-up").css({ 'display': 'block', 'opacity': '0' })
});


$(document).ready(function () {

    var moveLeft = 20;
    var moveDown = 10;

    //If Javascript is running, change css on product-description to display:block
    //then hide the div, ready to animate
    $(“div.pop - up”).css({‘display’: 'block’,'opacity’:’0′ })

    $(“a.trigger”).hover(

        function () {
            $(this).prev().stop().animate({
                opacity: 1
            }, 500);
        },
        function () {
            $(this).prev().stop().animate({
                opacity: 0
            }, 200);
        }

    )
    $(‘a.trigger’).mousemove(function (e) {
        $(“div.pop - up”).css(‘top’, e.pageY + moveDown).css(‘left’, e.pageX + moveLeft);
    });

});
