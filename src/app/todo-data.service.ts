import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  constructor() { }

  lastId: number = 0;
  todos: Todo[] = [];

  addTodo(todo: Todo): TodoDataService{
    console.log(todo);
  	if (!todo.id){
  		todo.id = ++this.lastId;
  	}
  	this.todos.push(todo);
  	return this;
  }

  deleteTodoById(id:number): TodoDataService{
  	this.todos = this.todos
  	.filter(todo => todo.id !== id);
  	return this;
  }

  toggleTodoComplete(todo:Todo){
    console.log(todo);
  	let updatedTodo = this.updateTodoById(todo.id,{
  		complete:!todo.complete
  	});
  	return updatedTodo;
  }

  getAllTodos():Todo[]{
  	return this.todos;
  }

  updateTodoById(id:number,values:Object={}):Todo{
  	let todo = this.getTodoById(id);
  	if(!todo){
  		return null;
  	}
  	Object.assign(todo,values);
  	return todo;
  }

  getTodoById(id:number):Todo{
  	return this.todos
  	.filter(todo=>todo.id===id)
  	.pop();
  }



}