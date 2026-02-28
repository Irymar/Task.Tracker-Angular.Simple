import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Task = { title: string; done: boolean };

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page.html',
  styleUrl: './page.scss',
})
export class Page {
  taskInput = '';
  tasks: string[] = [];

  addTask(): void {
    const title = this.taskInput.trim();
    if (title === '') return;
    this.tasks.push(title);
    this.taskInput = '';
  }
}
