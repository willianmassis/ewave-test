import {
	ISelectList,
	ISelectListItem
} from './../../shared/interfaces/select-list.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBreed, IBreedResponse, IBreedImageResponse } from './breed.interface';

@Injectable({
	providedIn: 'root'
})
export class BreedService {
	constructor(private readonly http: HttpClient) {}

	getBreeds(): Observable<IBreedResponse> {
		return this.http.get<IBreedResponse>('/breeds/list/all');
	}

	toSelectList(list: IBreedResponse): ISelectList {
		const breeds: IBreed[] = this.normalizeBreeds(list);

		return {
			items: breeds.map(breed => {
				return { id: breed.name, text: breed.name };
			})
		};
	}

	getBreedImage(
		name: string,
		subName?: string
	): Observable<IBreedImageResponse> {
		if (subName)
			return this.http.get<IBreedImageResponse>(
				`/breed/${name}/${subName}/images/random`
			);
		else
			return this.http.get<IBreedImageResponse>(
				`/breed/${name}/images/random`
			);
	}

	public getSubBreeds(breed: string, list: IBreedResponse): IBreed[] {
		const breeds: IBreed[] = [];

		Object.keys(list.message).forEach((e: string): void => {
			if (e === breed) {
				if (list.message[e].length > 0) {
					list.message[e].forEach((s: string) => {
						breeds.push({ name: e, subName: s });
					});
				} else {
					breeds.push({ name: e, subName: '' });
				}
			}
		});

		return breeds;
	}

	private normalizeBreeds(list: IBreedResponse): IBreed[] {
		const breeds: IBreed[] = [];

		Object.keys(list.message).forEach((e: string): void => {
			breeds.push({ name: e, subName: '' });
		});

		return breeds;
	}
}
