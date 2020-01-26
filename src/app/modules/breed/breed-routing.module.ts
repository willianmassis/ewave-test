import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BreedDetailComponent } from '../../components/breed-detail/breed-detail.component';
import { BreedComponent } from './breed.component';

const routes: Routes = [
  { path: '', component: BreedComponent },
  { path: ':name', component: BreedDetailComponent },
  { path: ':name/:subName', component: BreedDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedRoutingModule { }
