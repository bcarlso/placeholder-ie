describe("Field with the placeholder support added", function() {
  var theOriginalColor = 'rgb(255, 255, 255)';
	var grey = 'rgb(128, 128, 128)';
  var placeholderText = 'Some placeholder text';

	var inputBox;
	
	it("shows the placeholder text when the field is empty", function() {
		expect(inputBox.get(0).value).toBe(placeholderText);
	});
	
	describe("When the field receives focus", function() {
		it("leaves the field alone if the user has entered text", function() {
			inputBox.val('User entered text');
			inputBox.trigger('focus');

			expect(inputBox.val()).toBe('User entered text');
		});

		it("hides the placeholder text if the field is empty", function() {
			inputBox.trigger('focus');

			expect(inputBox.val()).toBe('');
		});

		it("restores the original text color when the placeholder text is hidden", function() {
			inputBox.trigger('focus');

			expect(inputBox.css('color')).toBe(theOriginalColor);
		});
	});

	describe("When the field loses focus", function() {
		it("leaves the field alone if the user has entered text", function() {
			inputBox.val('User entered text');
			inputBox.trigger('blur');
		
			expect(inputBox.val()).toBe('User entered text');
		});

		it("shows the placeholder text when the field is empty", function() {
			inputBox.val('');
			inputBox.trigger('blur');
			expect(inputBox.val()).toBeShowingPlaceholderText();
		});

		it("colors the placeholder text grey", function() {
			expect(inputBox.css('color')).toBe(grey);
		});
	});
	
	beforeEach(function () {
		this.addMatchers({
	    toBeShowingPlaceholderText: function() {
	      return this.actual == placeholderText;
	    }
	  });
	
		$('<input id="sample-input" type="text" placeholder="' + placeholderText + '"></input>').appendTo('body');
		
		inputBox = $('#sample-input');
		inputBox.css('color', theOriginalColor);

		inputBox.addPlaceholderSupport();
	});
	
	afterEach(function () {
		inputBox.remove();
	});
});