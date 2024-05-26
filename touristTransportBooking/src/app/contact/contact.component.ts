import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIconModule,
    CommonModule,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule, MatInputModule, MatIconModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact = [
    {value:'#12,IIIrd Main Road, Bharathidasan Nagar, Mudaliarpet, Puducherry. 605004',icon:'location_on'},
    {value:'+919790283980 | +919443499351',icon:'phone'},
    {value:'bookings@jeyasritravels.in',icon:'email'},
  ]
}
