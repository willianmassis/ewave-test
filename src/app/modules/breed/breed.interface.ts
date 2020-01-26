import { KeyValue } from '@angular/common';

export interface IBreed {
	name: string;
	subName: string;
}

export interface IBreedResponse {
	message: KeyValue<string, string[]>[];
}

export interface IBreedImageResponse {
	message: string;
}
