import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
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
  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards?: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.cards);
    this.cards?.changes.subscribe((cards) => console.log(cards));
  }

  onCourseSelected(course: Course) {}

  onCoursesEdited() {
    this.courses.push({
      id: 8,
      description: 'Angular Testing Course',
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png',
      longDescription:
        'In-depth guide to Unit Testing and E2E Testing of Angular Apps',
      category: 'INTERMEDIATE',
      lessonsCount: 10,
    });
  }
}
