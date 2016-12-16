import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {GitSearchComponent} from './components/pages/GitSearch.component';
import {MusicComponent} from './components/pages/music.component';
import {ArtistComponent} from './components/pages/artist/artist.component';

const appRoutes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'git',
        component: GitSearchComponent
    },
    {
        path:'music',
        component: MusicComponent
    },
    {
        path:'artist/:id',
        component: ArtistComponent
    }
    
];

export const RoutingComponent: ModuleWithProviders = RouterModule.forRoot(appRoutes);