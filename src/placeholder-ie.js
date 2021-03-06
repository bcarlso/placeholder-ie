(function($) {
	$.fn.addPlaceholderSupport = function() {
			var GREY = 'rgb(128, 128, 128)';
			
			var target = this;
			var originalTextColor = target.css('color');
			
			target.textColor = function(value) {
				target.css('color', value);
			};
			
			target.placeholder = function() {
				return target.attr('placeholder');
			};
		
			target.placeholderIsDisplayed = function() {
				return target.get(0).value == target.placeholder();			
			};
		
			target.isEmpty = function() {
				return target.val() == '';
			};

			var showPlaceholder = function() {
				if(target.isEmpty()) {
					target.textColor(GREY);
					target.val(target.placeholder());
				}
			};
			
			var hidePlaceholder = function() {
				if(target.placeholderIsDisplayed()) {
					target.textColor(originalTextColor);
					target.val('');
				}
			};
		
			target.on({
				'focus': hidePlaceholder,
				 'blur': showPlaceholder
			});
		
			$.valHooks.input = {
				get: function(element) {
					if(element.value == $(element).attr('placeholder')) {
						return '';
						}
					else
						return element.value
				}
			};
			
			showPlaceholder();
		}
		
})(jQuery);
