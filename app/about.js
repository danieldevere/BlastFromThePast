define(function(require) {
    var app = require('durandal/app');
    return {
        images: [
            {
                name: "Dan DeVere",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Larry Carbary",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Jon Van Regenmorter",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Sue Gessford",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Nick Powell",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Paul Schultz",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Rich Harner",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Rachel Morr",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Linda Voelker",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Tom Haynes",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Tina Lastovica",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Tom Rice",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Lisa Miller",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Lindsay Walker",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Tim Burgess",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "Tom Peterson",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "David Couling",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "John Anderson",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            },
            {
                name: "David Selley",
                url: "images/notAvailable.jpg",
                bio: "coming soon"
            }
        ],
        activate: function() {
            return this.images;
       },
       select: function(item) {
           item.viewUrl = 'detail';
           app.showDialog(item);
       }
    }
});