;
(function ($, window, document, undefined) {

    $.fn.animatedBG = function (options) {
        var defaults = {
            colorSet: ['#000000', '#401f0c', '#cfb42d', '#6394bf'],
            speed: 4000
        },
        settings = $.extend({}, defaults, options);

        return this.each(function () {
            var $this = $(this);

            $this.each(function () {
                var $el = $(this),
                        colors = settings.colorSet;

                function shiftColor() {
                    var color = colors.shift();
                    colors.push(color);
                    return color;
                }

                // initial color
                var initColor = shiftColor();
                $el.css('backgroundColor', initColor);
                setInterval(function () {
                    var color = shiftColor();
                    $el.animate({backgroundColor: color}, 3000);
                }, settings.speed);
            });
        });
    };

    // Initialize
    $(function () {
        $('.animatedBG').animatedBG({
            colorSet: ['#f00000', '#855044','#d50000','#DA9A19','#009688','##00BCD4'],
            speed: 6000
        });
    });

}(jQuery, window, document));