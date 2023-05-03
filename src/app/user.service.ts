import { Injectable } from '@angular/core';
import { User } from './user/interface/user-interface';
import { users } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[] = [];

  constructor() {
    this.users = users;
  }

  getUser(id:string):User{
    const userFound = users.find((user)=>user.id===id);
    if(userFound)
      return userFound;
    else
      return users[0];
  }
}
