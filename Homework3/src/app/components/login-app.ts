import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {
    RouteConfig,  ROUTER_DIRECTIVES,
    LocationStrategy, HashLocationStrategy
} from 'angular2/router';
import {Hero} from './../models/hero';
import {HeroEditor} from './hero-editor';
import {HeroList} from './hero-list';


@RouteConfig([
    {path: '/', component: HeroList, as: 'Home'},
    {path: '/', component: HeroList, as: 'Home'},
    {path: '/edit/:id', component: HeroEditor, as: 'Edit'  }
])
/*
@RouteConfig([
    {path: '/', component: Login, as: 'Home'},
    {path: '/', component: Students, as: 'Student'},
    {path: '/', component: Actions, as: 'Actions'},
    {path: '/edit/:id', component: ActionForm, as: 'addAction'  }
])
*/
@Component({
    selector: 'stars-app',
    templateUrl: '/src/app/components/login.html',
    /*template: `
        <h1>{{title}}</h1>
<!--    <a [router-link]="['Home']">Home</a>
        <a [router-link]="['/Edit']">Edit</a>-->
        <router-outlet></router-outlet>`,*/
    directives: [ ROUTER_DIRECTIVES]
})

export class Login {
    title = 'STARS-Login';
}