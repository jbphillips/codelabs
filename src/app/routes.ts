import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    { 
        path: '', component: HomeComponent,
        title: 'Home Page'
    },
    // { 
    //     path: 'details', component: DetailsComponent,
    //     title: 'Details Page'
    // }
    
    // This allows us to add an id to the route for the details page
    { 
        path: 'details/:id', component: DetailsComponent,
        title: 'Details Page'
    }
];

export default routeConfig;