import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
  
})


export class HeaderComponent {
 headerArea = [
  {text:'Corporate/Family tours',subText:'Comfort Travel Assured'},
  {text:'Temple & Family tours',subText:'Organized Easily'},
  {text:'Educational Tours',subText:'Arranged Instantly'},
 ]

 
}
