import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.retrieveAll();

    /* this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: 'assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'August, 31, 2021',
        description: ''
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: 'assets/images/http.png',
        price: 45.99,
        code: 'LKL-1094',
        duration: 80,
        rating: 4,
        releaseDate: 'September, 1, 2021',
        description: ''
      },
      {
        id: 3,
        name: 'Angular: Animations',
        imageUrl: 'assets/images/animations.png',
        price: 34.99,
        code: 'LCZ-1195',
        duration: 60,
        rating: 3.6,
        releaseDate: 'September, 2, 2021',
        description: ''
      },
      {
        id: 4,
        name: 'Angular: CLI',
        imageUrl: 'assets/images/cli.png',
        price: 29.99,
        code: 'DGR-0874',
        duration: 30,
        rating: 5,
        releaseDate: 'September, 2, 2021',
        description: ''
      },
      {
        id: 5,
        name: 'Angular: Router',
        imageUrl: 'assets/images/router.png',
        price: 19.99,
        code: 'LPS-0091',
        duration: 20,
        rating: 4.1,
        releaseDate: 'September, 2, 2021',
        description: ''
      }
    ] */
  }
}
