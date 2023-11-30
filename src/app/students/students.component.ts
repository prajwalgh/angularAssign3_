import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  students:Student[]=[]
  message:string='';
  colorClass:string='';
  constructor(private service:StudentService){
    this.students=service.findAllStudents();
  }
  showStudents(){
     
  }
  deleteStudent(rollNo:number){
    const result =confirm('want to delete student with roll no?:'+rollNo);
    if(result){
    this.students=this.students.filter(s => s.rollno != rollNo);
    this.message='Record Deleted Successfully!';
    this.colorClass='sucess';
    }
    else{
      this.message='Deletion Cancel!';
      this.colorClass='error';
    }
  }
  updateStudent(s:Student){
    console.log(s);
    }
  }
  
