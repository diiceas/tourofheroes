import {provideRouter, RouterConfig} from '@angular/router';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';

const routes: RouterConfig = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        // pathMatch: 'full' //this feature is not available for "@angular/router":  "3.0.0-alpha.8"
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];