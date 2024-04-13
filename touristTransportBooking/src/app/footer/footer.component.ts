import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  quickLinks = [
    {value:'Travel Ploicy'},
    {value:'F.A.Q`S'},
    {value:'Privacy Ploicy'},
    {value:'Feedback Form'}
  ];
}
