import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Interface to define the structure of a Task
interface Task {
  name: string;
  isEditing: boolean;
}

// Decorator to define the component metadata
@Component({
  selector: 'app-todo-list', // The component's HTML tag
  templateUrl: './todo-list.component.html', // Path to the component's HTML template
  styleUrls: ['./todo-list.component.css'], // Path to the component's CSS styles
  standalone: true, // Indicates if the component is standalone
  imports: [FormsModule, CommonModule] // Modules to import for this component
})
export class TodoListComponent {
  // Array to hold the list of tasks
  tasks: Task[] = [
    { name: 'Task 1', isEditing: false },
    { name: 'Task 2', isEditing: false },
    { name: 'Task 3', isEditing: false }
  ];

  // Variable to hold the new task input
  newTask: string = '';

  // Method to add a new task to the list
  addTask() {
    // Check if the new task name is not empty or just whitespace
    if (this.newTask.trim()) {
      // Add the new task to the list
      this.tasks.push({ name: this.newTask.trim(), isEditing: false });
      // Clear the input field
      this.newTask = '';
    }
  }

  // Method to enable editing mode for a task
  editTask(task: Task) {
    task.isEditing = true;
  }

  // Method to save the edited task
  saveTask(task: Task) {
    task.isEditing = false;
  }

  // Method to delete a task from the list
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}