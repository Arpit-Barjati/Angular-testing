import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveRoutingModule } from './active-routing.module';
import { ActiveComponent } from './active.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    ActiveComponent
  ],
  imports: [
    CommonModule,
    ActiveRoutingModule,
    UserModule
  ],
  exports:[]
})
export class ActiveModule { }
