import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIconModule,
    CommonModule,
    FooterComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact = [
    {value:'#20,21,ECR, 100FT, ROAD, KARUVADIKUPPAM, PONDICHERRY-605008',icon:'location_on'},
    {value:'+919443279915 | +919943868585',icon:'phone'},
    {value:'bookings@basstravels.in',icon:'email'},
  ]
}
