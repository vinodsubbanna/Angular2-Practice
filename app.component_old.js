System.register(['angular2/core', './courses.component', './authors.component', './favourite.component', './auto-grow.directive', './button.component', './like.component', './voter.component', './tweets.component', './viewmode.component', './pipe.component', './summary.pipe', './bootstrap.panel.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, favourite_component_1, auto_grow_directive_1, button_component_1, like_component_1, voter_component_1, tweets_component_1, viewmode_component_1, pipe_component_1, summary_pipe_1, bootstrap_panel_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favourite_component_1_1) {
                favourite_component_1 = favourite_component_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            },
            function (button_component_1_1) {
                button_component_1 = button_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (viewmode_component_1_1) {
                viewmode_component_1 = viewmode_component_1_1;
            },
            function (pipe_component_1_1) {
                pipe_component_1 = pipe_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Titiel header",
                        isfavourite: true
                    };
                    this.tweet = {
                        totalLikes: 10,
                        iLike: false
                    };
                    this.post1 = {
                        voteCount: 10,
                        myVote: 0
                    };
                    this.post2 = {
                        title: 'Lorel ipsum sample',
                        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                    };
                }
                AppComponent.prototype.onFavouriteChange = function ($event) {
                    console.log($event.newValue);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n       <input type=\"text\" bindon-ngModel=\"title\" autoGrow> \n       <input type=\"text\" [(ngModel)]=\"title\">\n       <button (click)=\"title=''\">CLEAR</button>\n       <br/>\n       <favourite [is-favourite]=\"post.isfavourite\" (change)=\"onFavouriteChange($event)\"></favourite>\n       <butclick></butclick>\n       <butclick></butclick>\n       <authors></authors>\n       <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n       <voter [voteCount]=\"post1.voteCount\" [myVote]=\"post1.myVote\" (vote)=\"onVote($event)\"></voter>\n       <viewmode></viewmode>\n       <pipe></pipe> <br/>\n       {{post2.title}}<br/>\n       {{post2.body | summary : 10}}<br/>\n       <bs-panel>\n       <div class=\"heading\">This is the Header</div>\n       <div class=\"body\">This is the body</div>\n       <div class=\"body\">This is Another body</div>\n       </bs-panel>\n\n    ",
                        directives: [favourite_component_1.FavouriteComponent, courses_component_1.CoursesComponent, auto_grow_directive_1.AutoGrowDirective,
                            button_component_1.ButtonClickComponent, authors_component_1.AuthorsComponent, like_component_1.LikeComponent,
                            voter_component_1.VoterComponent, tweets_component_1.TweetsComponent, viewmode_component_1.ViewModeComponent, pipe_component_1.PipeComponent,
                            bootstrap_panel_component_1.BootstrapPanel],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component_old.js.map