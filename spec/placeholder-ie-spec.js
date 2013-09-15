describe("placeholder-ie jQuery plugin", function() {
	var inputBox;
	
	it("initializes the value of an empty textbox to the value of the placeholder text", function() {
		expect(inputBox.get(0).value).toBe('Some placeholder text');
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

		it("restores the original text color when the placeholder text is removed", function() {
			inputBox.trigger('focus');

			expect(inputBox.css('color')).toBe('rgb(255, 255, 255)');
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
			expect(inputBox.val()).toBe('Some placeholder text');
		});

		it("colors the placeholder text grey", function() {
			expect(inputBox.css('color')).toBe('rgb(128, 128, 128)');
		});
	});
	
	beforeEach(function () {
		$('<input id="sample-input" type="text" placeholder="Some placeholder text"></input>').appendTo('body');
		
		inputBox = $('#sample-input');
		inputBox.css('color', 'rgb(255, 255, 255)');

		inputBox.addPlaceholderSupport();
	});
	
	afterEach(function () {
		inputBox.remove();
	});
});