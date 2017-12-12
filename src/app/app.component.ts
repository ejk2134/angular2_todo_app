import { Component } from '@angular/core';
// Import class so we can register it as dependancy injection token
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  // Ask Angular DI system to inject the dependency associated with the dependency
  // injection token 'TodoDataService' and assign it to a property called 'todoDataService'
  constructor(private todoDataService: TodoDataService){

  }
  // Service is now available as this.todoDataService
  onAddTodo(todo: Todo){
    this.todoDataService.addTodo(todo);
  }

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(){
    return this.todoDataService.getAllTodos();
  }
}
