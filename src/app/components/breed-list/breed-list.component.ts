import { Component, OnInit, Input } from '@angular/core';
import { IBreed } from 'src/app/modules/breed/breed.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent {

  constructor(private readonly route: Router) { }
  
  @Input() filteredBreeds: IBreed[] = [];

  goToDetail(item: IBreed): void {
    this.route.navigate([`/${item.name}/${item.subName}`]);
  }
}
