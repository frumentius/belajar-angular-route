import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyModulComponent } from './lazy-modul.component';

const routes: Routes = [{ path: '', component: LazyModulComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModulRoutingModule { }
