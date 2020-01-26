import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.scss']
})
export class TitleComponent {
	@Input() title: string;
	@Input() withBackButton: boolean;

	constructor(private readonly location: Location) {}

	goBack(): void {
		this.location.back();
	}
}
