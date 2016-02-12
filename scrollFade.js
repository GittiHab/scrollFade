/**
* This Code has been published under the APACHE 2.0 License by Pius Ladenburger on the 12. February 2016.
*/
$.fn.scrollFadeIn = function (offset, start) {
    $(this).scrollFade(offset, start, false);
};

$.fn.scrollFadeOut = function (offset, start) {
    $(this).scrollFade(offset, start, true);
};

$.fn.scrollFade = function (offset, start, fadeOut) {
    $(this).each(function () {
        var obj = $(this);
        var position = obj.offset().top;
        // Default values
        var myOffset = offset || 500;
        start = start || 0
        fadeOut = fadeOut || false

        $(window).scroll(function () {
            var scrollBar = $(document).scrollTop();
            var scrollPos = scrollBar - start;
            var opacity = (scrollPos > myOffset) ? 1 : (scrollBar < start) ? 0 : scrollPos / myOffset;

            opacity = (fadeOut) ? 1 - opacity : opacity;
            obj.css('opacity', opacity);
        });
        $(window).resize(function () {
            position = obj.offset().top;
            myOffset = offset - $(window).height() + position;
        });
    });
    $(window).scroll();
}