import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private baseUrl = "http://localhost:8085/api/users";
  private serverUrl = "http://localhost:8085/api"

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
 }
  
 getPage(page: number = 1) : Observable<User[]> {
   return this.http.get<User[]>(`${this.baseUrl}/page/${page}`)
 }

 createUser(user : User) : Observable<User[]>{
  return this.http.post<User[]>(`${this.baseUrl}`, user);
 }

 deleteuser(id: number) : Observable<User[]>{
  return this.http.delete<User[]>(`${this.baseUrl}/${id}`);
 }

 getUserById(id: number) : Observable<User[]> {
  return this.http.get<User[]>(`${this.baseUrl}/${id}`);
 }

 updateUser(id:number, user: User)  : Observable<User[]> {
  return this.http.put<User[]>(`${this.baseUrl}/${id}`, user);
 }
}
