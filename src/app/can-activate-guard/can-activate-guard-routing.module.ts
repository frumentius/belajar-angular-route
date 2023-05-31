import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardComponent } from './can-activate-guard.component';

const routes: Routes = [{ path: '', component: CanActivateGuardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanActivateGuardRoutingModule { }
