import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',    
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css', 
})

export class TasksComponent {

  @Input({required: true}) id!: string;
  @Input({required: true}) name!:string;

  shouldShowAddTask: boolean = false

  constructor(private tasksService:TasksService) {

  }

  get selectedUsersTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  onStartAddTask() {
    this.shouldShowAddTask = true;
  }

  onCloseAddTask() {
    this.shouldShowAddTask = false;
    }  

  onAddTask() {   
    this.shouldShowAddTask = false;
  }

}
