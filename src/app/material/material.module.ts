import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MaterialComponent,
  }
];

@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MaterialModule { }
