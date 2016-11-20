System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PipeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PipeComponent = (function () {
                function PipeComponent() {
                    this.course = {
                        title: 'Angular 2 for Beginners',
                        rating: 4.9756,
                        students: 5934,
                        price: 99.95,
                        releaseDate: new Date(2016, 3, 1)
                    };
                }
                PipeComponent = __decorate([
                    core_1.Component({
                        selector: 'pipe',
                        template: "\n        {{course.title | uppercase}}<br/>\n        {{course.rating | number :'2.2-2'}} <br/>\n        {{course.students | number }} <br/>\n        {{course.price | currency : 'AUD' : true : '2.2-2'}} <br/>\n        {{course.releaseDate | date : 'MMM yyyy'}} <br/>\n        {{course | json}}\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PipeComponent);
                return PipeComponent;
            }());
            exports_1("PipeComponent", PipeComponent);
        }
    }
});
//# sourceMappingURL=pipe.component.js.map