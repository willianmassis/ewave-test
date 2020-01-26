import { IBreed } from '../../modules/breed/breed.interface';
import { BreedService } from '../../modules/breed/breed.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-breed-detail',
	templateUrl: './breed-detail.component.html',
	styleUrls: ['./breed-detail.component.scss']
})
export class BreedDetailComponent implements OnInit {
	constructor(
		private readonly route: ActivatedRoute,
		private readonly breedService: BreedService
	) {}

	breed: IBreed;
	title: string;
	image: string;

	ngOnInit(): void {
		this.route.params.subscribe(({ name, subName }: IBreed) => {
			this.breed = { name, subName };
			this.title = `${subName ? subName : ''} ${name}`;
		});

		this.breedService
			.getBreedImage(this.breed.name, this.breed.subName)
			.subscribe(e => (this.image = e.message));
	}
}
