import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'header',component:HeaderComponent}

];
