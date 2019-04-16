$(function() {

	// Custom JS

	$('.grid').isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});

	$('.grid').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
      enabled: true
    },
		// other options
	});

});
