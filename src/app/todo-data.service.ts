import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {

  //Placeholder for last ID to simulate incrementing
  lastId: number = 0;
  //Placeholder for Todos
  todos: Todo[] = [];

  constructor() { }

  //Simulate POST /todos
  addTodo(todo: Todo): TodoDataService{
    if (!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  //Simulate DELETE /todos
  deleteTodoById(id: number): TodoDataService{
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  //Simulate PUT /todos
  updateTodoById(id: number, values: Object = {}): Todo{
    let todo = this.getTodoById(id);
    if (!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  //Simulate GET /todos
  getAllTodos(): Todo[]{
    return this.todos;
  }

  //Simulate GET /todos/:id
  getTodoById(id: number): Todo{
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  //Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedComplete = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
  }
}
