(function() {
    var app = window.app || {};
    app.collections = app.collections || {};

    app.collections.Post = Backbone.Collection.extend({
        model: app.models.Post,
        url: "/posts.json",
        comparator: "number",
        sync: function(method, model, opts) {
            if(method !== "read") {
                console.warn("Method %s not supported on Posts collection", method);
            }
            $.getJSON(model.url, opts.success);
        }
    });
}());