'use strict';

document.getElementById('getData').addEventListener('click', getData);

function getData() {
  fetch('https://api.punkapi.com/v2/beers/random').then(function (res) {
    return res.json();
  }).then(function (jsonData) {
    var output = '';
    jsonData.forEach(function (beer) {
      output += '<div><h3>' + beer.name + '</h3>\n                  <p>' + beer.description + '</p>\n                  <img class="beer" src="' + beer.image_url + '" alt="" /></div>';
    });
    document.getElementById('output').innerHTML = output;
  });
};
'use strict';

(function ($) {
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 56
	});

	// Collapse Navbar
	var navbarCollapse = function navbarCollapse() {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").addClass("navbar-shrink");
		} else {
			$("#mainNav").removeClass("navbar-shrink");
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);

	// Hide navbar when modals trigger
	$('.portfolio-modal').on('show.bs.modal', function (e) {
		$(".navbar").addClass("d-none");
	});
	$('.portfolio-modal').on('hidden.bs.modal', function (e) {
		$(".navbar").removeClass("d-none");
	});
})(jQuery);
//# sourceMappingURL=app.js.map
