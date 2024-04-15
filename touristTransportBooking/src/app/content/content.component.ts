import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  cars=[
    {value:'7 Seater',icon: 'check' },
    {value:'9 Bags',icon: 'check' }
  ]
}
