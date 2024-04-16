import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'header',component:HeaderComponent},
    {path:'footer',component:FooterComponent},
    {path:'content',component:ContentComponent},
    {path:'about',component:AboutComponent}
];
