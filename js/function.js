; (function($) {
    'use strict';
    var $boby = $('html, body'),
    content = $('main').smoothstate({
        OnStart: {
            duration: 250,
            render: function (url, $sontainer) {
                content.toggleAnimationClass('is-exiting');
                $body.animate({ 'scrollTop' : 0 });
            }
        }
    }).data('smoothstate');
})(jQuery);