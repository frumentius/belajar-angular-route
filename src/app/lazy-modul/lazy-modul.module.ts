import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModulRoutingModule } from './lazy-modul-routing.module';
import { LazyModulComponent } from './lazy-modul.component';


@NgModule({
  declarations: [
    LazyModulComponent
  ],
  imports: [
    CommonModule,
    LazyModulRoutingModule
  ]
})
export class LazyModulModule { }
