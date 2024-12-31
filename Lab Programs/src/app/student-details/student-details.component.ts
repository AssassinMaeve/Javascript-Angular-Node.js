import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Module } from 'module';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  imports: [CommonModule]
})
export class StudentDetailsComponent {
  students: string[] = ['Maeve Fernandes', 'Kate Fernandes', 'Kenric Fernandes'];
}