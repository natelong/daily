(function() {
    var app = window.app || {};
    app.views = app.views || {};

    app.views.FilterList = Backbone.View.extend({
        el: "#filterList",
        initialize: function() {
            app.filters = new app.collections.Filter();
            this.listenTo(app.filters, "reset", this.renderFilters);
            app.filters.fetch({ reset: true });
        },
        renderFilters: function() {
            var frag = document.createDocumentFragment();
            var self = this;

            this.filterViews = [];

            app.filters.each(function(filter) {
                var view = new app.views.Filter({ model: filter });
                self.filterViews.push(view);
                var node = view.render().el;
                if(node) frag.appendChild(node);
            });

            this.$el.empty();
            this.$el.append(frag);
        }
    });
}());
