(function($){
 $.fn.counter = function(options) {

  var defaults = {
   max_length: 255
  };

  var options = $.extend(defaults, options);
    
  return this.each(function() {
	
                var length = $(this).val().length;               
				$(this).parent().find('.counter_label').html( options.max_length-length + ' characters left');
                // bind on key up event
                $(this).keyup(function(){
				  // calc length and truncate if needed
                  var new_length = $(this).val().length;
                  if (new_length > options.max_length-1) {
                    $(this).val($(this).val().substring(0, options.max_length));
                  }
				  // update visual counter
                  $(this).parent().find('.counter_label').html( options.max_length-new_length + ' characters left');
                });
  });
 };
})(jQuery);
