import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  @Input({ required: true }) course?: Course;
  @Output() courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('Course card was viewed');
    this.courseSelected.emit(this.course);
  }
}
