(function() {
    var app = window.app || {};
    app.collections = app.collections || {};

    app.collections.Filter = Backbone.Collection.extend({
        model: app.models.Filter,
        url: "filters.json",
        comparator: "index",
        sync: function(method, model, opts) {
            if(method !== "read") {
                console.warn("Method %s not supported on Filters collection", method);
            }
            $.getJSON(model.url, opts.success);
        }
    });
}());
