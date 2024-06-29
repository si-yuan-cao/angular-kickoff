import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  coreCourses = COURSES[0];
  rxjsCourses = COURSES[1];
  ngrxCourses = COURSES[2];

  onCourseSelected(course: Course) {
    console.log('Card was clicked', course);
  }
}
