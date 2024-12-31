import { Component } from '@angular/core';

// Decorator to define the component metadata
@Component({
  selector: 'app-student-list', // The component's HTML tag
  standalone: false, // Indicates if the component is standalone
  templateUrl: './student-list.component.html', // Path to the component's HTML template
  styleUrls: ['./student-list.component.css'] // Path to the component's CSS styles
})
export class StudentListComponent {
  
  // Array to hold the list of student names
  students: string[] = ['Maeve', 'Amy', 'Kenric', 'Bunu'];

  // Variable to hold the new student name input
  newstudent: string = '';

  // Method to add a new student to the list
  addStudent() {

    // Check if the new student name is not empty or just whitespace
    if (this.newstudent.trim()) {

      // Add the new student name to the list
      this.students.push(this.newstudent.trim());

      // Clear the input field
      this.newstudent = '';
    }
  }
}
