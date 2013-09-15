(function($) {
	$.fn.addPlaceholderSupport = function() {
			var target = this;
			var originalTextColor = target.css('color');
			
			target.placeholder = function() {
				return target.attr('placeholder');
			};
		
			target.placeholderIsDisplayed = function() {
				return target.val() == target.attr('placeholder');			
			};
		
			target.hidePlaceholder = function() {
				target.css('color', originalTextColor);
				target.val('');
			};
		
			target.isEmpty = function() {
				return target.val() == '';
			};

			target.showPlaceholder = function() {
				target.css('color', 'rgb(128, 128, 128)');
				target.val(target.placeholder());
			};
		
			target.on({
				'focus': function(event) {
					if(target.placeholderIsDisplayed()) {
						target.hidePlaceholder();
					}
				},
				'blur': function(event) {
					if(target.isEmpty()) {
						target.showPlaceholder();
					}
				}
			});
		
			target.trigger('blur');
		}
		
})(jQuery);
