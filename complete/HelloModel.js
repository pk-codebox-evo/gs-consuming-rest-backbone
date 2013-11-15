HelloModel = Backbone.Model.extend({
	urlRoot: 'http://rest-service.guides.spring.io/greeting',
	url: function() {
		return this.urlRoot + '?name=' + this.id;
	}
});