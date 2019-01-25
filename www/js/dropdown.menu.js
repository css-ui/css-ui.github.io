
/*
 * Dropdown menu.
 */
(function($) {

	var dropdown = '.expand-dropdown';
	var employ   = '.employ-toggle';

	$(employ).on('click', function() {
		$(dropdown).fadeToggle('fast');
		$(dropdown).on('click', function(e) {
			if (!$(e.target).is(employ) && !$(e.target).parents().is(employ)) {
				$(dropdown).hide();
			}
		});
	});

}(jQuery));
