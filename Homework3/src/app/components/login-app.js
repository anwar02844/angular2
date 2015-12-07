var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var hero_editor_1 = require('./hero-editor');
var hero_list_1 = require('./hero-list');
var Login = (function () {
    function Login() {
        this.title = 'STARS-Login';
    }
    Login = __decorate([
        router_1.RouteConfig([
            { path: '/', component: hero_list_1.HeroList, as: 'Home' },
            { path: '/', component: hero_list_1.HeroList, as: 'Home' },
            { path: '/edit/:id', component: hero_editor_1.HeroEditor, as: 'Edit' }
        ]),
        angular2_1.Component({
            selector: 'stars-app',
            templateUrl: '/src/app/components/login.html',
            /*template: `
                <h1>{{title}}</h1>
        <!--    <a [router-link]="['Home']">Home</a>
                <a [router-link]="['/Edit']">Edit</a>-->
                <router-outlet></router-outlet>`,*/
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Login);
    return Login;
})();
exports.Login = Login;
//# sourceMappingURL=login-app.js.map