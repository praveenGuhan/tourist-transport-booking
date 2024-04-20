import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-fares',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIconModule,
    CommonModule,
    FooterComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './fares.component.html',
  styleUrl: './fares.component.scss'
})
export class FaresComponent {
  fares = [
    {vehichle:'Tempo Traveler 17S',img:'assets/img/F-17TT.png',hrsRate:'Rs.2500 / 3 Hours Min.',toolCharge:'+ Toll surcharges',fuel:'Rs.3500 / Day',subFuel:'+ Fuel & Toll Charges',kilometer:'Rs.20/ Kilometer'},
    {vehichle:'Tempo Traveler 14S',img:'assets/img/F-17TT.png',hrsRate:'Rs.2000 / 3 Hours Min..',toolCharge:'+ Toll surcharges',fuel:'Rs.2700 / Day',subFuel:'+ Fuel & Toll Charges',kilometer:'Rs.16/ Kilometer'},
    {vehichle:'Mini-Bus (Non-A.C.)',img:'assets/img/F-8726.png',hrsRate:'Rs.2500 / 3 Hours Min.',toolCharge:'+ Toll surcharges',fuel:'Rs.4500 / Day',subFuel:'+ Fuel & Toll Charges',kilometer:'Rs.29/ Kilometer'},
    {vehichle:'Mini-Bus (A.C.)',img:'assets/img/F-2662.png',hrsRate:'Rs.3000 / 3 Hours Min.',toolCharge:'+ Toll surcharges',fuel:'Rs.6500 / Day',subFuel:'+ Fuel & Toll Charges',kilometer:'Rs.35/ Kilometer'},
    {vehichle:'Luxury Bus (A.C.)',img:'assets/img/F-8023.png',hrsRate:'Rs.2500 / 3 Hours Min.',toolCharge:'+ Toll surcharges',fuel:'Rs.6500 / Day',subFuel:'+ Fuel & Toll Charges',kilometer:'Rs.35/ Kilometer'},
    {vehichle:'Innova',img:'assets/img/F-Innova.png',hrsRate:'Rs. 1700 / 3 Hours Min.',toolCharge:'+ Toll surcharges',fuel:'Rs.1700 / Day',subFuel:'+ Fuel & Toll Charges',kilometer:'Rs.12/ Kilometer'},
    {vehichle:'Indigo',img:'assets/img/F-Indigo.png',hrsRate:'Rs.1200 / 3 Hours Min.',toolCharge:'+ Toll surcharges',fuel:'Rs.1200 / Day',subFuel:'+ Fuel & Toll Charges',kilometer:'Rs.8.50/ Kilometer'},
    {vehichle:'Etios',img:'assets/img/F-Etios.png',hrsRate:'Rs.1200 / 3 Hours Min.',toolCharge:'+ Toll surcharges',fuel:'Rs.1200 / Day',subFuel:'+ Fuel & Toll Charges',kilometer:'Rs.9/ Kilometer'},
    {vehichle:'Deluxe Bus (Non-A.C.)',img:'assets/img/F-7277.png',hrsRate:'Rs.3000 / 3 Hours Min.',toolCharge:'+ Toll surcharges',fuel:'Rs.6000 / Day',subFuel:'+ Fuel & Toll Charges',kilometer:'Rs.35/ Kilometer'},
  ]
}
