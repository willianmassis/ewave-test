import { BreedDetailComponent } from '../../components/breed-detail/breed-detail.component';
import { BreedListComponent } from './../../components/breed-list/breed-list.component';
import { TitleComponent } from './../../components/title/title.component';
import { BreedRoutingModule } from './breed-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedComponent } from './breed.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		BreedComponent,
		BreedDetailComponent,
		TitleComponent,
		BreedListComponent
	],
	imports: [CommonModule, BreedRoutingModule, FormsModule, ReactiveFormsModule],
	exports: [BreedRoutingModule]
})
export class BreedModule {}
