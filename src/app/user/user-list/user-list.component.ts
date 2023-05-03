import { Component,Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../interface/user-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:User[];
  @Input() isDeleted!:boolean;
  path;
  
  constructor(private userService : UserService,private activatedRoute: ActivatedRoute){
    this.users = this.userService.users;
    this.path = this.activatedRoute.snapshot.routeConfig?.path;
  }
}

