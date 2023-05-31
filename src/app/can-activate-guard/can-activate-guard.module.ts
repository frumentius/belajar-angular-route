import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanActivateGuardRoutingModule } from './can-activate-guard-routing.module';
import { CanActivateGuardComponent } from './can-activate-guard.component';


@NgModule({
  declarations: [
    CanActivateGuardComponent
  ],
  imports: [
    CommonModule,
    CanActivateGuardRoutingModule
  ]
})
export class CanActivateGuardModule { }
