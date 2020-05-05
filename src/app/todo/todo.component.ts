import { Todos } from 'src/app/list-todos/list-todos.component';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number;
  todo:Todos;
  constructor(private todoDataService:TodoDataService,
    //we are doing below line to initialize , so param is a map and we can take the existing value 
    //using ActivatedRoute
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo =new Todos(this.id,'',false,new Date());
    if(this.id!=-1){
    this.todoDataService.retrieveTodo('anuj',this.id).subscribe(data=>{
      console.log(data);
      this.todo = data;
    })}
  }
  saveTodo(){
    if(this.id==-1){//when comparing with objects === is used
//create to do
this.todoDataService.createTodo('anuj',this.todo).subscribe(response=>{
  console.log(response);
  this.router.navigate(['todos']);
})
    }
    else{
      //update todo
    console.log('Method needs to be implemented');
    this.todoDataService.updateTodo('anuj',this.id,this.todo).subscribe(response=>{
      console.log(response);
      this.todo=response;
      this.router.navigate(['todos']);
    })}
  }


}
