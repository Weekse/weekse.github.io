$(document).ready(function() {

    function isInView(el) {
        var height = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        var topPos = $(height).scrollTop();
        var botPos = (topPos + $(window).height());
        var elTop = Math.round($(el).offset().top);
        var elBot = elTop + $(el).height();

        return ((elTop < botPos) && (elBot > topPos));
    }

    function checkAnimate() {
        if ($('.container').hasClass('fade')) return;

        if (isInView($('.container'))) { 
            $('.container').addClass('fade')
        }
    }
})