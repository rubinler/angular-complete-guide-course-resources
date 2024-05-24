import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',   
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

@Input({required: true}) userId!:string;
@Output() close = new EventEmitter<void>();
// legacy approach
enteredTitle = '';
enteredSummary='';
enteredDate='';
private tasksService = inject(TasksService);

// signal approach 
//enteredTitle = signal('');
//enteredSummary = signal('');
//enteredDate = signal('');

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
        this.tasksService.addTask(
          {title: this.enteredTitle,
            summary: this.enteredSummary, 
            dueDate: this.enteredDate},
            this.userId
        );
        this.close.emit();
  }
}
