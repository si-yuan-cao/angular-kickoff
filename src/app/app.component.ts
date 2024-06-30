import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  courses: Course[] = [...COURSES];
  title = COURSES[0].description;
  price = 9.99797956675;
  rate = 0.67;
  startDate = new Date(2000, 0, 1);
  course = COURSES[0];

  onCourseSelected(course: Course) {
    console.log('Card was clicked', course);
  }
}
