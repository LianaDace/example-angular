import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent {
    tasks = ['Example', 'Example']
  taskInputValue = '';

  addTask(): void {
    if(this.taskInputValue) {
      this.tasks.push(this.taskInputValue);
      this.taskInputValue = '';
    }
  }

  deleteTask(index: number): void {
   //this.tasks.splice(index, 1)
    this.tasks = this.tasks.filter((task, i) => i !== index);
  }

}
