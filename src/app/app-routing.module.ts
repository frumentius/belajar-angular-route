import { Injectable, NgModule } from '@angular/core';
import { ResolveFn, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { FirstComponent } from './first/first.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { ChildBComponent } from './first/child-b/child-b.component';
import { SecondComponent } from './second/second.component';
import { DetailComponent } from './second/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Membuat template title ?
@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(title + ' | Belajar Angular Route');
    }
  }
}

//Dynamic title value ?
const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('Child A - First Component');

const routes: Routes = [
  {
    path: 'first-component',
    title: 'First Component',
    component: FirstComponent,
    children: [ //child route
      {
        path: 'child-a',
        title: resolvedChildATitle,
        component: ChildAComponent,
      },
      {
        path: 'child-b',
        component: ChildBComponent,
      },
    ]
  },
  {
    path: 'second-component/:id/:name',
    component: DetailComponent,
  },
  {
    path: 'second-component',
    title: 'Second Component',
    component: SecondComponent
  },
  { path: 'lazy-modul', loadChildren: () => import('./lazy-modul/lazy-modul.module').then(m => m.LazyModulModule) },
  { path: '', title: 'Home', component: HomeComponent },
  { path: '**', title: 'Page Not Found', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
