define(function (require) {
    var router = require('plugins/router');

    return {
        router: router,
        activate: function() {
            router.map([
                { route: '', title:'Home', moduleId: 'home', nav: true },
                { route: 'about', title: 'About Us', moduleId: 'about', nav: true },
                { route: 'calendar', title: 'Calendar', moduleId: 'calendar', nav: true },
                { route: 'pastPrograms', title: 'Past Programs', moduleId: 'pastPrograms', nav: true },
                { route: 'gallery', title: 'Gallery', moduleId: 'gallery', nav: true },
                { route: 'media', title: 'Media', moduleId: 'media', nav: true },
                { route: 'contact', title: 'Contact', moduleId: 'contact', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});