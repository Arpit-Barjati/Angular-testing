import { Component, Input } from '@angular/core';
import { User } from './interface/user-interface';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user!: User;
  @Input() path: string | undefined;
  buttonClass = '';
  title = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    if (this.path === 'active') {
      this.buttonClass = 'btn-danger';
      this.title = 'Deactivate';
    } else if (this.path === 'deleted') {
      this.buttonClass = 'btn-success';
      this.title = 'Activate';
    } else {
      this.buttonClass = 'btn-primary';
      this.title = 'Details';
    }
  }

  clickHandler(id:string){
    if(this.path === 'active' || this.path === 'deleted'){
      this.toggleIsDeletedHandler(id);
    }
    else{
      this.userDetailsHandler(id);
    }
  }

  toggleIsDeletedHandler(id: string) {
    const userFound = this.userService.users.find((user) => user.id === id);
    if (!userFound) {
      return;
    }
    userFound.isDeleted = !userFound.isDeleted;
  }

  userDetailsHandler(id: string) {
    this.router.navigate([`manage/${id}`]);
    window.scrollTo(0, 0);
  }
}
