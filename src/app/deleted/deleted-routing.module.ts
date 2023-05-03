import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedComponent } from './deleted.component';

const routes: Routes = [{ path: 'deleted', component: DeletedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletedRoutingModule { }
