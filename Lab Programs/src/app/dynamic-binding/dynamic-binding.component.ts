import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-binding',
  standalone: false,
  
  templateUrl: './dynamic-binding.component.html',
  styleUrl: './dynamic-binding.component.css'
})
export class DynamicBindingComponent {
  inputValue: string = '';
  title = 'Hello Angular';
}
