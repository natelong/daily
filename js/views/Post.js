(function() {
    var app = window.app || {};
    app.views = app.views || {};

    app.views.Post = Backbone.View.extend({
        tagName: "tr",
        className: "post",
        template: _.template($("#postTemplate").html()),
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.$el.addClass(this.model.get("difficulty").toLowerCase());
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
}());
