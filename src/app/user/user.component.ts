import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : User[] | undefined;
  totalPages : number = 0;
  itemsPerPage : number = 5;
  currentpage : number = 1;
  totalItems : any = 25;
  pages: number[] = [];


  constructor(private userService : UserService, private router : Router) { 
    
  }

  ngOnInit(): void {
    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.pages = Array.from({length: this.totalPages},(_, i)=> i+1);
    }
    this.userService.getPage(this.currentpage)
     .subscribe( (data  => {
      this.users = data
     }
     ))
  }

  get paginated() {
    const start = (this.currentpage-1) * this.itemsPerPage;
    const end =  start + this.itemsPerPage;

    return this.users?.slice(start, end);
  }

  getUsersList() {
    this.userService.getPage(this.currentpage).subscribe((data)=>
    this.users = data,
    );
  }

  deleteUser(id : number){
    return this.userService.deleteuser(id).subscribe(
      (data) => this.getUsersList()
    );
  }

  updateUser(id: number) {
     this.router.navigate(["/update-user", id]);
  }

  getPages(page : number) {
    this.currentpage = page;
    this.userService.getPage(page).subscribe((data) => console.log(data));
  }

  nextPage(page : number) {
 
    this.currentpage = this.currentpage + 1;
  }

  prevPage() {
    this.currentpage = this.currentpage - 1;
  }

}
