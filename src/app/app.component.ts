import { Component, ViewChild } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  courses: Course[] = [...COURSES];
  course = COURSES[0];

  @ViewChild(CourseCardComponent) card?: CourseCardComponent;

  onCourseSelected(course: Course) {
    console.log(this.card);
  }
}
