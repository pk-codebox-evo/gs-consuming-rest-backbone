$(document).ready(function() {

	var model = new HelloModel({ id: document.location.hash.slice(1) });
	model.fetch();

	var hello = new HelloView({
		el: $('.hello').first(),
		model: model
	});
});
