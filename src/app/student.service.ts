import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:Student[]=[]
  constructor() { 
    let s1=new Student(1,"Akshita",2,80,["Java","Python"])
    let s2=new Student(2,"Rahul",4,90,["FullStack","Python"])
    let s3=new Student(3,"Amit",2,85,["Java","German"])
    let s4=new Student(4,"Akshit",4,60,["JavaScript","Python3"])
    let s5=new Student(5,"Aarti",5,70,["Java","Python"])
    this.students.push(s1);
    this.students.push(s2);
    this.students.push(s3);
    this.students.push(s4);
    this.students.push(s5);
  }
  findAllStudents(){
    return this.students;
  }
}
