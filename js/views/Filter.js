(function() {
    var app = window.app || {};
    app.views = app.views || {};

    app.views.Filter = Backbone.View.extend({
        tagName: "a",
        className: "filter-btn btn",
        events: {
            "click": "toggle"
        },
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        },
        template: _.template($("#filterTemplate").html()),
        render: function() {
            this.$el
                .html(this.template(this.model.toJSON()))
                .attr({
                    href: "#" + this.model.get("difficulty")
                })
                .addClass("btn-" + this.model.get("label"));

            if(this.model.get("selected")) {
                this.$el.addClass("active");
            } else {
                this.$el.removeClass("active");
            }

            return this;
        },
        toggle: function() {
            app.filters.each(function(filter) {
                filter.set("selected", false);
            });

            this.model.set("selected", true);
        }
    });
}());
