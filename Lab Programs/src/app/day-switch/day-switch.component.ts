import { Component } from '@angular/core';

// Decorator to define the component metadata
@Component({
  selector: 'app-day-switch', // The component's HTML tag
  standalone: false, // Indicates if the component is standalone
  templateUrl: './day-switch.component.html', // Path to the component's HTML template
  styleUrl: './day-switch.component.css' // Path to the component's CSS styles
})
export class DaySwitchComponent {
  // Variable to hold the day number input
  dayNumber: number = 1;

  // Method to set the day number
  setdayNumber(dayNumber: number) {
    this.dayNumber = dayNumber;
  }
}