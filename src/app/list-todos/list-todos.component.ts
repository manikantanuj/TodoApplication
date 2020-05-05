import { AppRoutingModule } from './../app-routing.module';
import { RouterModule, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';


export class Todos{
  constructor(
    public id:number,
    public description:string,
    public done:false,
    public targetDate:Date
  ){
    

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})



export class ListTodosComponent implements OnInit {

  constructor(private todoService:TodoDataService,
    private route:Router) { }

  // todo = {
  //   id:1,
  //   description : "Learn to Dance"
  // }
  todos:Todos[];
  message:string;
//   [
//     new Todos(1,"Learn to dance",false,new Date()),
//     new Todos(2,"Fat to Fit",false,new Date()),
//     new Todos(3,"Champ in Angular",false,new Date()),
//     new Todos(4,"Visit India",false,new Date()),
// /*    { id:1, description:"Learn to dance"},
//    {id:2, description:"Fat to Fit"},
//    {id:3,description:"Champ in Angular"},
//    {id:4,description:"Visit India"} */

//   ]

  ngOnInit(): void {

    this.refreshTodos();
    
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('anuj').subscribe(
      response =>{
        console.log(response);
        this.todos=response;
      }
    );
  }

  deleteTodos(id){
    // this.todoService.deleteTodo(id);
  
    console.log(`Delete todo  ${id}`);
    this.todoService.deleteTodos('anuj',id).subscribe(response=>{
      console.log(response)
      this.message= `Delete Successful for ID ${id}`;
      this.refreshTodos();
    });
    console.log(`Deleted todo for ${id}`)
  }

  updateTodos(id){
   // this.todoService.updateTodos('anuj',id).subscribe(response=>{
      console.log(id);
      this.route.navigate(['todos',id]);

    
    
  }
  createTodo(){
    this.route.navigate(['todos',-1]);
  }

}
