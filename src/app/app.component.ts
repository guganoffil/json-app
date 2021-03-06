import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'json-app';

searchKey:string ="";
public searchTerm :string ='';
  
firstName: any;

  
  constructor(private rs : RestService){}

  columns = ["User Id", "First Name", "Last Name", "Email", "Mobile", "Salary"];

  index = ["id", "firstName", "lastName", "email", "mobile", "salary"];

  users : Users[] = [];

  ngOnInit(): void {
   this.newMethod();
    // this.rs.getUsers().subscribe
    // (data =>{
    //   console.log(data);
    // });

    // return new Promise((resolve, reject) => {
    //   this.designerProvider.getSuites().subscribe(data => {
    //     resolve(data);
    //   }, (error)=>{
    //     console.log("Promise rejected with " + JSON.stringify(error));
    //   });
    // });
  }
  newMethod(){
      this.rs.getUsers().subscribe(data => {
        // resolve(data);
        this.users = data;
        console.log(this.users);
      });
    
  }
search(){
  if (this.firstName ==""){
    this.ngOnInit();
  }else{
    this.users = this.users.filter(res=>{
      return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
    })
  }
}


}