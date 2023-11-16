import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { student } from '../student';
import { PassComponent } from './pass/pass.component';
import { FailComponent } from './fail/fail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PassComponent, FailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student';

  sarr=[{name:"", mark:0}];

  addStudents(name: string, marks:string){
    let y: number = +parseInt(marks);
    this.sarr.push({name:name, mark:y});
  }

  get students(){
    return this.sarr;
  }
}
