System.register(['angular2/core', './author.service', './favourite.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, author_service_1, favourite_component_1;
    var AuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            },
            function (favourite_component_1_1) {
                favourite_component_1 = favourite_component_1_1;
            }],
        execute: function() {
            AuthorsComponent = (function () {
                function AuthorsComponent(authorService) {
                    this.authors = authorService.getAuthors();
                }
                AuthorsComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "\n        <h2>Authors</h2>\n        <ul></ul>\n        <li *ngFor=\"#author of authors\">\n            {{author}} <favourite></favourite>\n        </li>,\n    ",
                        providers: [author_service_1.AuthorService],
                        directives: [favourite_component_1.FavouriteComponent]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof author_service_1.AuthorService !== 'undefined' && author_service_1.AuthorService) === 'function' && _a) || Object])
                ], AuthorsComponent);
                return AuthorsComponent;
                var _a;
            }());
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map