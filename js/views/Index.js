(function() {
    var app = window.app || {};
    app.views = app.views || {};

    app.views.Index = Backbone.View.extend({
        el: "#container",
        initialize: function() {
            app.posts = new app.collections.Post();
            this.listenTo(app.posts, "reset", this.renderAllPosts);
            app.posts.fetch({ reset: true });

            this.$list = $("#postList");
            this.$table = $(".posts");
            this.$table.addClass(app.router.difficulty);

            this.filterView = new app.views.FilterList();
        },
        renderAllPosts: function() {
            var frag = document.createDocumentFragment();
            var self = this;

            this.postViews = [];

            app.posts.each(function(post) {
                var view = new app.views.Post({ model: post });
                self.postViews.push(view);
                var node = view.render().el;
                if(node) frag.appendChild(node);
            });

            this.$list.empty();
            this.$list.append(frag);
        },
        toggleFilter: function(difficulty) {
            this.$table.removeClass("all easy intermediate difficult hard");
            this.$table.addClass(app.router.difficulty);
        }
    });
}());
