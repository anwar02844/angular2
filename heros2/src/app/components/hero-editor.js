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
var router_1 = require('angular2/router');
var hero_service_1 = require("../services/hero-service");
var HeroEditor = (function () {
    function HeroEditor(heroService, router, params) {
        this.heroService = heroService;
        this.router = router;
        this.heroTypes = ['Prophet', 'Companion', 'Scholar'];
        this.hero = heroService.find(params.get('id'));
    }
    HeroEditor.prototype.onSubmit = function () {
        this.router.navigate(['/Home']);
    };
    HeroEditor = __decorate([
        angular2_1.Component({
            selector: 'hero-form',
            templateUrl: 'src/app/components/hero-form.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router, router_1.RouteParams])
    ], HeroEditor);
    return HeroEditor;
})();
exports.HeroEditor = HeroEditor;
//# sourceMappingURL=hero-editor.js.map