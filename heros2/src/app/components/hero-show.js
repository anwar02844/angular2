var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var HeroViewer = (function () {
    function HeroViewer() {
    }
    HeroViewer = __decorate([
        angular2_1.Component({
            selector: 'hero-show',
            template: "\n        <style>\n            table#hero-show img {\n                width: 400px;\n                height: 300px;\n            }\n            table#hero-show td.label {\n                width: 25%;\n                text-align: right;\n                color: #555;\n            }\n        </style>\n        <div *ng-if=\"hero\">\n            <h2>Hero details:</h2>\n            <table class=\"pure-table pure-table-bordered\"  id=\"hero-show\">\n                <tbody>\n                    <tr>\n                        <td class=\"label\">Name</td>\n                        <td>{{hero.name}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"label\">Type</td>\n                        <td>{{hero.heroType}}</td>\n                    </tr>\n                    <tr [hidden]=\"!hero.quote\">\n                        <td class=\"label\">Quote</td>\n                        <td>{{hero.quote}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ",
            directives: [angular2_1.CORE_DIRECTIVES],
            inputs: ['hero']
        }), 
        __metadata('design:paramtypes', [])
    ], HeroViewer);
    return HeroViewer;
})();
exports.HeroViewer = HeroViewer;
//# sourceMappingURL=hero-show.js.map