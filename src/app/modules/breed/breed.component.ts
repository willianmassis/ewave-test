import { ISelectList } from './../../shared/interfaces/select-list.interface';
import { BreedService } from './breed.service';
import { Component, OnInit } from '@angular/core';
import { IBreed, IBreedResponse } from './breed.interface';

@Component({
	selector: 'app-breed',
	templateUrl: './breed.component.html',
	styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {
	constructor(private readonly breedService: BreedService) {}

	rawBreedList: IBreedResponse;
	breedSelectList: ISelectList = { items: [] };
	filteredBreeds: IBreed[] = [];
	selected: string;

	ngOnInit() {
		this.breedService.getBreeds().subscribe((response: IBreedResponse) => {
			this.rawBreedList = response;
			this.breedSelectList = this.breedService.toSelectList(response);
		});
	}

	getSelected() {
		this.filteredBreeds = this.breedService.getSubBreeds(this.selected, this.rawBreedList);
	}
}
