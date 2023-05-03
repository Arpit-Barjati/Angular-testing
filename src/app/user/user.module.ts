import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterUserPipe } from './filter-user.pipe';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    FilterUserPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserComponent,
    UserListComponent,
    UserDetailsComponent
  ]
})
export class UserModule { }
