import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';
import { student } from '../../student';

@Component({
  selector: 'app-fail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fail.component.html',
  styleUrl: './fail.component.css'
})
export class FailComponent {
  @Input() student!:student;

  get studs(){ return this.student;}
}
