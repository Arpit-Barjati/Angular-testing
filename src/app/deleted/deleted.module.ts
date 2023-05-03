import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeletedRoutingModule } from './deleted-routing.module';
import { DeletedComponent } from './deleted.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    DeletedComponent
  ],
  imports: [
    CommonModule,
    DeletedRoutingModule,
    UserModule
  ]
})
export class DeletedModule { }
