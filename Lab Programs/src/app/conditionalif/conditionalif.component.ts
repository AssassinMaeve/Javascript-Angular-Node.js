import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionalif',
  standalone: false,
  
  templateUrl: './conditionalif.component.html',
  styleUrl: './conditionalif.component.css'
})
export class ConditionalifComponent {
  isMessageVisible: boolean = false; // Variable to track visibility
  
  toggleMessage() {
    this.isMessageVisible = !this.isMessageVisible; // Toggle visibility
  }
}
