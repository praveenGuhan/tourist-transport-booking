import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from '../content/content.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
@NgModule({
  imports: [FooterComponent,MatMenuModule,MatButtonModule]
})
export class MyModule {}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    FooterComponent,
    ContentComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
  
})


export class HeaderComponent {
  selectedModule: any;
  constructor(private router: Router,private route: ActivatedRoute) {
    this.route.queryParams.subscribe((res:any)=> {
      console.log('res',res);
      this.selectedModule = res.param1
    })
  }

 headerArea = [
  {text:'Corporate/Family tours',subText:'Comfort Travel Assured'},
  {text:'Temple & Family tours',subText:'Organized Easily'},
  {text:'Educational Tours',subText:'Arranged Instantly'},
 ];

 menu = [
  {value:'Home'},
  {value:'About'},
  {value:'Fleet'},
  {value:'Fares'},
  {value:'Contact'},
 ]

 nextPage(event:any) {
   this.selectedModule = event;
   console.log('event',this.selectedModule);
    // switch(event)
    // case1 event.name
    if(event == 'About') {
      this.router.navigate(['/about'], { queryParams: { param1: 'About'} });
    } if(event == 'Contact') {
      this.router.navigate(['/contact'], { queryParams: { param1: 'Contact'} });

    }
    if(event == 'Fares') {
      this.router.navigate(['/fares'], { queryParams: { param1: 'Fares'} });

    }
    if(event == 'Fleet') {
      this.router.navigate(['/fleet'], { queryParams: { param1: 'Fleet'} });

    }
    if(event == 'Home') {
      this.router.navigate(['/home'], { queryParams: { param1: 'Home'} });

    }
 }
 
}
