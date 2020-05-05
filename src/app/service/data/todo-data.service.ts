import { API_URL, TODO_JPA_API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }


  retrieveAllTodos(username){
    return  this.http.get<Todos[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
     // console.log("Excecute Hello World Bean Service");
    }

    deleteTodos(username,id){
      return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
    }

    retrieveTodo(username,id){
      return this.http.get<Todos>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
    }

    updateTodo(username,id,todos){
      return this.http.put<Todos>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,todos);
    }

    createTodo(username,todo){
      return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`,todo);
    }
}
