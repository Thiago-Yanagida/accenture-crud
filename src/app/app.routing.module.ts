import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditItemComponent } from './edit-item/edit-item.component';
import { TabelListComponent } from './tabel-list/tabel-list.component';

const routes: Routes = [
  {
    path: '',
    component: TabelListComponent
  },

  {
    path: 'edit',
    component: EditItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }