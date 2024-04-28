import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIconModule,
    CommonModule,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cars=[
    {value:'7 Seater',icon: 'check' },
    {value:'9 Bags',icon: 'check' }
  ]
}
