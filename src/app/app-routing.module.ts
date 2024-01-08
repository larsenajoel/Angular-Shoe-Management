import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';
import { UpdateShoeComponent } from './update-shoe/update-shoe.component';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';

const routes: Routes = [
  {path: 'shoes', component: ShoeListComponent},
  {path: 'create-shoe', component: CreateShoeComponent},
  {path: 'update-shoe/:id', component: UpdateShoeComponent},
  {path: 'shoe-details/:id', component: ShoeDetailsComponent},
  {path: '', redirectTo: 'shoes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
