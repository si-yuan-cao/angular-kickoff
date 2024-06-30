import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  courses: Course[] = [...COURSES];
  course = COURSES[0];

  @ViewChild('cardRef1', { read: ElementRef }) card1?: ElementRef;
  @ViewChild('cardRef2') card2?: CourseCardComponent;
  @ViewChild('container') containerDiv?: ElementRef;
  @ViewChild('courseImage') courseImage?: ElementRef;

  constructor() {
    console.log('containerDiv', this.containerDiv);
  }

  ngAfterViewInit(): void {
    console.log('containerDiv -- ngAfterViewInit', this.containerDiv);
    console.log('courseImage -- ngAfterViewInit', this.courseImage);
  }

  onCourseSelected(course: Course) {
    console.log('card1', this.card1);
    console.log('card2', this.card2);
    console.log('containerDiv', this.containerDiv);
  }
}
