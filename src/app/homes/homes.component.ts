import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../Users';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {


  constructor(private rs : RestService) { }


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
      this.rs.getUsers().subscribe((data: Users[]) => {
        // resolve(data);
        this.users = data;
        console.log(this.users);
      });
    
    }
  }
