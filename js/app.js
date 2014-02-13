(function() {
    var app = window.app || {};

    app.difficultyMap = {
        easy: "success",
        intermediate: "primary",
        difficult: "warning",
        hard: "danger"
    };
    
    app.router = new app.Router();
    Backbone.history.start();
}());
