(function ($) {
    $.fn.counter = function (options) {
        var defaults={
            limitExceedClass:''
        };
        var options=$.extend({},defaults,options);
        return this.each(function () {
            max_length = parseInt($(this).attr('data-max-length'));

            var length = $(this).val().length;
            $(this).parent().find('.counter_label').html(max_length - length + ' characters left');
            // bind on key up event
            $(this).keyup(function () {
                // calc length and truncate if needed
                var new_length = $(this).val().length;
                if (new_length > max_length - 1) {
                    $(this).parent().find('.counter_label').addClass(options.limitExceedClass);
                }
                else {
                    $(this).parent().find('.counter_label').removeClass(options.limitExceedClass);
                }
                // update visual counter
                $(this).parent().find('.counter_label').html(max_length - new_length + ' characters left');
            });
        });
    };
})(jQuery);
$(document).ready(function () {
    $('textarea').counter();

})


