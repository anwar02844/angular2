var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key), void 0;
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = this && this.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var hero_1 = require('./../models/hero');
var angular2_1 = require('angular2/angular2');
var HeroService = (function () {
    function HeroService() {
        this.heroes = [new hero_1.Hero(1, 'Muhammad Ibn `Abd Allāh', 'Prophet', 'Kindness is a mark of faith, and whoever is not kind has no faith.'), new hero_1.Hero(2, 'Abu Bakr Al-Siddiq', 'Companion'), new hero_1.Hero(3, 'Umar ibn Al-Khattāb', 'Companion'), new hero_1.Hero(4, 'Uthman Ibn Affan', 'Companion'), new hero_1.Hero(5, 'Ali ibn Abi Talib', 'Companion')];
    }
    HeroService.prototype.find = function (id) {
        return this.heroes.filter(function (c) {
            return c.id == id;
        })[0];
    };
    HeroService.prototype.remove = function (travel) {
        var index = this.heroes.indexOf(travel);
        this.heroes.splice(index, 1);
    };
    HeroService = __decorate([angular2_1.Injectable(), __metadata('design:paramtypes', [])], HeroService);
    return HeroService;
})();
exports.HeroService = HeroService;
//# sourceMappingURL=hero-service.js.map

//# sourceMappingURL=hero-service-compiled.js.map