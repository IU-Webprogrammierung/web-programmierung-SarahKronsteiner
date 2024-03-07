import { Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomeComponent } from './home/home.component';

export
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail', component: DetailPageComponent }
];
