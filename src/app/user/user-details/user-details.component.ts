import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../interface/user-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  user!:User;
  id!:string;

  constructor(private userService:UserService,private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.user = this.userService.getUser(this.id);
    });
  }


}
