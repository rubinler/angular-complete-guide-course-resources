import { NgModule } from "@angular/core";
import { AddTaskComponent } from "./add-task/add-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/card/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TasksComponent, 
        TaskComponent,
        AddTaskComponent,
    ],
    exports: [
        TasksComponent
    ],
    imports: [
        CommonModule,      
        SharedModule,
        FormsModule
    ]
})
export class TasksModule {

}