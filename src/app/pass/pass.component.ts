import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';
import { student } from '../../student';
import { AppComponent } from '../app.component';
import { FailComponent } from '../fail/fail.component';

@Component({
  selector: 'app-pass',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pass.component.html',
  styleUrl: './pass.component.css'
})
export class PassComponent {
  @Input() student!:student;
  
  get studs(){
    return this.student;
  }
}
