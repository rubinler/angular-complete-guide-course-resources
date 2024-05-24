import { Component, Input, input, computed, EventEmitter, Output, output} from '@angular/core';

/* type User = {
  id: string, 
  avatar:string, 
  name: string
} */

interface User {
  id: string, 
  avatar:string, 
  name: string
} 

@Component({
  selector: 'app-user',    
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',  
})
export class UserComponent {
  
@Input() user!: User
@Input({required: true}) selected!: boolean;

//  @Output()
//  select = new EventEmitter();
// just an EventEmiiter under the hood, not a signal 
select = output<string>()


  // Signal approach

  //avatar = input.required<string>();
  //name = input.required<string>();

  // Signal imagePath
  //imagePath = computed(  () => {
//    return './assets/users/' + this.avatar();
//  });

get ImagePath() {
  return './assets/users/' + this.user.avatar;
}

  onSelectUser() {
    this.select.emit(this.user.id);
  }
 
}
