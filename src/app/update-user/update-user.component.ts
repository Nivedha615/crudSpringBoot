import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
 //user : User = new User();
 id : number = 0;
  constructor(private userService : UserService, private activatedRoute : ActivatedRoute, private router: Router) { }

  user : any ;

  ngOnInit(): void {
   
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(
    (data) => {
     this.user= data;
     
    }
    )
  }

  updateUser() {
    this.userService.updateUser(this.id, this.user).subscribe(
      (data) => {
        this.user = new User();
        console.log(data);
        this.user = data;
        this.router.navigate(['/users']);

      }
    )
  }

  onSubmit() {
    this.updateUser();
  }
  

}
