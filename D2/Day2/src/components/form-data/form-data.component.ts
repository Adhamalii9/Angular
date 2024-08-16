import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-form-data',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.css'
})



export class FormDataComponent {
  students: Student[] = [];
  studentName: string = '';
  studentAge!: number;
  isSubmitted: boolean = false;
  nextId: number = 1;


  addStudent(){
    this.isSubmitted = true;

    if (this.studentName && this.studentAge > 0) {
      const newStudent: Student = {
        id: this.nextId++,
        name: this.studentName,
        age: this.studentAge,
      };

      this.students.push(newStudent);
      this.studentName = '';
      this.studentAge = undefined!;
      this.isSubmitted = false;
    }
  }

  removeStudent(studentIndex: number) {
    this.students = this.students.filter(student => student.id !== studentIndex);
  }

  
}
