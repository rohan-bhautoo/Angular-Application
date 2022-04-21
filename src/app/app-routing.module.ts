import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentListComponent } from './component-list/component-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleComponentComponent } from './single-component/single-component.component';

const routes: Routes = [
  {
    path: 'component', component: ComponentListComponent
  },
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'component/:id', component: SingleComponentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
