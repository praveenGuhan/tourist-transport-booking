import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,
    MatIconModule,
    CommonModule,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  services = [ 
    {value:'Luxury coaches & mini-buses for wedding functions, weekend getaways, temple tours, corporate & educational tours & business trips.',icon:'keyboard_arrow_right'},
    {value:'Budget & Premium taxi cabs for Airport transit & personal travel.',icon:'keyboard_arrow_right'},
    {value:'Tempo-travelers for private family tours & business trips.',icon:'keyboard_arrow_right'},
    {value:'Custom-tour packages of customers with fleet & driver.',icon:'keyboard_arrow_right'},
    {value:'Summer holiday destinations & exclusive temple festival tours.',icon:'keyboard_arrow_right'},
  ]

  mission = [ 
    {value:'Deluxe air-conditioned and non-air-conditioned holiday coaches',icon:'keyboard_arrow_right'},
    {value:'Premium and budgeted taxis for personal and business needs',icon:'keyboard_arrow_right'},
    {value:'Disciplined and well-informed professional drivers',icon:'keyboard_arrow_right'},
    {value:'Safe and comfortable fleets and taxis',icon:'keyboard_arrow_right'},
    {value:'Most competitive and reasonable fares for tour packages',icon:'keyboard_arrow_right'},
  ]
}
