import { Component } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Porerties
  cid:number = 101;
  cname:string = "Angular7";
  cost:number =20000;
  trainer:string = "Satish Prasad";
  startDate:Date = new Date();
  isOnline:boolean = false;

  //Objects

  course: Course = {
    cid : 101,
    cname : "Angular7",
    cost : 20000,
    trainer : "Satish Prasad",
    duration : "25hrs",
  }

  //Arrays
  courseNames :string[] = ["Angular7","Node JS","MongoDB","Express JS","React JS"];

  //List or Array of Objects
  mycourse:Course[] =[
    {cid:101, cname:"Angular 7",cost:10000, trainer: "Satish Prasad", duration: "25Hrs"},
    {cid:102, cname:"Node JS", cost: 5000, trainer: "Satish Prasad", duration: "10Hrs"},
    {cid:103, cname: "MongoDB", cost: 6000, trainer: "Satish Prasad", duration: "5Hrs"},
    {cid:104, cname: "Express JS", cost: 7000, trainer: "Satish Prasad", duration: "10Hrs"}
  ];

  //Methods or Functions
  showMessage1(){
    alert("You clicked on Button");
  }

  showMessage2(name:string,email:string){
    alert("Hi name is "+name+", Your email is: "+email);
  }

  getCourseInfo(course:Course){
    alert("Hi Course name: "+course.cname+" Cost: "+course.cost);
  }
}
