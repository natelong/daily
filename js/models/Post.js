(function() {
    var app = window.app || {};
    app.models = app.models || {};

    app.models.Post = Backbone.Model.extend({
        initialize: function() {
            var difficulty = this.get("difficulty").toLowerCase();

            this.set("hidden", false);
            this.set("label", app.difficultyMap[difficulty]);
        }
    });
}());
