/*global app*/
(function(app, document) {

	var model = new app.HelloModel({ id: document.location.hash.slice(1) });
	model.fetch();

	$(document).ready(function() {
		app.hello = new app.HelloView({
			el: $('.hello').first(),
			model: model
		});
	});

}(app, document));
