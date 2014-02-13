(function() {
    var app = window.app || {};

    app.Router = Backbone.Router.extend({
        routes: {
            "":            "index",
            ":difficulty": "byDifficulty"
        },

        index: function() {
            if(!app.indexView) app.indexView = new app.views.Index();

            this.navigate("all", { trigger: true });
        },

        byDifficulty: function(difficulty) {
            difficulty = difficulty || "all";

            if(!app.indexView) app.indexView = new app.views.Index();

            this.difficulty = difficulty;
            app.indexView.toggleFilter(difficulty);
        }
    });
}());
