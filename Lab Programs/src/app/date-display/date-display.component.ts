import { Component } from '@angular/core';

@Component({
  selector: 'app-date-display',
  standalone: false,
  
  templateUrl: './date-display.component.html',
  styleUrl: './date-display.component.css'
})
export class DateDisplayComponent {
  
      // Variable to hold the current date
      currentDate: Date = new Date();
}
