import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIconModule,
    CommonModule,
    FooterComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.scss'
})
export class FleetComponent {
  cars=[
    {carname: 'Innova',seater:'7 Seater',icon: 'check',rate:'12',bags:'9 Bags',img:'assets/img/F-Innova.png'},
    {carname: 'Etios',seater:'4 Seater',icon: 'check',rate:'9',bags:'6 Bags',img:'assets/img/F-Etios.png'},
    {carname: 'Indigo',seater:'4 Seater',icon: 'check',rate:'8.50',bags:'6 Bags',img:'assets/img/F-Indigo.png'  },
    {carname: 'Deluxe Mini-Bus',seater:'37 Seater',icon: 'check',rate:'12' ,bags:'42 Bags',img:'assets/img/F-2662.png' },
    {carname: 'Luxury Coach',seater:'54 Seater',icon: 'check',rate:'15',bags:'60 Bags',img:'assets/img/F-7277.png'  },
    {carname: '17S Tempo Traveller',seater:'17 Seater',icon: 'check',rate:'20',bags:'20 Bags' ,img:'assets/img/F-17TT.png' },
    {carname: 'Luxury Mini-Bus',seater:'37 Seater',icon: 'check',rate:'15',bags:'42 Bags',img:'assets/img/F-8726.png' },
    {carname: 'Deluxe Luxury Coach',seater:'33 Seater',icon: 'check',rate:'35',bags:'38 Bags',img:'assets/img/F-8023.png'  },
    {carname: '14S Tempo Traveller',seater:'14 Seater',icon: 'check',rate:'16',bags:'20 Bags',img:'assets/img/F-7277.png'  }

    // {value:'4 Seater',icon: 'check' },
    // {value:'6 Bags',icon: 'check' },

    // {value:'4 Seater',icon: 'check' },
    // {value:'6 Bags',icon: 'check' },

    // {value:'37 Seater',icon: 'check' },
    // {value:'42 Bags',icon: 'check' },

    // {value:'54 Seater',icon: 'check' },
    // {value:'60 Bags',icon: 'check' },

    // {value:'17 Seater',icon: 'check' },
    // {value:'20 Bags',icon: 'check' },

    // {value:'37 Seater',icon: 'check' },
    // {value:'42 Bags',icon: 'check' },

    // {value:'33 Seater',icon: 'check' },
    // {value:'38 Bags',icon: 'check' },

    // {value:'14 Seater',icon: 'check' },
    // {value:'20 Bags',icon: 'check' },
  ]
}
