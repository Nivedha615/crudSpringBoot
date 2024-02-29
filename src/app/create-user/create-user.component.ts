import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user : User = new User();
  registerForm: FormGroup | any;
  isSubmitted = false;
  constructor(private userService : UserService, private router: Router,  private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: new FormControl(['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]]),
      lastName: new FormControl(['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]]),
      email: new FormControl(['', [Validators.required, Validators.email]])
    }
    );
  }

  get name() {
    return this.registerForm.get('name');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }
  
  get email() {
    return this.registerForm.get('email');
  }
  onSubmit() {
     this.isSubmitted = true;
    this.userService.createUser(this.user).subscribe(
      (data) => {console.log(data),
      this.goToUser();
      }
    );
  }

  goToUser() {
    this.router.navigate(['/users']);
  }

}
