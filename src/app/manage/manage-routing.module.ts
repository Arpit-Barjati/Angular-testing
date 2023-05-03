import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { UserDetailsComponent } from '../user/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      { path: ':id', component: UserDetailsComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
